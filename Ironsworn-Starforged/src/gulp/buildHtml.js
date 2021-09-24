const gulp = require('gulp');
const gulpData = require('gulp-data');
const pug = require('gulp-pug');
const readJSON = require('./helpers/readJson.js');

module.exports = gulp.task('buildHtml', () =>  {
  return gulp
    .src('./app/Ironsworn-starforged.pug')
    .pipe(
      gulpData(() => {
        return readJSON('./temp/data.json');
      })
    )
    .pipe(
      pug({
        // pretty: true,
        ...require('../app/pug.config.js'),
      })
    )
    .pipe(gulp.dest('../'));
});
