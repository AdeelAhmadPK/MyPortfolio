# Script to swap hero form from left to right side in all service pages

$pages = @(
    "healthcare-seo",
    "law-firm-seo",
    "real-estate-seo",
    "saas-seo",
    "home-services-seo",
    "b2b-seo",
    "dental-seo",
    "plumbing-seo"
)

foreach ($page in $pages) {
    $filePath = "d:\AdeelBhaiPortfolio\app\services\$page\page.tsx"
    
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Pattern 1: Find and swap the order values
        # Change: order-2 lg:order-1 (form) to order-2 lg:order-2
        # Change: order-1 lg:order-2 (content) to order-1 lg:order-1
        
        # Swap the column comments and order
        $content = $content -replace '(\{/\* Left Column: Contact Form \*/\}\s+<div className="order-2 lg:order-1)', '{/* Right Column: Contact Form */}`n              <div className="order-2 lg:order-2'
        
        $content = $content -replace '(\{/\* Right Column: Hero Content \*/\}\s+<div className="order-1 lg:order-2)', '{/* Left Column: Hero Content */}`n              <div className="order-1 lg:order-1'
        
        Set-Content $filePath $content -NoNewline
        Write-Host "✅ Updated $page" -ForegroundColor Green
    } else {
        Write-Host "❌ File not found: $page" -ForegroundColor Red
    }
}

Write-Host "`n✅ All pages updated!" -ForegroundColor Cyan
