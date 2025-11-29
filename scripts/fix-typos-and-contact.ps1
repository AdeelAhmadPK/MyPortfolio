# PowerShell script to fix typos and update contact info
$projectRoot = "d:\AdeelBhaiPortfolio"
$filePatterns = @("*.tsx", "*.ts")
$foldersToUpdate = @("app", "components", "data")

# Replacement array
$replacements = @(
    # Fix typos
    @{Old="yMy"; New="your"},
    @{Old="YMy"; New="Your"},
    @{Old="YMYL"; New="YMYL"},  # Keep this one (it's an SEO term)
    
    # Update contact info
    @{Old="contact@adeelahmad.com"; New="hello@adeelahmad.com"},
    @{Old="+1 (234) 567-890"; New="+92 323 1458064"}
)

$totalChanges = 0

foreach ($folder in $foldersToUpdate) {
    $folderPath = Join-Path $projectRoot $folder
    
    if (Test-Path $folderPath) {
        Write-Host "`nProcessing folder: $folder" -ForegroundColor Cyan
        
        foreach ($pattern in $filePatterns) {
            $files = Get-ChildItem -Path $folderPath -Filter $pattern -Recurse -File
            
            foreach ($file in $files) {
                try {
                    $content = [System.IO.File]::ReadAllText($file.FullName)
                    $originalContent = $content
                    $fileChanged = $false
                    
                    foreach ($replacement in $replacements) {
                        # Skip YMYL replacement (it's an SEO term)
                        if ($replacement.Old -eq "YMYL") {
                            continue
                        }
                        
                        if ($content -match [regex]::Escape($replacement.Old)) {
                            $content = $content -replace [regex]::Escape($replacement.Old), $replacement.New
                            $fileChanged = $true
                        }
                    }
                    
                    if ($fileChanged) {
                        [System.IO.File]::WriteAllText($file.FullName, $content)
                        Write-Host "  Updated: $($file.Name)" -ForegroundColor Green
                        $totalChanges++
                    }
                } catch {
                    Write-Host "  Error processing $($file.Name): $_" -ForegroundColor Red
                }
            }
        }
    }
}

Write-Host "`n========================================" -ForegroundColor Yellow
Write-Host "Total files updated: $totalChanges" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Yellow
