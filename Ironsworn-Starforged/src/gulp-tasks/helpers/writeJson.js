const fs = require('fs');

module.exports = function writeJson(fileName, data) {
  // log("Writing json data to", fileName);
  fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
}