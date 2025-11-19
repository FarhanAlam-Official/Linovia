# Setup Script for Linux Command Reference Pro

Write-Host "🚀 Setting up Linux Command Reference Pro..." -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "📋 Checking prerequisites..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js is installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js 16+ from https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Check if npm is available
try {
    $npmVersion = npm --version
    Write-Host "✅ npm is available: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm is not available" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow

# Install dependencies
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🛠 Setting up development environment..." -ForegroundColor Yellow

# Create any missing directories
$directories = @("public", "src\hooks", "src\utils")
foreach ($dir in $directories) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "📁 Created directory: $dir" -ForegroundColor Blue
    }
}

# Create a basic favicon if it doesn't exist
if (!(Test-Path "public\favicon.ico")) {
    # This would create a basic favicon - for now just create a placeholder file
    "# Favicon placeholder" | Out-File -FilePath "public\favicon.ico" -Encoding UTF8
    Write-Host "📁 Created favicon placeholder" -ForegroundColor Blue
}

Write-Host ""
Write-Host "✨ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "🎯 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Run 'npm start' to start the development server" -ForegroundColor White
Write-Host "   2. Open http://localhost:3000 in your browser" -ForegroundColor White
Write-Host "   3. Start developing your Linux command reference!" -ForegroundColor White
Write-Host ""
Write-Host "📚 Available commands:" -ForegroundColor Cyan
Write-Host "   npm start     - Start development server" -ForegroundColor White
Write-Host "   npm build     - Build for production" -ForegroundColor White
Write-Host "   npm test      - Run tests" -ForegroundColor White
Write-Host "   npm run lint  - Run linter" -ForegroundColor White
Write-Host ""

# Ask if user wants to start the dev server
$startServer = Read-Host "Would you like to start the development server now? (y/n)"
if ($startServer -eq "y" -or $startServer -eq "Y") {
    Write-Host ""
    Write-Host "🚀 Starting development server..." -ForegroundColor Green
    npm start
}