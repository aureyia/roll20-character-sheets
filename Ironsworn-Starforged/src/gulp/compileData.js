const gulp = require('gulp');
const mergeJson = require('gulp-merge-json');
const path = require('path');

module.exports = gulp.task('compileData', async () => {
  return gulp
    .src(['app/data/**/*.json', '../translation.json'], { allowEmpty: true })
    .pipe(
      mergeJson({
        fileName: 'data.json',
        edit: (json, file) => {
          var filename = path.basename(file.path),
            primaryKey = filename.replace(path.extname(filename), '');
          var data = {
            [primaryKey.toLowerCase()]: json
          };
          return data;
        },
      })
    )
    .pipe(gulp.dest('./temp'));
});