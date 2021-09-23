const gulp = require('gulp');

const taskSeries = [
  'fetchDataforged',
  'compileData',
  'mergeTranslation',
  'workerData',
  'buildHtml',
  'buildCss',
  'postCss'
];

taskSeries.forEach(task => require(`./gulp/${task}`));

gulp.task(
  'watch',
  gulp.series(taskSeries, () => {
    gulp.watch('./app/**/*.styl', gulp.series(['buildCss']));
    gulp.watch(['./app/**/*.pug', './app/**/*.js'], gulp.series(['buildHtml']));
  })
);

gulp.task('build', gulp.series(taskSeries));
