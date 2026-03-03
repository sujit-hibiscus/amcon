import { execSync } from 'child_process';

const message = process.argv[2] || 'Update project files';

try {
  // Add all changes
  console.log('Adding files to git...');
  execSync('git add -A', { stdio: 'inherit' });
  
  // Check if there are changes
  try {
    execSync('git diff --cached --quiet');
  } catch {
    console.log('✓ Committing: ' + message);
    execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
    execSync('git log -1 --oneline', { stdio: 'inherit' });
    process.exit(0);
  }
  
  console.log('No changes to commit');
} catch (error) {
  console.error('✗ Commit failed:', error.message);
  process.exit(1);
}
