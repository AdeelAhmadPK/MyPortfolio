/**
 * Script to replace ALL emojis with React Icons site-wide
 * Usage: node scripts/replace-emojis-comprehensive.js
 */

const fs = require('fs');
const path = require('path');

// Emoji to React Icon mapping
const emojiMap = {
  // Fire & Emergency
  '🔥': 'FaFire',
  '🚨': 'FaBell',
  '⚠️': 'FaExclamationTriangle',
  
  // Location & Maps
  '📍': 'FaMapMarkerAlt',
  '🗺️': 'FaMap',
  '🏠': 'FaHome',
  '🏢': 'FaBuilding',
  '🏭': 'FaIndustry',
  '🏗️': 'FaTools',
  '🏥': 'FaHospital',
  
  // Communication
  '📞': 'FaPhoneAlt',
  '📱': 'FaMobileAlt',
  '📧': 'FaEnvelope',
  '💬': 'FaComments',
  
  // Tools & Settings
  '🔧': 'FaWrench',
  '🔨': 'FaHammer',
  '⚙️': 'FaCog',
  '🛠️': 'FaTools',
  '⚡': 'FaBolt',
  '🛡️': 'FaShieldAlt',
  '🔌': 'FaPlug',
  
  // Money & Business
  '💰': 'FaDollarSign',
  '💵': 'FaMoneyBillWave',
  '💸': 'FaMoneyBillAlt',
  '💼': 'FaBriefcase',
  
  // Charts & Analytics
  '📈': 'FaChartLine',
  '📉': 'FaChartBar',
  '📊': 'FaChartArea',
  '📋': 'FaClipboardList',
  
  // Search
  '🔍': 'FaSearch',
  '🔎': 'FaSearchPlus',
  
  // Documents & Writing
  '📝': 'FaEdit',
  '📄': 'FaFileAlt',
  '📑': 'FaFile',
  '📜': 'FaCertificate',
  '✍️': 'FaPencilAlt',
  
  // Calendar & Time
  '📅': 'FaCalendar',
  '⏰': 'FaClock',
  '⌚': 'FaClock',
  
  // Success & Achievement
  '🌟': 'FaStar',
  '🏆': 'FaTrophy',
  '🥇': 'FaMedal',
  '🎖️': 'FaAward',
  '✅': 'FaCheckCircle',
  '✔️': 'FaCheck',
  
  // Links & Web
  '🔗': 'FaLink',
  '🌐': 'FaGlobe',
  '📶': 'FaSignal',
  '🌍': 'FaGlobeAmericas',
  
  // Healthcare & Wellness
  '💊': 'FaPills',
  '👨‍⚕️': 'FaUserMd',
  '💆': 'FaSpa',
  '♿': 'FaWheelchair',
  
  // Home & Bath
  '🛁': 'FaBath',
  '🚿': 'FaShower',
  
  // Shopping & Commerce
  '🛒': 'FaShoppingCart',
  '🛍️': 'FaShoppingBag',
  '💳': 'FaCreditCard',
  '🏷️': 'FaTags',
  
  // Images & Media
  '📸': 'FaCamera',
  '📷': 'FaCameraRetro',
  '🎥': 'FaVideo',
  '📹': 'FaVideo',
  
  // Vehicles & Storage
  '🚗': 'FaCar',
  '📦': 'FaBox',
  
  // Weather
  '☁️': 'FaCloud',
  '⛈️': 'FaCloudShowersHeavy',
  '🌪️': 'FaWind',
  '💨': 'FaWind',
  '❄️': 'FaSnowflake',
  
  // Animals
  '🐜': 'FaBug',
  '🐛': 'FaBug',
  
  // Other Common Icons
  '🎯': 'FaBullseye',
  '🤝': 'FaHandshake',
  '🚀': 'FaRocket',
  '🔒': 'FaLock',
  '🔐': 'FaLock',
  '📐': 'FaRuler',
  '🎨': 'FaPalette',
  '💡': 'FaLightbulb',
  '📖': 'FaBook',
  '👥': 'FaUsers',
  '👨‍👩‍👧‍👦': 'FaUsers',
  '🔵': 'FaCircle',
  '🇺🇸': 'FaFlag',
  '🇬🇧': 'FaFlag',
  '🇨🇦': 'FaFlag',
  '🇦🇺': 'FaFlag',
  '💎': 'FaGem',
  '🦷': 'FaTooth',
  '🌿': 'FaLeaf',
  '👗': 'FaTshirt',
  '⚖️': 'FaBalanceScale',
  '💻': 'FaLaptop',
  '🤔': 'FaQuestionCircle'
};

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function findFilesRecursive(dir, pattern) {
  let results = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    // Skip node_modules, .next, and .git
    if (stat.isDirectory() && !['node_modules', '.next', '.git'].includes(item)) {
      results = results.concat(findFilesRecursive(fullPath, pattern));
    } else if (stat.isFile() && pattern.test(item)) {
      results.push(fullPath);
    }
  }
  
  return results;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  const iconsUsed = new Set();
  
  // Check if file has any emojis
  let hasEmojis = false;
  for (const emoji of Object.keys(emojiMap)) {
    if (content.includes(emoji)) {
      hasEmojis = true;
      break;
    }
  }
  
  if (!hasEmojis) return false;
  
  console.log(`\n📄 Processing: ${path.basename(filePath)}`);
  
  // Replace emojis with React Icons
  for (const [emoji, iconName] of Object.entries(emojiMap)) {
    if (newContent.includes(emoji)) {
      iconsUsed.add(iconName);
      
      // Replace different patterns:
      // 1. icon: "emoji" -> icon: <Icon className="w-6 h-6" />
      newContent = newContent.replace(
        new RegExp(`icon:\\s*["'\`]${escapeRegExp(emoji)}["'\`]`, 'g'),
        `icon: <${iconName} className="w-6 h-6" />`
      );
      
      // 2. icon="emoji" -> icon={<Icon className="w-6 h-6" />}
      newContent = newContent.replace(
        new RegExp(`icon=["'\`]${escapeRegExp(emoji)}["'\`]`, 'g'),
        `icon={<${iconName} className="w-6 h-6" />}`
      );
      
      // 3. { icon: "emoji", ... } -> { icon: <Icon className="w-6 h-6" />, ... }
      newContent = newContent.replace(
        new RegExp(`(\\{\\s*icon:\\s*)["'\`]${escapeRegExp(emoji)}["'\`"]`, 'g'),
        `$1<${iconName} className="w-6 h-6" />`
      );
    }
  }
  
  // Add or update react-icons import
  if (iconsUsed.size > 0) {
    const iconList = Array.from(iconsUsed).sort().join(', ');
    const importStatement = `import { ${iconList} } from 'react-icons/fa';`;
    
    // Check if file already has react-icons/fa import
    const reactIconsImportRegex = /import\s+\{[^}]+\}\s+from\s+['"]react-icons\/fa['"]/;
    
    if (reactIconsImportRegex.test(newContent)) {
      // Update existing import
      newContent = newContent.replace(reactIconsImportRegex, importStatement);
    } else {
      // Add new import after the last import statement
      const lastImportRegex = /(import\s+.*from\s+['"][^'"]+['"];\s*\n)/g;
      const matches = Array.from(newContent.matchAll(lastImportRegex));
      
      if (matches.length > 0) {
        const lastMatch = matches[matches.length - 1];
        const insertPosition = lastMatch.index + lastMatch[0].length;
        newContent = newContent.slice(0, insertPosition) + importStatement + '\n' + newContent.slice(insertPosition);
      }
    }
    
    console.log(`  ✅ Replaced ${iconsUsed.size} icon(s): ${Array.from(iconsUsed).join(', ')}`);
  }
  
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  }
  
  return false;
}

// Main execution
console.log('🚀 Starting site-wide emoji replacement with React Icons...\n');

const rootDir = path.join(__dirname, '..');
const files = findFilesRecursive(rootDir, /\.(tsx|ts|jsx|js)$/);

let processedCount = 0;
let modifiedCount = 0;

for (const file of files) {
  // Skip certain files
  if (file.includes('node_modules') || file.includes('.next') || file.includes('replace-emojis')) {
    continue;
  }
  
  processedCount++;
  const wasModified = processFile(file);
  if (wasModified) {
    modifiedCount++;
  }
}

console.log('\n✨ Replacement complete!');
console.log(`Total files processed: ${processedCount}`);
console.log(`Files modified: ${modifiedCount}`);
console.log('\n⚠️  Please run "npm run build" to verify all changes.\n');
