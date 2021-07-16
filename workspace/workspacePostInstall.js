const { execSync } = require('child_process');

console.log("Workspace post install");

execSync(`node fileDoesntExist.js`, { stdio: 'inherit' });