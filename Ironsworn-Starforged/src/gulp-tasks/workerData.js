
const gulp = require('gulp');
const fs = require('fs');
const readJson = require('./helpers/readJson.js');

const workerDataKeys = ['sheets', 'oracles_worker_data'];

module.exports = async function workerData() {
  const gameData = readJson('./temp/data.json');
  const fileName = './app/workers/scripts/_data.js';
  const dataArray = workerDataKeys.map(
    (key) => `const ${key} = ${JSON.stringify(gameData[key], null, 2)};`
  );
  fs.writeFileSync(fileName, "\n\n"+dataArray.join('\n\n')+"\n\n", { encoding: 'utf-8' });
};
