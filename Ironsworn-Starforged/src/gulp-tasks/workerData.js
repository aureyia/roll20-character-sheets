
const gulp = require('gulp');
const fs = require('fs');
const readJson = require('./helpers/readJson.js');

const workerDataKeys = ['sheets'];

module.exports = async function workerData() {
  const gameData = readJson('./temp/data.json');
  const fileName = './app/workers/scripts/_1-data.js';
  const dataArray = workerDataKeys.map(
    (key) => `const ${key} = ${JSON.stringify(gameData[key], null)};`
  );
  fs.writeFileSync(fileName, dataArray.join('\n')+"\n\n", { encoding: 'utf-8' });
};
