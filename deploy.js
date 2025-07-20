const ghpages = require('gh-pages');
const fs = require('fs');
const path = require('path');

// Create .nojekyll file in out directory
const nojekyllPath = path.join(__dirname, 'out', '.nojekyll');
fs.writeFileSync(nojekyllPath, '');

console.log('Created .nojekyll file');

// Deploy to gh-pages
ghpages.publish('out', {
  dotfiles: true, // Include dotfiles like .nojekyll
  message: 'Auto-generated commit'
}, function(err) {
  if (err) {
    console.error('Deployment failed:', err);
  } else {
    console.log('Deployment successful!');
  }
});