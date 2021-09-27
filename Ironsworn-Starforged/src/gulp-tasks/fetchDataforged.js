const axios = require('axios').default;
const gulp = require('gulp');
const download = require('gulp-download2');
const writeJson = require('./helpers/writeJson');


// const targetFiles = {
//   data: [
//     "oracles.json",
//     "assets.json",
//     "moves.json",
//     "movegroups.json"
//   ],
//   translations: ["translation-assets.json"]
// };

module.exports = async function fetchDataforged(fileNames, localFolder="./app/data") {
  const baseURL = 'https://raw.githubusercontent.com/rsek/dataforged/main/roll20'
  let files = fileNames.map(file => `${baseURL}/${file}`);
  return new Promise((resolve, reject) => {
    download(files)
    .pipe(gulp.dest(localFolder))
    .on('end', resolve)
    .on('error', reject)
  });

  // for (const key in targetFiles) {
  //   targetFiles[key].forEach(item =>
  //     gitHubRaw.get(`${item}.json`).then(
  //       (response) => {
  //         writeJson(`./app/${key}/${item}.json`, response.data)
  //       }
  //     )
  //   )
  // }
}