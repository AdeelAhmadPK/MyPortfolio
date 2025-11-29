const fs = require('fs');
const path = require('path');

// Remaining pages that need hero form added (form should be on RIGHT side)
const pages = [
  { file: 'electrician-seo', title: 'Electrician', form Title: 'Get Your Free Electrician SEO Audit', subtitle: 'Discover what\'s holding your website back from page 1 rankings' },
  { file: 'gutter-installation-maintenance-seo', title: 'Gutter Installation & Maintenance', formTitle: 'Get Your Free Gutter SEO Audit', subtitle: 'Discover how to dominate local gutter searches' },
  { file: 'siding-seo', title: 'Siding', formTitle: 'Get Your Free Siding SEO Audit', subtitle: 'Discover how to dominate local siding searches' },
  { file: 'home-security-systems-seo', title: 'Home Security Systems', formTitle: 'Get Your Free Home Security SEO Audit', subtitle: 'Discover how to dominate local home security searches' },
  { file: 'walk-in-tubs-installation-seo', title: 'Walk-In Tubs Installation', formTitle: 'Get Your Free Walk-In Tubs SEO Audit', subtitle: 'Discover how to dominate local walk-in tub searches' },
  { file: 'kitchen-remodeling-seo', title: 'Kitchen Remodeling', formTitle: 'Get Your Free Kitchen Remodeling SEO Audit', subtitle: 'Discover how to dominate local kitchen remodeling searches' },
  { file: 'roofing-contractors-seo', title: 'Roofing Contractors', formTitle: 'Get Your Free Roofing SEO Audit', subtitle: 'Discover how to dominate local roofing searches' },
  { file: 'water-damage-restoration-seo', title: 'Water Damage Restoration', formTitle: 'Get Your Free Water Damage SEO Audit', subtitle: 'Discover how to dominate local water damage searches' },
  { file: 'carpet-flooring-installation-seo', title: 'Carpet & Flooring Installation', formTitle: 'Get Your Free Flooring SEO Audit', subtitle: 'Discover how to dominate local flooring searches' },
  { file: 'garage-door-repair-opener-seo', title: 'Garage Door Repair & Opener', formTitle: 'Get Your Free Garage Door SEO Audit', subtitle: 'Discover how to dominate local garage door searches' },
  { file: 'pest-control-seo', title: 'Pest Control', formTitle: 'Get Your Free Pest Control SEO Audit', subtitle: 'Discover how to dominate local pest control searches' },
  { file: 'self-storage-seo', title: 'Self Storage', formTitle: 'Get Your Free Self Storage SEO Audit', subtitle: 'Discover how to dominate local storage searches' },
  { file: 'fire-damage-restoration-seo', title: 'Fire Damage Restoration', formTitle: 'Get Your Free Fire Damage SEO Audit', subtitle: 'Discover how to dominate local fire damage searches' },
  { file: 'gutter-seo', title: 'Gutter', formTitle: 'Get Your Free Gutter SEO Audit', subtitle: 'Discover how to dominate local gutter searches' }
];

console.log(`\n🔄 Processing ${pages.length} pages...\n`);

let successCount = 0;
let errorCount = 0;

pages.forEach(({ file, title, formTitle, subtitle }) => {
  const filePath = path.join(__dirname, '..', 'app', 'services', file, 'page.tsx');
  
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⏭️  Skipping ${file} - file not found`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it already has HeroContactForm in hero
    if (content.includes('HeroContactForm') && content.includes('grid lg:grid-cols-2')) {
      console.log(`⏭️  Skipping ${file} - already has form in hero`);
      return;
    }

    console.log(`✏️  Processing ${file}...`);
    successCount++;
    
  } catch (error) {
    console.error(`❌ Error with ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\n📊 Summary: ${successCount} found, ${errorCount} errors`);
console.log(`\n⚠️  Manual updates required - structures vary too much for automation`);
