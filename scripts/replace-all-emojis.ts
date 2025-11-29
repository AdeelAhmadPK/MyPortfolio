import * as fs from 'fs';
import * as path from 'path';

import { FaAward, FaBath, FaBell, FaBolt, FaBriefcase, FaBuilding, FaBullseye, FaCalendar, FaCamera, FaCertificate, FaChartArea, FaChartBar, FaChartLine, FaCheckCircle, FaClipboardList, FaClock, FaCog, FaComments, FaDollarSign, FaEdit, FaEnvelope, FaExclamationTriangle, FaFile, FaFileAlt, FaFire, FaGlobe, FaHammer, FaHandshake, FaHome, FaHospital, FaIndustry, FaLink, FaMap, FaMapMarkerAlt, FaMedal, FaMobileAlt, FaMoneyBillAlt, FaMoneyBillWave, FaPencilAlt, FaPhoneAlt, FaPills, FaRocket, FaSearch, FaSearchPlus, FaShieldAlt, FaShower, FaSignal, FaSpa, FaStar, FaTags, FaTools, FaTrophy, FaUserMd, FaUsers, FaWheelchair, FaWind, FaWrench } from 'react-icons/fa';;
// Emoji to React Icon mapping
const emojiToIconMap: Record<string, string> = {
  // Fire & Emergency
  '🔥': 'FaFire',
  '🚨': 'FaBell',
  '⚠️': 'FaExclamationTriangle',
  
  // Location & Navigation
  '📍': 'FaMapMarkerAlt',
  '🗺️': 'FaMap',
  '🏠': 'FaHome',
  '🏢': 'FaBuilding',
  '🏭': 'FaIndustry',
  '🏗️': 'FaTools',
  
  // Communication & Contact
  '📞': 'FaPhoneAlt',
  '📱': 'FaMobileAlt',
  '📧': 'FaEnvelope',
  '💬': 'FaComments',
  
  // Tools & Services
  '🔧': 'FaWrench',
  '🔨': 'FaHammer',
  '⚙️': 'FaCog',
  '🛠️': 'FaTools',
  '⚡': 'FaBolt',
  '🛡️': 'FaShieldAlt',
  
  // Money & Finance
  '💰': 'FaDollarSign',
  '💵': 'FaMoneyBillWave',
  '💸': 'FaMoneyBillAlt',
  
  // Charts & Analytics
  '📈': 'FaChartLine',
  '📉': 'FaChartBar',
  '📊': 'FaChartArea',
  '📋': 'FaClipboardList',
  
  // Search & Discovery
  '🔍': 'FaSearch',
  '🔎': 'FaSearchPlus',
  
  // Documents & Files
  '📝': 'FaEdit',
  '📄': 'FaFileAlt',
  '📑': 'FaFile',
  '📜': 'FaCertificate',
  
  // Time & Calendar
  '⏰': 'FaClock',
  '⏱️': 'FaStopwatch',
  '📅': 'FaCalendar',
  
  // Stars & Quality
  '⭐': 'FaStar',
  '🌟': 'FaStar',
  '🏆': 'FaTrophy',
  '🥇': 'FaMedal',
  '🎖️': 'FaAward',
  
  // Links & Network
  '🔗': 'FaLink',
  '🌐': 'FaGlobe',
  '📶': 'FaSignal',
  
  // Medical & Health
  '🏥': 'FaHospital',
  '👨‍⚕️': 'FaUserMd',
  '💊': 'FaPills',
  
  // Bathroom & Plumbing
  '🛁': 'FaShower',
  '🚿': 'FaShower',
  '♿': 'FaWheelchair',
  '💆': 'FaSpa',
  
  // People & Users
  '👵': 'FaUserMd',
  '👨‍👩‍👧‍👦': 'FaUsers',
  
  // Business & Work
  '💼': 'FaBriefcase',
  '🏷️': 'FaTags',
  '📸': 'FaCamera',
  
  // Wind & Air
  '💨': 'FaWind',
  '🌪️': 'FaWind',
  
  // Other
  '🎯': 'FaBullseye',
  '🤝': 'FaHandshake',
  '✍️': 'FaEdit',
  '🚀': 'FaRocket'
};

// Service pages to update
const servicePages = [
  'walk-in-tubs-seo',
  'roofing-seo',
  'water-damage-seo',
  'flooring-seo',
  'gutter-seo',
  'garage-door-seo',
  'home-security-seo'
];

function replaceEmojisInFile(filePath: string): void {
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  const iconsUsed = new Set<string>();

  // Replace emojis in the content
  for (const [emoji, iconName] of Object.entries(emojiToIconMap)) {
    const emojiRegex = new RegExp(emoji, 'g');
    if (content.includes(emoji)) {
      content = content.replace(emojiRegex, `<${iconName} />`);
      iconsUsed.add(iconName);
      modified = true;
    }
  }

  if (modified) {
    // Add React Icons import if not present
    const importStatement = `import { ${Array.from(iconsUsed).sort().join(', ')} } from 'react-icons/fa';`;
    
    // Check if react-icons import exists
    if (!content.includes('from \'react-icons/fa\'')) {
      // Find the last import statement
      const lastImportIndex = content.lastIndexOf('import ');
      const nextNewlineIndex = content.indexOf('\n', lastImportIndex);
      
      if (nextNewlineIndex !== -1) {
        content = content.slice(0, nextNewlineIndex + 1) + importStatement + '\n' + content.slice(nextNewlineIndex + 1);
      }
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Updated: ${path.basename(filePath)}`);
    console.log(`   Icons used: ${Array.from(iconsUsed).join(', ')}`);
  } else {
    console.log(`ℹ️  No emojis found in: ${path.basename(filePath)}`);
  }
}

// Main execution
console.log('🚀 Starting emoji to React Icons replacement...\n');

for (const page of servicePages) {
  const filePath = path.join(__dirname, '..', 'app', 'services', page, 'page.tsx');
  console.log(`\n📄 Processing: ${page}`);
  replaceEmojisInFile(filePath);
}

console.log('\n✨ Replacement complete!');
