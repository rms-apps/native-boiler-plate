const fs = require('fs');
const path = require('path');

const bumpType = process.argv[2] || 'patch'; // default to patch
const filePath = path.join(__dirname, '..', 'version.json');
const versionData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

let [major, minor, patch] = versionData.version.split('.').map(Number);

switch (bumpType) {
  case 'major':
    major += 1;
    minor = 0;
    patch = 0;
    break;
  case 'minor':
    minor += 1;
    patch = 0;
    break;
  case 'patch':
  default:
    patch += 1;
}

const newVersion = `${major}.${minor}.${patch}`;
versionData.version = newVersion;
versionData.androidVersionCode += 1;
versionData.iosBuildNumber += 1;

fs.writeFileSync(filePath, JSON.stringify(versionData, null, 2));

console.log(`📦 Bumped to version: ${newVersion}`);

// Auto Commit
// const { execSync } = require('child_process');
// execSync('git add version.json');
// execSync(`git commit -m "chore: bump version to ${newVersion}"`);
