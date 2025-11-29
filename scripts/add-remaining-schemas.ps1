# Add schema markup to all remaining service pages without schemas

$pagesToUpdate = @(
    @{Path = "appliance-repair-seo"; Title = "Appliance Repair"; Description = "Expert SEO services for appliance repair businesses. Dominate local search for refrigerator repair, washer dryer repair, dishwasher repair, and oven repair services."},
    @{Path = "pest-control-seo"; Title = "Pest Control"; Description = "Professional SEO services for pest control companies. Dominate local search results, attract more customers, and grow your exterminator business with proven SEO strategies."},
    @{Path = "carpet-cleaning-seo"; Title = "Carpet Cleaning"; Description = "Expert SEO services for carpet cleaning businesses. Dominate local search for carpet cleaning, upholstery cleaning, steam cleaning, and stain removal services."},
    @{Path = "dumpster-rental-seo"; Title = "Dumpster Rental"; Description = "Expert SEO services for dumpster rental businesses. Dominate local search for roll-off dumpsters, construction dumpsters, and junk removal services."},
    @{Path = "flooring-seo"; Title = "Flooring"; Description = "Expert SEO services for flooring contractors. Dominate local search for hardwood flooring, tile installation, laminate flooring, and vinyl flooring services."},
    @{Path = "carpet-flooring-installation-seo"; Title = "Carpet & Flooring Installation"; Description = "Expert SEO services for carpet and flooring installation contractors. Dominate local search for residential and commercial flooring installations."},
    @{Path = "fire-damage-restoration-seo"; Title = "Fire Damage Restoration"; Description = "Expert SEO services for fire damage restoration companies. Dominate local search for fire cleanup, smoke damage restoration, and emergency fire restoration services."},
    @{Path = "gutter-seo"; Title = "Gutter Services"; Description = "Expert SEO services for gutter companies. Dominate local search for gutter installation, gutter cleaning, and gutter repair services."},
    @{Path = "gutter-installation-maintenance-seo"; Title = "Gutter Installation & Maintenance"; Description = "Expert SEO services for gutter installation and maintenance contractors. Capture high-value gutter installation and maintenance leads."},
    @{Path = "garage-door-seo"; Title = "Garage Door Services"; Description = "Expert SEO services for garage door companies. Dominate local search for garage door installation, repair, and replacement services."},
    @{Path = "home-security-seo"; Title = "Home Security"; Description = "Expert SEO services for home security companies. Dominate local search for home security systems, alarm installation, and security monitoring services."},
    @{Path = "home-security-systems-seo"; Title = "Home Security Systems"; Description = "Expert SEO services for home security system installers. Dominate local search for security camera installation, alarm systems, and smart home security."},
    @{Path = "kitchen-remodeling-seo"; Title = "Kitchen Remodeling"; Description = "Expert SEO services for kitchen remodeling contractors. Dominate local search for kitchen renovation, cabinet installation, and countertop services."},
    @{Path = "mold-remediation-seo"; Title = "Mold Remediation"; Description = "Expert SEO services for mold remediation companies. Dominate local search for mold removal, mold inspection, and mold testing services."},
    @{Path = "roofing-contractors-seo"; Title = "Roofing Contractors"; Description = "Expert SEO services for roofing contractors. Dominate local search for roof installation, roof repair, and roof replacement services."},
    @{Path = "self-storage-seo"; Title = "Self Storage"; Description = "Expert SEO services for self storage facilities. Dominate local search for storage units, climate-controlled storage, and vehicle storage."},
    @{Path = "walk-in-tubs-installation-seo"; Title = "Walk-in Tubs Installation"; Description = "Expert SEO services for walk-in tub installation companies. Dominate local search for walk-in bathtub installation and accessible bathroom solutions."},
    @{Path = "walk-in-tubs-seo"; Title = "Walk-in Tubs"; Description = "Expert SEO services for walk-in tub dealers and installers. Dominate local search for walk-in bathtubs, accessible bathing solutions, and senior bathtubs."},
    @{Path = "water-damage-seo"; Title = "Water Damage Restoration"; Description = "Expert SEO services for water damage restoration companies. Dominate local search for water damage cleanup, flood restoration, and emergency water removal."},
    @{Path = "water-damage-restoration-seo"; Title = "Water Damage Restoration Services"; Description = "Expert SEO services for water damage restoration contractors. Capture emergency water damage leads and grow your restoration business."},
    @{Path = "siding-seo"; Title = "Siding"; Description = "Expert SEO services for siding contractors. Dominate local search for siding installation, vinyl siding, and siding repair services."}
)

foreach ($page in $pagesToUpdate) {
    $filePath = "d:\AdeelBhaiPortfolio\app\services\$($page.Path)\page.tsx"
    
    Write-Host "Processing: $($page.Path)" -ForegroundColor Cyan
    
    # Read file content
    $content = Get-Content -Path $filePath -Raw
    
    # Check if schema already exists
    if ($content -match 'application/ld\+json') {
        Write-Host "  Schema already exists, skipping..." -ForegroundColor Yellow
        continue
    }
    
    # Find the pattern: return (\n    <>\n      <Header />\n      <main
    $pattern = 'return \(\s*<>\s*<Header />\s*<main className="min-h-screen bg-white dark:bg-slate-950">'
    
    if ($content -match $pattern) {
        $schemaMarkup = @"
return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-slate-950">
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "$($page.Title) SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "$($page.Description)"
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": seoFrameworkFaqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ])
          }}
        />
        
"@
        
        $replacement = $schemaMarkup + '<main className="min-h-screen bg-white dark:bg-slate-950">'
        $newContent = $content -replace $pattern, $replacement
        
        # Write back to file
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "  Schema added successfully!" -ForegroundColor Green
    } else {
        Write-Host "  Pattern not found, skipping..." -ForegroundColor Red
    }
}

Write-Host "`nCompleted processing all pages!" -ForegroundColor Green
