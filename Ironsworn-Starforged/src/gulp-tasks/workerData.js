
const gulp = require('gulp');
const fs = require('fs');
const readJson = require('./helpers/readJson.js');
const _ = require('lodash');

const workerDataKeys = ['sheets', 'index-oracles', 'assetIndex'];

module.exports = async function workerData() {
  const gameData = readJson('./temp/data.json');
  const outputPath = './app/workers/scripts/_data.js';
  const dataArray = workerDataKeys.map(
    (key) => `const ${_.camelCase(key)} = ${JSON.stringify(gameData[key], null, 2)};`
  );
  fs.writeFileSync(outputPath, "\n\n"+dataArray.join('\n\n')+"\n\n", { encoding: 'utf-8' });
};
