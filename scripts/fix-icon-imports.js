const fs = require('fs');
const path = require('path');

// Get all unique icon names used in a file
function extractIconNames(content) {
  const iconPattern = /<(Fa[A-Z][a-zA-Z]*)\s/g;
  const icons = new Set();
  let match;
  
  while ((match = iconPattern.exec(content)) !== null) {
    icons.add(match[1]);
  }
  
  return Array.from(icons);
}

// Check if file already has react-icons import
function hasReactIconsImport(content) {
  return /from ['"]react-icons\/fa['"]/.test(content);
}

// Get existing imported icons
function getExistingIcons(content) {
  const importMatch = content.match(/import\s+{([^}]+)}\s+from\s+['"]react-icons\/fa['"]/);
  if (!importMatch) return [];
  
  return importMatch[1]
    .split(',')
    .map(icon => icon.trim())
    .filter(Boolean);
}

// Add or update react-icons import
function addOrUpdateImport(content, iconsToImport) {
  if (iconsToImport.length === 0) return content;
  
  const importStatement = `import { ${iconsToImport.join(', ')} } from 'react-icons/fa';`;
  
  if (hasReactIconsImport(content)) {
    // Update existing import
    return content.replace(
      /import\s+{[^}]+}\s+from\s+['"]react-icons\/fa['"]/,
      importStatement
    );
  } else {
    // Add new import after other imports
    const lines = content.split('\n');
    let lastImportIndex = -1;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('import ')) {
        lastImportIndex = i;
      }
    }
    
    if (lastImportIndex >= 0) {
      lines.splice(lastImportIndex + 1, 0, importStatement);
      return lines.join('\n');
    }
  }
  
  return content;
}

// Process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const usedIcons = extractIconNames(content);
    
    if (usedIcons.length === 0) {
      return false; // No icons used
    }
    
    const existingIcons = getExistingIcons(content);
    const missingIcons = usedIcons.filter(icon => !existingIcons.includes(icon));
    
    if (missingIcons.length === 0 && existingIcons.length > 0) {
      return false; // All icons already imported
    }
    
    const allIcons = [...new Set([...existingIcons, ...missingIcons])].sort();
    const newContent = addOrUpdateImport(content, allIcons);
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ Fixed imports in: ${path.basename(filePath)} (added ${missingIcons.length} icon(s): ${missingIcons.join(', ')})`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Recursively find all TypeScript/TSX files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules') {
        findFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main execution
console.log('🔧 Fixing React Icons imports...\n');

const projectRoot = path.resolve(__dirname, '..');
const files = findFiles(projectRoot);

let fixedCount = 0;

files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`\n✨ Complete! Fixed imports in ${fixedCount} file(s).`);
