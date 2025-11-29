const fs = require('fs');
const path = require('path');

// Copy contact.php to the out directory
const sourceFile = path.join(__dirname, '../public/contact.php');
const destDir = path.join(__dirname, '../out');
const destFile = path.join(destDir, 'contact.php');

// Ensure out directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy the PHP file
try {
  fs.copyFileSync(sourceFile, destFile);
  console.log('✓ Copied contact.php to build output');
} catch (error) {
  console.error('✗ Failed to copy contact.php:', error.message);
  process.exit(1);
}
