const execSync = require('child_process').execSync;

test('Builds Docusaurus site', () => {
  execSync('npm run build', { stdio: 'inherit' });
});