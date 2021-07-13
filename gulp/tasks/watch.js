module.exports = function () {
	$.gulp.task('watch', function () {
		$.gulp.watch('./src/pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('./src/**/*.json', $.gulp.series('json'));
		$.gulp.watch('./src/assets/scss/**/*.scss', $.gulp.series('styles'));
		$.gulp.watch('./src/assets/img/**/*.{png,jpg,gif,svg}', $.gulp.series('img'));
		$.gulp.watch('./src/assets/js/**/*.js', $.gulp.series('js'));
	});
};
