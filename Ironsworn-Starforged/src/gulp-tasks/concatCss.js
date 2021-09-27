const gulp = require('gulp');
const concat = require('gulp-concat');

module.exports = async function concatCss() {
  return gulp
    .src([
      './temp/Ironsworn-starforged.css',
      './temp/template.css'
    ])
    .pipe(concat("Ironsworn-starforged.css"))
    .pipe(gulp.dest('../'));
}