import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

console.log('Initializing Git repository...')

try {
  // Initialize git repo
  execSync('git init', { cwd: projectRoot, stdio: 'inherit' })
  
  // Set git user config
  execSync('git config user.email "dev@amconcastings.com"', { cwd: projectRoot, stdio: 'inherit' })
  execSync('git config user.name "AMCON Dev"', { cwd: projectRoot, stdio: 'inherit' })
  
  // Add all files
  execSync('git add -A', { cwd: projectRoot, stdio: 'inherit' })
  
  // Initial commit
  execSync('git commit -m "init: Initial Next.js project setup with all components and assets"', { cwd: projectRoot, stdio: 'inherit' })
  
  console.log('✓ Git repository initialized successfully!')
} catch (error) {
  console.error('Error initializing git:', error.message)
  process.exit(1)
}
