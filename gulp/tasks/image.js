const   PATH = require('../path/path'),
        plumber = require('gulp-plumber');
        tiny = require('gulp-tinypng-extended');

module.exports = function () {
    $.gulp.task('img', () => {
        return $.gulp.src(PATH().input + '/assets/img/**/*.{png,jpg,gif,svg,ico}')
            .pipe($.gulp.dest(PATH().output + '/assets/img'));
    });

    // $.gulp.task('img:build', () => {
    //     return $.gulp.src(PATH.input + '/img/**/*.{png,jpg,gif,svg,ico}')
    //     .pipe(plumber())
    //     .pipe($.gulp.dest(PATH.build_output + '/img'));
    // });
    // $.gulp.task('img:tiny', () => {
    //     return $.gulp.src(PATH.input + '/img/**/*.{png,jpg}')
    //     .pipe(plumber())    
    //     .pipe(tiny({
    //             key: 'kML4Vpg9g7fXgqGcq1pCqPVbpHC9DFY7',
    //             sigFile: './.tinypng-sigs',
    //             log: true
    //         }))
    //     .pipe($.gulp.dest(PATH.input + '/img'));
    // });
};

