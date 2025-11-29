# Add hero forms to remaining 10 pages + fix 3 misplaced forms

$pages = @(
    @{
        file = "siding-seo"
        title = "Siding"
        formTitle = "Get Your Free Siding SEO Audit"
        badge = "Premium Siding SEO Services"
        description = "Homeowners search for siding installation and repair services when planning home improvements. Our SEO strategies help you capture these high-value leads."
        icon = "FaHome"
    },
    @{
        file = "home-security-systems-seo"
        title = "Home Security Systems"
        formTitle = "Get Your Free Security SEO Audit"
        badge = "Premium Security SEO Services"
        description = "Homeowners search for home security systems for safety and peace of mind. Our SEO strategies position your company first in local security searches."
        icon = "FaShieldAlt"
    },
    @{
        file = "walk-in-tubs-installation-seo"
        title = "Walk-In Tubs Installation"
        formTitle = "Get Your Free Walk-In Tubs SEO Audit"
        badge = "Premium Walk-In Tubs SEO"
        description = "Seniors and families search for walk-in tubs for safety and accessibility. Our SEO strategies help your installation business reach these qualified buyers."
        icon = "FaHome"
    },
    @{
        file = "kitchen-remodeling-seo"
        title = "Kitchen Remodeling"
        formTitle = "Get Your Free Kitchen Remodeling SEO Audit"
        badge = "Premium Kitchen Remodeling SEO"
        description = "Homeowners search for kitchen remodeling when planning upgrades. Our SEO strategies ensure your business appears first for these high-value renovation projects."
        icon = "FaHome"
    },
    @{
        file = "roofing-contractors-seo"
        title = "Roofing Contractors"
        formTitle = "Get Your Free Roofing SEO Audit"
        badge = "Premium Roofing SEO Services"
        description = "Homeowners search for roofing contractors for repairs, replacements, and installations. Our SEO strategies help you dominate local roofing searches."
        icon = "FaHome"
    },
    @{
        file = "water-damage-restoration-seo"
        title = "Water Damage Restoration"
        formTitle = "Get Your Free Water Damage SEO Audit"
        badge = "Emergency Water Damage SEO"
        description = "When water damage strikes, homeowners search for immediate help. Our 24/7 SEO strategies ensure your restoration company appears first in emergency searches."
        icon = "FaTools"
    },
    @{
        file = "carpet-flooring-installation-seo"
        title = "Carpet & Flooring Installation"
        formTitle = "Get Your Free Flooring SEO Audit"
        badge = "Premium Flooring SEO Services"
        description = "Homeowners search for carpet and flooring installation when renovating. Our SEO strategies help your business capture these high-intent renovation leads."
        icon = "FaHome"
    },
    @{
        file = "garage-door-repair-opener-seo"
        title = "Garage Door Repair & Opener"
        formTitle = "Get Your Free Garage Door SEO Audit"
        badge = "Premium Garage Door SEO"
        description = "Homeowners search for garage door repair and installation when they have broken springs, opener issues, or need replacements. Our SEO ensures you appear first."
        icon = "FaDollarSign"
    },
    @{
        file = "self-storage-seo"
        title = "Self Storage"
        formTitle = "Get Your Free Storage SEO Audit"
        badge = "Premium Storage SEO Services"
        description = "People search for self storage when moving, downsizing, or need extra space. Our SEO strategies help your facility dominate local storage searches."
        icon = "FaBuilding"
    },
    @{
        file = "fire-damage-restoration-seo"
        title = "Fire Damage Restoration"
        formTitle = "Get Your Free Fire Damage SEO Audit"
        badge = "Emergency Fire Restoration SEO"
        description = "After fire damage, property owners need immediate restoration services. Our 24/7 SEO strategies ensure your company appears first in emergency searches."
        icon = "FaTools"
    }
)

$servicesPath = "D:\AdeelBhaiPortfolio\app\services"
$successCount = 0
$errorCount = 0

Write-Host "`n🔧 Adding hero forms to 10 remaining pages...`n" -ForegroundColor Cyan

foreach ($page in $pages) {
    $filePath = Join-Path $servicesPath "$($page.file)\page.tsx"
    
    if (Test-Path $filePath) {
        try {
            $content = Get-Content $filePath -Raw
            
            # Check if already has HeroContactForm in hero grid
            if ($content -match 'grid lg:grid-cols-2.*?HeroContactForm') {
                Write-Host "⏭️  $($page.file) - Already has form in hero grid" -ForegroundColor Yellow
                continue
            }
            
            # Find the old hero section pattern (centered text)
            $oldHeroPattern = '(?s)(\s*\{/\* Hero Section.*?\*/\}\s*<section className="relative py-24.*?</section>)'
            
            if ($content -match $oldHeroPattern) {
                $newHero = @"

        {/* Hero Section with Animated Background */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: ``linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)``,
              backgroundSize: '50px 50px'
            }} />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-transparent rounded-full blur-3xl animate-blob" />
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-600/25 via-purple-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-violet-600/20 via-pink-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-4000" />
            <div className="absolute top-20 left-10 w-20 h-20 border border-blue-400/30 rounded-lg rotate-45 animate-float" />
            <div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-cyan-400/30 rounded-full animate-float animation-delay-2000" />
          </div>

          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Hero Content */}
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 mb-8 animate-scale-in shadow-lg shadow-blue-500/20">
                  <$($page.icon) className="w-6 h-6 text-blue-400 animate-float drop-shadow-2xl" />
                  <span className="text-sm font-bold text-white drop-shadow-lg">$($page.badge)</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">$($page.title)</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  $($page.description)
                </p>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">98%</div>
                    <div className="text-xs text-slate-400 font-medium">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">1,500+</div>
                    <div className="text-xs text-slate-400 font-medium">Keywords Ranked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">5x</div>
                    <div className="text-xs text-slate-400 font-medium">Average ROI</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="$($page.formTitle)"
                  subtitle="Discover how to dominate local searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>
"@
                
                # Replace the old hero with new hero
                $content = $content -replace $oldHeroPattern, $newHero
                
                # Write back
                Set-Content -Path $filePath -Value $content -NoNewline
                Write-Host "✅ $($page.file) - Form added successfully" -ForegroundColor Green
                $successCount++
            } else {
                Write-Host "⚠️  $($page.file) - Could not find hero section pattern" -ForegroundColor Yellow
                $errorCount++
            }
        } catch {
            Write-Host "❌ $($page.file) - Error: $($_.Exception.Message)" -ForegroundColor Red
            $errorCount++
        }
    } else {
        Write-Host "❌ $($page.file) - File not found" -ForegroundColor Red
        $errorCount++
    }
}

Write-Host "`n📊 Summary: $successCount successful, $errorCount errors`n" -ForegroundColor Cyan
