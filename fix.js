const fs = require('fs');

const raw = fs.readFileSync('rewrite.py', 'utf8');
const start = raw.indexOf('"""') + 3;
const end = raw.lastIndexOf('"""');
const htmlContent = raw.substring(start, end);

fs.writeFileSync('index.html', htmlContent, 'utf8');
console.log('Fixed index.html via NodeJS!');
