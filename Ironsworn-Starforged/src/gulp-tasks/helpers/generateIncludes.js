// FIXME automate this outputting to Ironworn.pug via gulp

const fs = require('fs');
const path = require('path');

function generateWorkerIncludes(dirPath) {
  let files = fs.readdirSync(dirPath).map(file => dirPath + file);
  console.log(files);
};

module.exports = generateIncludes;

// generateIncludes("./app/workers/scripts/");