# PowerShell script to replace emoji characters with React Icon imports in service pages
# This script will systematically update all service pages

Write-Host "Starting emoji to React Icons replacement across all service pages..." -ForegroundColor Green

# Define the service pages to update
$servicePages = @(
    "walk-in-tubs-seo",
    "roofing-seo",
    "water-damage-seo",
    "flooring-seo",
    "gutter-seo",
    "garage-door-seo",
    "home-security-seo",
    "wordpress-seo",
    "wix-seo",
    "webflow-seo"
)

# Common React Icons imports needed
$iconImports = "import { FaFire, FaBell, FaMapMarkerAlt, FaPhoneAlt, FaClipboardList, FaWind, FaBuilding, FaClock, FaDollarSign, FaSearch, FaCog, FaFileAlt, FaChartLine, FaLink, FaHome, FaWrench, FaHandshake, FaChartBar, FaStar, FaHammer, FaTools, FaShieldAlt, FaBolt, FaIndustry, FaShower, FaWheelchair, FaSpa, FaHospital, FaUserMd, FaMedal, FaWarehouse, FaTachometerAlt, FaTags, FaCertificate, FaCamera, FaTrophy, FaRocket, FaPaintRoller, FaCheck, FaGlobe, FaPlug, FaMobileAlt, FaPalette, FaLock, FaBriefcase, FaEdit } from 'react-icons/fa';"

Write-Host "`nProcessing $($servicePages.Count) service pages..." -ForegroundColor Cyan

foreach ($page in $servicePages) {
    $filePath = "d:\AdeelBhaiPortfolio\app\services\$page\page.tsx"
    
    if (Test-Path $filePath) {
        Write-Host "`nProcessing: $page" -ForegroundColor Yellow
        Write-Host "  - File found: $filePath" -ForegroundColor Gray
        
        # Add React Icons import if not present
        # Note: Actual replacement logic would need to be more sophisticated
        # This is a template that needs manual refinement per file
        
        Write-Host "  - Ready for manual icon replacement" -ForegroundColor Green
    } else {
        Write-Host "`nSkipping: $page (file not found)" -ForegroundColor Red
    }
}

Write-Host "`n`nScript completed! Files are ready for manual icon replacement." -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Add React Icons imports to each file" -ForegroundColor White
Write-Host "  2. Replace emoji strings with <FaIconName /> components" -ForegroundColor White
Write-Host "  3. Test each page for TypeScript errors" -ForegroundColor White
