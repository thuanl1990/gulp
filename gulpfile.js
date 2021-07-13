"use strict";

const { default: gulpPurgecss } = require('gulp-purgecss');

global.$ = {
	path: {
		task: require('./gulp/path/tasks.js')
	},
	gulp: require('gulp'),
	browserSync: require('browser-sync').create(),
	del: require('del')
};

$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
	'env',
	$.gulp.parallel(
		'pug',
		'fonts',
		'styles',
		'img',
		'js',
	)
));

$.gulp.task('build', $.gulp.series(
	'clean',
	'env',
	$.gulp.parallel(
		'pug',
		'fonts',
		'styles',
		'img',
		'js',
	)
));

$.gulp.task('build:wp', $.gulp.series(
	'env',
	$.gulp.parallel( 
		'fonts',
		'styles',
		'img',
		'js',
	)
));

$.gulp.task('default', $.gulp.series(
	'dev',
	$.gulp.parallel(
		'watch',
		'serve'
	)
));


async function imgBuild() {
	return $.gulp.series(
		'img:tiny'
	)();
}

$.gulp.task('img:compress', imgBuild);