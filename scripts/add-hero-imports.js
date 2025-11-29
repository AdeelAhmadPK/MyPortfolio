const fs = require('fs');
const path = require('path');

const servicePagesWithoutForm = [
    "app/services/competitor-analysis/page.tsx",
    "app/services/content-seo/page.tsx",
    "app/services/ecommerce-seo/page.tsx",
    "app/services/appliance-repair-seo/page.tsx",
    "app/services/bathroom-remodeling-seo/page.tsx",
    "app/services/carpet-cleaning-seo/page.tsx",
    "app/services/carpet-flooring-installation-seo/page.tsx",
    "app/services/drupal-seo/page.tsx",
    "app/services/dumpster-rental-seo/page.tsx",
    "app/services/fire-damage-restoration-seo/page.tsx",
    "app/services/fire-damage-seo/page.tsx",
    "app/services/flooring-seo/page.tsx",
    "app/services/garage-door-repair-opener-seo/page.tsx",
    "app/services/garage-door-seo/page.tsx",
    "app/services/gutter-installation-maintenance-seo/page.tsx",
    "app/services/gutter-seo/page.tsx",
    "app/services/home-security-seo/page.tsx",
    "app/services/home-security-systems-seo/page.tsx",
    "app/services/joomla-seo/page.tsx",
    "app/services/keyword-research/page.tsx",
    "app/services/kitchen-remodeling-seo/page.tsx",
    "app/services/link-building/page.tsx",
    "app/services/magento-seo/page.tsx",
    "app/services/mold-remediation-seo/page.tsx",
    "app/services/off-page-seo/page.tsx",
    "app/services/on-page-seo/page.tsx",
    "app/services/pest-control-seo/page.tsx",
    "app/services/plumbing-seo/page.tsx",
    "app/services/roofing-contractors-seo/page.tsx",
    "app/services/self-storage-seo/page.tsx",
    "app/services/seo-audit/page.tsx",
    "app/services/shopify-seo/page.tsx",
    "app/services/siding-seo/page.tsx",
    "app/services/squarespace-seo/page.tsx",
    "app/services/technical-seo/page.tsx",
    "app/services/walk-in-tubs-installation-seo/page.tsx",
    "app/services/walk-in-tubs-seo/page.tsx",
    "app/services/water-damage-restoration-seo/page.tsx",
    "app/services/water-damage-seo/page.tsx",
    "app/services/webflow-seo/page.tsx",
    "app/services/wix-seo/page.tsx",
    "app/services/wordpress-seo/page.tsx"
];

const baseDir = "d:/AdeelBhaiPortfolio";

let successCount = 0;
let errorCount = 0;
let skippedCount = 0;

servicePagesWithoutForm.forEach((pagePath) => {
    const fullPath = path.join(baseDir, pagePath);
    console.log(`\\nProcessing: ${pagePath}`);
    
    if (!fs.existsSync(fullPath)) {
        console.log(`  ✗ File not found!`);
        errorCount++;
        return;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Skip if already has HeroContactForm
    if (content.includes('HeroContactForm')) {
        console.log(`  - Already has HeroContactForm`);
        skippedCount++;
        return;
    }
    
    // Step 1: Add import
    const footerImportRegex = /(import Footer from ['"]@\/components\/Footer['"];)/;
    if (footerImportRegex.test(content)) {
        content = content.replace(footerImportRegex, `$1\  import HeroContactForm from "@/components/HeroContactForm";`);
        console.log(`  ✓ Added HeroContactForm import`);
    } else {
        console.log(`  ✗ Could not find Footer import to add HeroContactForm`);
        errorCount++;
        return;
    }
    
    // Save the file
    fs.writeFileSync(fullPath, content, 'utf8');
    successCount++;
    console.log(`  ✓ Successfully updated`);
});

console.log(`\\n=== Summary ===`);
console.log(`✓ Successfully updated: ${successCount}`);
console.log(`- Skipped (already has form): ${skippedCount}`);
console.log(`✗ Errors: ${errorCount}`);
console.log(`\\nNote: Imports added. You need to manually add the form component to hero sections.`);
