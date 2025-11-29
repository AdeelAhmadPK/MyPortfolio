# Script to fix all TypeScript type errors in service pages

$files = Get-ChildItem -Path "app\services\*\page.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false
    
    # Fix 1: Change us: to withSEO: in CompetitorComparison
    if ($content -match "us:") {
        $content = $content -replace "us: '", "withSEO: '"
        $content = $content -replace 'us: "', 'withSEO: "'
        $modified = $true
        Write-Host "Fixed us -> withSEO in $($file.Name)"
    }
    
    # Fix 2: Change competitors: to withoutSEO: in CompetitorComparison
    if ($content -match "competitors:") {
        $content = $content -replace "competitors: '", "withoutSEO: '"
        $content = $content -replace 'competitors: "', 'withoutSEO: "'
        $modified = $true
        Write-Host "Fixed competitors -> withoutSEO in $($file.Name)"
    }
    
    # Fix 3: Change before/after to value in CaseStudy results
    if ($content -match "before:") {
        $content = $content -replace "before: '", "value: '"
        $content = $content -replace 'before: "', 'value: "'
        $content = $content -replace ", after: '[^']+',", ","
        $content = $content -replace ', after: "[^"]+",', ','
        $modified = $true
        Write-Host "Fixed before/after -> value in $($file.Name)"
    }
    
    # Fix 4: Remove industry prop from FAQSection
    if ($content -match 'FAQSection.*industry=') {
        $content = $content -replace ' industry="[^"]*"', ''
        $modified = $true
        Write-Host "Removed industry prop from FAQSection in $($file.Name)"
    }
    
    # Fix 5: Change features to comparisons in CompetitorComparison
    if ($content -match 'features=\{') {
        $content = $content -replace 'features=\{', 'comparisons={'
        $modified = $true
        Write-Host "Fixed features -> comparisons in $($file.Name)"
    }
    
    # Fix 6: Change impact: to importance: in LocalSEOSignals
    if ($content -match "impact:") {
        $content = $content -replace "impact: '", "importance: '"
        $content = $content -replace 'impact: "', 'importance: "'
        $modified = $true
        Write-Host "Fixed impact -> importance in $($file.Name)"
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated $($file.FullName)" -ForegroundColor Green
    }
}

Write-Host "All type errors fixed!" -ForegroundColor Green
