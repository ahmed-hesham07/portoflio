# 🚀 Ahmed Seddik Portfolio - Deployment Script (PowerShell)
# This script automates the deployment process to Vercel

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found. Make sure you're in the project root." -ForegroundColor Red
    exit 1
}

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "📝 Initializing git repository..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial commit: Portfolio ready for deployment"
} else {
    Write-Host "✅ Git repository found" -ForegroundColor Green
}

# Build and test locally first
Write-Host "🔨 Building project locally..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Please fix errors before deploying." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Local build successful!" -ForegroundColor Green

# Commit any changes
Write-Host "📝 Committing changes..." -ForegroundColor Yellow
git add .
$commitMessage = "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git commit -m $commitMessage 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Changes committed!" -ForegroundColor Green
} else {
    Write-Host "ℹ️ No changes to commit" -ForegroundColor Cyan
}

# Check if GitHub remote exists
$remoteExists = $false
try {
    git remote get-url origin 2>$null
    if ($LASTEXITCODE -eq 0) {
        $remoteExists = $true
    }
} catch {
    $remoteExists = $false
}

if ($remoteExists) {
    Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
    git push origin main
    Write-Host "✅ Code pushed to GitHub!" -ForegroundColor Green
} else {
    Write-Host "⚠️  No GitHub remote found. You'll need to:" -ForegroundColor Yellow
    Write-Host "   1. Create a GitHub repository" -ForegroundColor White
    Write-Host "   2. Run: git remote add origin https://github.com/yourusername/portfolio.git" -ForegroundColor White
    Write-Host "   3. Run: git push -u origin main" -ForegroundColor White
}

Write-Host ""
Write-Host "🎉 Local deployment preparation complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Go to https://vercel.com" -ForegroundColor White
Write-Host "   2. Import your GitHub repository" -ForegroundColor White
Write-Host "   3. Add environment variables:" -ForegroundColor White
Write-Host "      - GMAIL_USER=shadowbyte1998@gmail.com" -ForegroundColor Gray
Write-Host "      - GMAIL_PASS=3fMYvHQdj9NvtxiWkk4zscMLs*DKA4KEY*VqBW3*yrMzHXhvRL" -ForegroundColor Gray
Write-Host "      - NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX" -ForegroundColor Gray
Write-Host "   4. Deploy!" -ForegroundColor White
Write-Host ""
Write-Host "📖 For detailed instructions, see: DEPLOYMENT.md" -ForegroundColor Cyan
