# Script to update all home service pages with CountriesGrid component

$servicePages = @(
    "bathroom-remodeling-seo",
    "carpet-cleaning-seo",
    "carpet-flooring-installation-seo",
    "dumpster-rental-seo",
    "electrician-services-seo",
    "fire-damage-restoration-seo",
    "garage-door-repair-opener-services-seo",
    "gutter-installation-maintenance-seo",
    "home-security-systems-seo",
    "kitchen-remodeling-seo",
    "mold-remediation-seo",
    "pest-control-services-seo",
    "plumbing-services-seo",
    "roofing-contractors-seo",
    "self-storage-services-seo",
    "siding-services-seo",
    "walk-in-tubs-installation-seo",
    "water-damage-restoration-seo"
)

$basePath = "d:\AdeelBhaiPortfolio\app\services"

foreach ($service in $servicePages) {
    $filePath = Join-Path $basePath "$service\page.tsx"
    
    if (Test-Path $filePath) {
        Write-Host "Processing: $service" -ForegroundColor Cyan
        
        # Read file content
        $content = Get-Content $filePath -Raw
        
        # Check if already has CountriesGrid
        if ($content -match "CountriesGrid") {
            Write-Host "  ✓ Already updated" -ForegroundColor Green
            continue
        }
        
        # Add CountriesGrid import after FAQSection import
        if ($content -match "import FAQSection from '@/components/seo/FAQSection';") {
            $content = $content -replace "(import FAQSection from '@/components/seo/FAQSection';)", "`$1`nimport CountriesGrid from '@/components/industries/CountriesGrid';"
            Write-Host "  ✓ Added import" -ForegroundColor Yellow
        }
        
        # Remove popularLocations variable declaration (if exists)
        $content = $content -replace "(?s)const popularLocations = countries\.slice\([^)]+\)\.flatMap\([^}]+}\s*\)\s*\);?\s*", ""
        
        # Replace location section with CountriesGrid
        # Pattern 1: Section with "by Location" title
        $pattern1 = "(?s)<section className=`"py-20`">\s*<div className=`"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`">\s*<div className=`"text-center mb-12`">.*?by Location.*?</section>"
        if ($content -match $pattern1) {
            $content = $content -replace $pattern1, "{/* Top 10 Countries Section */}`n        <CountriesGrid industrySlug={industry.slug} industryIcon={industry.icon} />"
            Write-Host "  ✓ Replaced location section (Pattern 1)" -ForegroundColor Yellow
        }
        
        # Pattern 2: Section with popularLocations.map
        $pattern2 = "(?s)<section[^>]*>.*?popularLocations\.map.*?</section>"
        if ($content -match $pattern2) {
            $content = $content -replace $pattern2, "{/* Top 10 Countries Section */}`n        <CountriesGrid industrySlug={industry.slug} industryIcon={industry.icon} />"
            Write-Host "  ✓ Replaced location section (Pattern 2)" -ForegroundColor Yellow
        }
        
        # Write updated content back to file
        Set-Content -Path $filePath -Value $content -NoNewline
        Write-Host "  ✓ Updated successfully`n" -ForegroundColor Green
    }
    else {
        Write-Host "  ✗ File not found: $filePath" -ForegroundColor Red
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Update completed!" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan
