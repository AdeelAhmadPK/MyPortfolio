# PowerShell script to replace ALL emojis with React Icons across the entire website

# Define emoji to React Icon mappings
$emojiMappings = @{
    # Fire & Emergency
    '🔥' = 'FaFire'
    '🚨' = 'FaBell'
    '⚠️' = 'FaExclamationTriangle'
    
    # Location & Maps
    '📍' = 'FaMapMarkerAlt'
    '🗺️' = 'FaMap'
    '🏠' = 'FaHome'
    '🏢' = 'FaBuilding'
    '🏭' = 'FaIndustry'
    '🏗️' = 'FaTools'
    '🏥' = 'FaHospital'
    
    # Communication
    '📞' = 'FaPhoneAlt'
    '📱' = 'FaMobileAlt'
    '📧' = 'FaEnvelope'
    '💬' = 'FaComments'
    
    # Tools & Settings
    '🔧' = 'FaWrench'
    '🔨' = 'FaHammer'
    '⚙️' = 'FaCog'
    '🛠️' = 'FaTools'
    '⚡' = 'FaBolt'
    '🛡️' = 'FaShieldAlt'
    '🔌' = 'FaPlug'
    
    # Money & Business
    '💰' = 'FaDollarSign'
    '💵' = 'FaMoneyBillWave'
    '💸' = 'FaMoneyBillAlt'
    '💼' = 'FaBriefcase'
    
    # Charts & Analytics
    '📈' = 'FaChartLine'
    '📉' = 'FaChartBar'
    '📊' = 'FaChartArea'
    '📋' = 'FaClipboardList'
    
    # Search
    '🔍' = 'FaSearch'
    '🔎' = 'FaSearchPlus'
    
    # Documents & Writing
    '📝' = 'FaEdit'
    '📄' = 'FaFileAlt'
    '📑' = 'FaFile'
    '📜' = 'FaCertificate'
    '✍️' = 'FaPencilAlt'
    
    # Calendar & Time
    '📅' = 'FaCalendar'
    '⏰' = 'FaClock'
    '⌚' = 'FaClock'
    
    # Success & Achievement
    '🌟' = 'FaStar'
    '🏆' = 'FaTrophy'
    '🥇' = 'FaMedal'
    '🎖️' = 'FaAward'
    '✅' = 'FaCheckCircle'
    '✔️' = 'FaCheck'
    
    # Links & Web
    '🔗' = 'FaLink'
    '🌐' = 'FaGlobe'
    '📶' = 'FaSignal'
    '🌍' = 'FaGlobeAmericas'
    
    # Healthcare & Wellness
    '💊' = 'FaPills'
    '👨‍⚕️' = 'FaUserMd'
    '💆' = 'FaSpa'
    '♿' = 'FaWheelchair'
    
    # Home & Bath
    '🛁' = 'FaBath'
    '🚿' = 'FaShower'
    
    # Shopping & Commerce
    '🛒' = 'FaShoppingCart'
    '🛍️' = 'FaShoppingBag'
    '💳' = 'FaCreditCard'
    '🏷️' = 'FaTags'
    
    # Images & Media
    '📸' = 'FaCamera'
    '📷' = 'FaCameraRetro'
    '🎥' = 'FaVideo'
    '📹' = 'FaVideo'
    
    # Vehicles & Storage
    '🚗' = 'FaCar'
    '📦' = 'FaBox'
    
    # Weather
    '☁️' = 'FaCloud'
    '⛈️' = 'FaCloudShowersHeavy'
    '🌪️' = 'FaWind'
    '💨' = 'FaWind'
    '❄️' = 'FaSnowflake'
    
    # Animals
    '🐜' = 'FaBug'
    '🐛' = 'FaBug'
    
    # Other Common Icons
    '🎯' = 'FaBullseye'
    '🤝' = 'FaHandshake'
    '🚀' = 'FaRocket'
    '🔒' = 'FaLock'
    '🔐' = 'FaLock'
    '📐' = 'FaRuler'
    '🎨' = 'FaPalette'
    '💡' = 'FaLightbulb'
    '📖' = 'FaBook'
    '👥' = 'FaUsers'
    '👨‍👩‍👧‍👦' = 'FaUsers'
    '🔵' = 'FaCircle'
}

Write-Host "🚀 Starting site-wide emoji to React Icons replacement..." -ForegroundColor Cyan
Write-Host ""

# Get all TypeScript and TypeScript React files
$files = Get-ChildItem -Path "D:\AdeelBhaiPortfolio" -Include *.tsx,*.ts -Recurse -File | 
    Where-Object { $_.FullName -notlike "*\node_modules\*" -and $_.FullName -notlike "*\.next\*" }

$totalFiles = $files.Count
$processedFiles = 0
$modifiedFiles = 0

foreach ($file in $files) {
    $processedFiles++
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    $changed = $false
    
    # Check if file contains any emojis
    $hasEmojis = $false
    foreach ($emoji in $emojiMappings.Keys) {
        if ($content -match [regex]::Escape($emoji)) {
            $hasEmojis = $true
            break
        }
    }
    
    if (-not $hasEmojis) {
        Write-Progress -Activity "Processing files" -Status "$processedFiles of $totalFiles" -PercentComplete (($processedFiles / $totalFiles) * 100)
        continue
    }
    
    Write-Host "📄 Processing: $($file.Name)" -ForegroundColor Yellow
    
    # Collect all React Icons needed for this file
    $iconsNeeded = @{}
    foreach ($emoji in $emojiMappings.Keys) {
        if ($content -match [regex]::Escape($emoji)) {
            $iconName = $emojiMappings[$emoji]
            $iconsNeeded[$iconName] = $true
        }
    }
    
    # Replace emojis with React Icon JSX
    foreach ($emoji in $emojiMappings.Keys) {
        $iconName = $emojiMappings[$emoji]
        $escapedEmoji = [regex]::Escape($emoji)
        
        # Replace in different contexts
        # 1. icon: "emoji" -> icon: <Icon />
        $content = $content -replace "icon:\s*[`'\`"]$escapedEmoji[`'\`"]", "icon: <$iconName className=`"w-6 h-6`" />"
        
        # 2. icon="emoji" -> icon=<Icon />  (JSX)
        $content = $content -replace "icon=`"$escapedEmoji`"", "icon={<$iconName className=`"w-6 h-6`" />}"
        
        # 3. { icon: "emoji" } -> { icon: <Icon /> }
        $content = $content -replace "\{\s*icon:\s*[`'\`"]$escapedEmoji[`'\`"]\s*\}", "{ icon: <$iconName className=`"w-6 h-6`" /> }"
    }
    
    if ($content -ne $originalContent) {
        $changed = $true
        
        # Check if file already has react-icons imports
        $hasReactIconsImport = $content -match "import\s+\{[^}]*\}\s+from\s+['\`"]react-icons/fa['\`"]"
        
        if ($hasReactIconsImport) {
            # Add missing icons to existing import
            $existingImport = [regex]::Match($content, "import\s+\{([^}]*)\}\s+from\s+['\`"]react-icons/fa['\`"]").Groups[1].Value
            $existingIcons = $existingImport -split ',' | ForEach-Object { $_.Trim() } | Where-Object { $_ }
            
            $allIcons = $existingIcons + ($iconsNeeded.Keys | Where-Object { $existingIcons -notcontains $_ })
            $allIcons = $allIcons | Sort-Object | Get-Unique
            
            $newImport = "import { $($allIcons -join ', ') } from 'react-icons/fa';"
            $content = $content -replace "import\s+\{[^}]*\}\s+from\s+['\`"]react-icons/fa['\`"];?", $newImport
        }
        else {
            # Add new react-icons import after other imports
            $icons = ($iconsNeeded.Keys | Sort-Object) -join ', '
            $importStatement = "import { $icons } from 'react-icons/fa';"
            
            # Find the last import statement
            $lastImportMatch = [regex]::Matches($content, "import\s+.*from\s+['\`"][^'\`"]+['\`"];?")
            if ($lastImportMatch.Count -gt 0) {
                $lastImport = $lastImportMatch[$lastImportMatch.Count - 1]
                $insertPosition = $lastImport.Index + $lastImport.Length
                $content = $content.Insert($insertPosition, "`n$importStatement")
            }
        }
        
        # Write the updated content
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $modifiedFiles++
        Write-Host "  ✅ Updated with $($iconsNeeded.Count) icon(s)" -ForegroundColor Green
    }
    
    Write-Progress -Activity "Processing files" -Status "$processedFiles of $totalFiles" -PercentComplete (($processedFiles / $totalFiles) * 100)
}

Write-Progress -Activity "Processing files" -Completed

Write-Host ""
Write-Host "✨ Replacement complete!" -ForegroundColor Green
Write-Host "Total files processed: $totalFiles" -ForegroundColor White
Write-Host "Files modified: $modifiedFiles" -ForegroundColor Green
Write-Host ""
Write-Host "⚠️  Please check the modified files and run 'npm run build' to verify." -ForegroundColor Yellow
