const gulp = require('gulp');
const fs = require('fs');
const readJson = require('./helpers/readJson.js');

const workerDataKeys = ['sheets'];

const gameData = readJson('./temp/data.json');

module.exports = gulp.task('workerData', async () =>  {
  const fileName = './app/workers/scripts/_data.js';
  const dataArray = workerDataKeys.map(
    (key) => `const ${key} = ${JSON.stringify(gameData[key], null, 2)};`
  );
  fs.writeFileSync(fileName, dataArray.join(' '), { encoding: 'utf-8' });
});
