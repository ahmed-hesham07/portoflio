#!/bin/bash

# 🚀 Ahmed Seddik Portfolio - Deployment Script
# This script automates the deployment process to Vercel

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project root."
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: Portfolio ready for deployment"
else
    echo "✅ Git repository found"
fi

# Build and test locally first
echo "🔨 Building project locally..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors before deploying."
    exit 1
fi

echo "✅ Local build successful!"

# Commit any changes
echo "📝 Committing changes..."
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

# Push to GitHub (if remote exists)
if git remote get-url origin >/dev/null 2>&1; then
    echo "📤 Pushing to GitHub..."
    git push origin main
    echo "✅ Code pushed to GitHub!"
else
    echo "⚠️  No GitHub remote found. You'll need to:"
    echo "   1. Create a GitHub repository"
    echo "   2. Run: git remote add origin https://github.com/yourusername/portfolio.git"
    echo "   3. Run: git push -u origin main"
fi

echo ""
echo "🎉 Local deployment preparation complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Go to https://vercel.com"
echo "   2. Import your GitHub repository"
echo "   3. Add environment variables:"
echo "      - GMAIL_USER=shadowbyte1998@gmail.com"
echo "      - GMAIL_PASS=3fMYvHQdj9NvtxiWkk4zscMLs*DKA4KEY*VqBW3*yrMzHXhvRL"
echo "      - NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX"
echo "   4. Deploy!"
echo ""
echo "📖 For detailed instructions, see: DEPLOYMENT.md"
