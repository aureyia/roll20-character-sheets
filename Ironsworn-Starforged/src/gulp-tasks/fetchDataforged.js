const gulp = require('gulp');
const download = require('gulp-download2');

module.exports = async function fetchDataforged(fileNames, localFolder="./app/data") {
  const baseURL = 'https://raw.githubusercontent.com/rsek/dataforged/main/roll20'
  let files = fileNames.map(file => `${baseURL}/${file}`);
  return new Promise((resolve, reject) => {
    download(files)
    .pipe(gulp.dest(localFolder))
    .on('end', resolve)
    .on('error', reject)
  });
}