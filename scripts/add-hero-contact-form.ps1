# PowerShell script to add HeroContactForm to service pages

$servicePagesWithoutForm = @(
    "app\services\competitor-analysis\page.tsx",
    "app\services\content-seo\page.tsx",
    "app\services\ecommerce-seo\page.tsx",
    "app\services\appliance-repair-seo\page.tsx",
    "app\services\bathroom-remodeling-seo\page.tsx",
    "app\services\carpet-cleaning-seo\page.tsx",
    "app\services\carpet-flooring-installation-seo\page.tsx",
    "app\services\drupal-seo\page.tsx",
    "app\services\dumpster-rental-seo\page.tsx",
    "app\services\fire-damage-restoration-seo\page.tsx",
    "app\services\fire-damage-seo\page.tsx",
    "app\services\flooring-seo\page.tsx",
    "app\services\garage-door-repair-opener-seo\page.tsx",
    "app\services\garage-door-seo\page.tsx",
    "app\services\gutter-installation-maintenance-seo\page.tsx",
    "app\services\gutter-seo\page.tsx",
    "app\services\home-security-seo\page.tsx",
    "app\services\home-security-systems-seo\page.tsx",
    "app\services\joomla-seo\page.tsx",
    "app\services\keyword-research\page.tsx",
    "app\services\kitchen-remodeling-seo\page.tsx",
    "app\services\link-building\page.tsx",
    "app\services\magento-seo\page.tsx",
    "app\services\mold-remediation-seo\page.tsx",
    "app\services\off-page-seo\page.tsx",
    "app\services\on-page-seo\page.tsx",
    "app\services\pest-control-seo\page.tsx",
    "app\services\plumbing-seo\page.tsx",
    "app\services\roofing-contractors-seo\page.tsx",
    "app\services\self-storage-seo\page.tsx",
    "app\services\seo-audit\page.tsx",
    "app\services\shopify-seo\page.tsx",
    "app\services\siding-seo\page.tsx",
    "app\services\squarespace-seo\page.tsx",
    "app\services\technical-seo\page.tsx",
    "app\services\walk-in-tubs-installation-seo\page.tsx",
    "app\services\walk-in-tubs-seo\page.tsx",
    "app\services\water-damage-restoration-seo\page.tsx",
    "app\services\water-damage-seo\page.tsx",
    "app\services\webflow-seo\page.tsx",
    "app\services\wix-seo\page.tsx",
    "app\services\wordpress-seo\page.tsx"
)

$baseDir = "d:\AdeelBhaiPortfolio"

foreach ($pagePath in $servicePagesWithoutForm) {
    $fullPath = Join-Path $baseDir $pagePath
    Write-Host "Processing: $pagePath" -ForegroundColor Cyan
    
    if (Test-Path $fullPath) {
        $content = Get-Content $fullPath -Raw
        
        # Check if HeroContactForm is already imported
        if ($content -notmatch "HeroContactForm") {
            # Add import after Footer import
            $content = $content -replace '(import Footer from [''"]@/components/Footer[''"];)', "`$1`nimport HeroContactForm from '@/components/HeroContactForm';"
            
            Write-Host "  ✓ Added HeroContactForm import" -ForegroundColor Green
            
            # Save the updated content
            Set-Content -Path $fullPath -Value $content -NoNewline
        } else {
            Write-Host "  - Already has HeroContactForm import" -ForegroundColor Yellow
        }
    } else {
        Write-Host "  ✗ File not found!" -ForegroundColor Red
    }
}

Write-Host "`nCompleted adding imports!" -ForegroundColor Green
Write-Host "Note: Hero sections need to be manually restructured to include the form component." -ForegroundColor Yellow
