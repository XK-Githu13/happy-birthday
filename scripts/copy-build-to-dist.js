const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const buildDir = path.join(rootDir, 'build');
const distDir = path.join(rootDir, 'dist');

if (!fs.existsSync(buildDir)) {
  console.error('Build output folder "build" was not found.');
  process.exit(1);
}

fs.rmSync(distDir, { recursive: true, force: true });
fs.cpSync(buildDir, distDir, { recursive: true });

console.log('Copied build output to dist.');
