const fs = require('fs');
const path = require('path');

// List of all service pages that need the form
const servicePages = [
  'competitor-analysis', 'content-seo', 'ecommerce-seo', 'electrician-seo',
  'appliance-repair-seo', 'bathroom-remodeling-seo', 'carpet-cleaning-seo',
  'carpet-flooring-installation-seo', 'drupal-seo', 'dumpster-rental-seo',
  'fire-damage-restoration-seo', 'fire-damage-seo', 'flooring-seo',
  'garage-door-repair-opener-seo', 'garage-door-seo', 'gutter-installation-maintenance-seo',
  'gutter-seo', 'home-security-seo', 'home-security-systems-seo', 'hvac-seo',
  'joomla-seo', 'keyword-research', 'kitchen-remodeling-seo', 'link-building',
  'local-seo', 'magento-seo', 'mold-remediation-seo', 'off-page-seo',
  'on-page-seo', 'pest-control-seo', 'plumbing-seo', 'roofing-seo',
  'self-storage-seo', 'seo-audit', 'shopify-seo', 'siding-seo',
  'squarespace-seo', 'technical-seo', 'walk-in-tubs-seo', 'water-damage-seo',
  'webflow-seo', 'wix-seo', 'wordpress-seo'
];

let successCount = 0;
let errorCount = 0;
const errors = [];

servicePages.forEach(service => {
  const filePath = path.join(__dirname, '..', 'app', 'services', service, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Skipping ${service} - file not found`);
    return;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if HeroContactForm is already in the content
    if (content.includes('<HeroContactForm')) {
      console.log(`✓ ${service} already has HeroContactForm`);
      successCount++;
      return;
    }

    // Find the hero section (section with gradient background)
    const heroSectionRegex = /<section className="[^"]*(?:bg-gradient-to-br|relative py-24)[^"]*"[^>]*>([\s\S]*?)<\/section>/;
    const heroMatch = content.match(heroSectionRegex);
    
    if (!heroMatch) {
      errors.push(`${service}: Could not find hero section`);
      errorCount++;
      return;
    }

    const heroSection = heroMatch[0];
    const heroContent = heroMatch[1];

    // Check if it already has a grid layout with form
    if (heroContent.includes('grid lg:grid-cols-2')) {
      console.log(`✓ ${service} already has grid layout`);
      successCount++;
      return;
    }

    // Extract the inner content div (usually has max-w-7xl mx-auto)
    const innerDivRegex = /<div className="[^"]*(?:max-w-7xl|relative z-10)[^"]*"[^>]*>([\s\S]*?)<\/div>(?=\s*<\/section>)/;
    const innerMatch = heroContent.match(innerDivRegex);
    
    if (!innerMatch) {
      errors.push(`${service}: Could not find inner content div`);
      errorCount++;
      return;
    }

    const innerContent = innerMatch[1];

    // Create new grid-based hero section
    const newHeroContent = heroContent.replace(
      innerMatch[0],
      `<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Content */}
              <div className="text-center lg:text-left">
${innerContent.trim().split('\n').map(line => '                ' + line).join('\n')}
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:block">
                <HeroContactForm />
              </div>
            </div>
          </div>`
    );

    // Replace the old hero section with the new one
    const newContent = content.replace(heroSection, heroSection.replace(heroContent, newHeroContent));

    // Write the updated content
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Updated ${service}`);
    successCount++;

  } catch (error) {
    errors.push(`${service}: ${error.message}`);
    errorCount++;
  }
});

console.log(`\n📊 Summary:`);
console.log(`✅ Success: ${successCount}`);
console.log(`❌ Errors: ${errorCount}`);

if (errors.length > 0) {
  console.log(`\n❌ Errors:`);
  errors.forEach(err => console.log(`  - ${err}`));
}
