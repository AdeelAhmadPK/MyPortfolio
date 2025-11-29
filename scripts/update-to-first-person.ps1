# PowerShell script to update all "we/our/us" references to "I/my/me"
$projectRoot = "d:\AdeelBhaiPortfolio"
$filePatterns = @("*.tsx", "*.ts")
$foldersToUpdate = @("app", "components", "data")

# Replacement array (processed in order)
$replacements = @(
    @{Old="We serve"; New="I serve"},
    @{Old="We offer"; New="I offer"},
    @{Old="We provide"; New="I provide"},
    @{Old="We specialize"; New="I specialize"},
    @{Old="We help"; New="I help"},
    @{Old="We deliver"; New="I deliver"},
    @{Old="We create"; New="I create"},
    @{Old="We build"; New="I build"},
    @{Old="We understand"; New="I understand"},
    @{Old="We focus"; New="I focus"},
    @{Old="We optimize"; New="I optimize"},
    @{Old="We implement"; New="I implement"},
    @{Old="We develop"; New="I develop"},
    @{Old="We work"; New="I work"},
    @{Old="We recommend"; New="I recommend"},
    @{Old="We believe"; New="I believe"},
    @{Old="We identify"; New="I identify"},
    @{Old="We target"; New="I target"},
    @{Old="We've worked"; New="I've worked"},
    @{Old="We have"; New="I have"},
    @{Old="we are committed"; New="I am committed"},
    @{Old="We are committed"; New="I am committed"},
    @{Old="we cannot guarantee"; New="I cannot guarantee"},
    @{Old="We cannot guarantee"; New="I cannot guarantee"},
    @{Old="we're confident"; New="I'm confident"},
    @{Old="We're confident"; New="I'm confident"},
    @{Old="We do offer"; New="I do offer"},
    @{Old="We do not"; New="I do not"},
    @{Old="We may update"; New="I may update"},
    @{Old="We will notify"; New="I will notify"},
    @{Old="we can provide"; New="I can provide"},
    @{Old="Our services"; New="My services"},
    @{Old="our services"; New="my services"},
    @{Old="Our team"; New="My expertise"},
    @{Old="our team"; New="my expertise"},
    @{Old="Our clients"; New="My clients"},
    @{Old="our clients"; New="my clients"},
    @{Old="Our approach"; New="My approach"},
    @{Old="our approach"; New="my approach"},
    @{Old="Our expertise"; New="My expertise"},
    @{Old="our expertise"; New="my expertise"},
    @{Old="Our process"; New="My process"},
    @{Old="our process"; New="my process"},
    @{Old="Our portfolio"; New="My portfolio"},
    @{Old="our portfolio"; New="my portfolio"},
    @{Old="Our SEO"; New="My SEO"},
    @{Old="our SEO"; New="my SEO"},
    @{Old="Our goal"; New="My goal"},
    @{Old="our goal"; New="my goal"},
    @{Old="Our keyword"; New="My keyword"},
    @{Old="our keyword"; New="my keyword"},
    @{Old="Our search engine"; New="My search engine"},
    @{Old="our search engine"; New="my search engine"},
    @{Old="Our holistic"; New="My holistic"},
    @{Old="our holistic"; New="my holistic"},
    @{Old="Our WooCommerce"; New="My WooCommerce"},
    @{Old="our WooCommerce"; New="my WooCommerce"},
    @{Old="Our e-commerce"; New="My e-commerce"},
    @{Old="our e-commerce"; New="my e-commerce"},
    @{Old="Our consultants"; New="My consulting"},
    @{Old="our consultants"; New="my consulting"},
    @{Old="Our local expertise"; New="My local expertise"},
    @{Old="our local expertise"; New="my local expertise"},
    @{Old="We can help"; New="I can help"},
    @{Old="we can help"; New="I can help"},
    @{Old="Contact Us"; New="Contact Me"},
    @{Old="contact us"; New="contact me"},
    @{Old="About Us"; New="About Me"},
    @{Old="about us"; New="about me"},
    @{Old="Join Us"; New="Join Me"},
    @{Old="join us"; New="join me"},
    @{Old="call us"; New="call me"},
    @{Old="Call Us"; New="Call Me"},
    @{Old="email us"; New="email me"},
    @{Old="Email Us"; New="Email Me"},
    @{Old="Industries We Serve"; New="Industries I Serve"},
    @{Old="Cities We Serve"; New="Cities I Serve"},
    @{Old="Countries We Serve"; New="Countries I Serve"},
    @{Old="How We"; New="How I"},
    @{Old="discover how we can"; New="discover how I can"},
    @{Old="Discover how we can"; New="Discover how I can"},
    @{Old="What Our Clients"; New="What My Clients"},
    @{Old="using our services"; New="using my services"},
    @{Old="use our services"; New="use my services"}
)

$totalChanges = 0

foreach ($folder in $foldersToUpdate) {
    $folderPath = Join-Path $projectRoot $folder
    
    if (Test-Path $folderPath) {
        Write-Host "`nProcessing folder: $folder" -ForegroundColor Cyan
        
        foreach ($pattern in $filePatterns) {
            $files = Get-ChildItem -Path $folderPath -Filter $pattern -Recurse -File
            
            foreach ($file in $files) {
                $content = Get-Content $file.FullName -Raw
                $originalContent = $content
                $fileChanged = $false
                
                foreach ($replacement in $replacements) {
                    if ($content -match [regex]::Escape($replacement.Old)) {
                        $content = $content -replace [regex]::Escape($replacement.Old), $replacement.New
                        $fileChanged = $true
                    }
                }
                
                if ($fileChanged) {
                    Set-Content -Path $file.FullName -Value $content -NoNewline
                    Write-Host "  Updated: $($file.Name)" -ForegroundColor Green
                    $totalChanges++
                }
            }
        }
    }
}

Write-Host "`n========================================" -ForegroundColor Yellow
Write-Host "Total files updated: $totalChanges" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Yellow
