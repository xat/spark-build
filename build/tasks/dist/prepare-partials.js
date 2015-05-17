var gulp = require('gulp');
var ngTemplates = require('gulp-angular-templatecache');
var path = require('path');
var utils = require('../utils');
var config = require('../config');
var join = path.join;

gulp.task('dist:partials', function() {
    return gulp.src(config.paths.app.partials)
        .pipe(ngTemplates({
            base: function(file) {
                return join('app/partials', path.basename(file.path));
            },
            module: config.moduleName,
            filename: 'partials.js' // delete this file after build process?
        }))
        .pipe(gulp.dest(utils.getDistDir()));
});