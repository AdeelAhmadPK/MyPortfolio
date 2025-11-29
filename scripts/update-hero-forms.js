const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'gutter-installation-maintenance-seo', title: 'Gutter Installation & Maintenance' },
  { file: 'plumbing-seo', title: 'Plumbing' },
  { file: 'siding-seo', title: 'Siding' },
  { file: 'home-security-systems-seo', title: 'Home Security Systems' },
  { file: 'walk-in-tubs-installation-seo', title: 'Walk-In Tubs Installation' },
  { file: 'kitchen-remodeling-seo', title: 'Kitchen Remodeling' },
  { file: 'electrician-seo', title: 'Electrician' },
  { file: 'hvac-seo', title: 'HVAC' },
  { file: 'roofing-contractors-seo', title: 'Roofing Contractors' },
  { file: 'water-damage-restoration-seo', title: 'Water Damage Restoration' },
  { file: 'carpet-flooring-installation-seo', title: 'Carpet & Flooring Installation' },
  { file: 'garage-door-repair-opener-seo', title: 'Garage Door Repair & Opener' },
  { file: 'pest-control-seo', title: 'Pest Control' },
  { file: 'self-storage-seo', title: 'Self Storage' },
  { file: 'fire-damage-restoration-seo', title: 'Fire Damage Restoration' },
  { file: 'healthcare-seo', title: 'Healthcare' },
  { file: 'law-firm-seo', title: 'Law Firm' },
  { file: 'real-estate-seo', title: 'Real Estate' },
  { file: 'saas-seo', title: 'SaaS' },
  { file: 'home-services-seo', title: 'Home Services' },
  { file: 'b2b-seo', title: 'B2B' },
  { file: 'dental-seo', title: 'Dental' }
];

let successCount = 0;
let errorCount = 0;

pages.forEach(({ file, title }) => {
  const filePath = path.join(__dirname, '..', 'app', 'services', file, 'page.tsx');
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to find the centered hero layout
    const centerPattern = /<div className="text-center text-white mt-12 animate-fade-in">/;
    
    if (!centerPattern.test(content)) {
      console.log(`⏭️  Skipping ${file} - already updated or different structure`);
      return;
    }
    
    // Replace centered layout with grid layout
    content = content.replace(
      /<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>\s*{\/\* Contact Form Section \*\/}[\s\S]*?<\/section>/m,
      `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Contact Form */}
              <div className="order-2 lg:order-1 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free ${title} SEO Audit"
                  subtitle="Discover how to dominate local ${title.toLowerCase()} searches"
                  buttonText="Get Free Audit"
                />
              </div>

              {/* Right: Content - will be updated manually */}
              <div className="order-1 lg:order-2 text-white animate-fade-in">
                {/* PLACEHOLDER - Keep existing content */}
              </div>
            </div>
          </div>
        </section>`
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${file}`);
    successCount++;
  } catch (error) {
    console.error(`❌ Error updating ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\n📊 Summary: ${successCount} updated, ${errorCount} errors`);
