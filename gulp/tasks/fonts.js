const PATH = require('../path/path');

module.exports = function () {
    $.gulp.task('fonts', () => {
        return $.gulp.src( PATH().input + '/assets/fonts/**/*.*')
            .pipe($.gulp.dest(PATH().output + '/assets/fonts'));
    });
    // $.gulp.task('fonts:build', () => {
    //     return $.gulp.src( PATH.input + '/fonts/**/*.*')
    //         .pipe($.gulp.dest(PATH.build_output + '/fonts'));
    // });
};