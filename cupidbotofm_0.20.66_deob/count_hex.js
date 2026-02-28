const fs = require('fs');
const content = fs.readFileSync('background.js', 'utf8');
const matches = content.match(/_0x[0-9a-fA-F]+/g) || [];
const counts = {};
matches.forEach(m => counts[m] = (counts[m] || 0) + 1);
Object.entries(counts)
  .filter(([_, c]) => c >= 2)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 100)
  .forEach(([name, count]) => console.log(name + ': ' + count));
