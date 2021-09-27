const fs = require('fs');

module.exports = function readJson(fileName) {
  return JSON.parse(fs.readFileSync(fileName));
}
