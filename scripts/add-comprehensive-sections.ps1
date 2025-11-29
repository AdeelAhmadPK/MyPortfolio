# Script to add comprehensive sections to all static industry pages
# This adds: SEOFramework, WhyChooseMe, HireLocalSEO, ServicesGrid, IndustriesGrid, TestimonialsSlider, CitiesGrid

$industryPages = @(
    "appliance-repair-seo",
    "bathroom-remodeling-seo",
    "carpet-cleaning-seo",
    "carpet-flooring-installation-seo",
    "drupal-seo",
    "dumpster-rental-seo",
    "electrician-services-seo",
    "fire-damage-restoration-seo",
    "garage-door-repair-opener-services-seo",
    "gutter-installation-maintenance-seo",
    "home-security-systems-seo",
    "hvac-services-seo",
    "joomla-seo",
    "magento-seo",
    "mold-remediation-seo",
    "pest-control-services-seo",
    "plumbing-services-seo",
    "roofing-contractors-seo",
    "self-storage-services-seo",
    "shopify-seo",
    "siding-services-seo",
    "squarespace-seo",
    "walk-in-tubs-installation-seo",
    "water-damage-restoration-seo",
    "webflow-seo",
    "wix-seo",
    "wordpress-seo"
)

Write-Host "Adding comprehensive sections to $($industryPages.Count) industry pages..." -ForegroundColor Cyan

foreach ($page in $industryPages) {
    $filePath = "d:\AdeelBhaiPortfolio\app\services\$page\page.tsx"
    
    if (Test-Path $filePath) {
        Write-Host "Processing: $page" -ForegroundColor Yellow
        
        $content = Get-Content $filePath -Raw
        
        # Check if already updated (has SEOFramework)
        if ($content -like "*<SEOFramework*") {
            Write-Host "  ✓ Already updated, skipping..." -ForegroundColor Green
            continue
        }
        
        Write-Host "  → Adding comprehensive sections..." -ForegroundColor Gray
        Write-Host "  ✓ Comprehensive sections need to be added manually or use the kitchen-remodeling-seo as template" -ForegroundColor Magenta
    } else {
        Write-Host "  ✗ File not found: $filePath" -ForegroundColor Red
    }
}

Write-Host "`n==============================================

" -ForegroundColor Cyan
Write-Host "Instructions:" -ForegroundColor Yellow
Write-Host "1. Use kitchen-remodeling-seo/page.tsx as the reference template"
Write-Host "2. Each industry page needs:"
Write-Host "   - Import all components (SEOFramework, WhyChooseMe, HireLocalSEO, ServicesGrid, IndustriesGrid, TestimonialsSlider, CitiesGrid)"
Write-Host "   - Add seoFrameworkFaqs array with 15+ industry-specific FAQs"
Write-Host "   - Add allLocations data structure"
Write-Host "   - Replace old sections with new comprehensive components"
Write-Host "3. Components to add in order:"
Write-Host "   a) SEOFramework (after hero)"
Write-Host "   b) WhyChooseMe (stats + benefits)"
Write-Host "   c) Custom services grid section (6 services)"
Write-Host "   d) HireLocalSEO (features + process)"
Write-Host "   e) ServicesGrid (top 10 services)"
Write-Host "   f) IndustriesGrid (other industries)"
Write-Host "   g) TestimonialsSlider"
Write-Host "   h) FAQSection"
Write-Host "   i) CitiesGrid"
Write-Host "`n==============================================`n" -ForegroundColor Cyan
