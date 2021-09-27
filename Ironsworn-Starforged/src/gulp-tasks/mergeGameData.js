const gulp = require('gulp');
const mergeJson = require('gulp-merge-json');
const path = require('path');

module.exports = async function mergeGameData() {
  return new Promise((resolve, reject) => {
    gulp
    .src(['app/data/*.json', '../translation.json'], { allowEmpty: true })
    .pipe(
      mergeJson({
        fileName: 'data.json',
        edit: (json, file) => {
          let filename = path.basename(file.path),
            primaryKey = filename.replace(path.extname(filename), '');
          let data = {
            [primaryKey.toLowerCase()]: json
          };
          return data;
        },
      })
    )
    .pipe(gulp.dest('./temp'))
    .on('end', resolve)
    .on('error', reject)
  });
};