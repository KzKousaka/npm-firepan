var gulp            = require('gulp');
var ts              = require('gulp-typescript');
var sass            = require('gulp-ruby-sass');
var webpack         = require('gulp-webpack');

var tsConfig        = require('./src/tsconfig.json');
var webpackTsConfig = require('./webpack.ts.config.js');

// compiling typescript
gulp.task('ts', function () {
    var tsResult = gulp.src(['./src/**/*.ts', '!./src/typings'])
        .pipe(ts(tsConfig.compilerOptions))
        .pipe(webpack(webpackTsConfig));

    return tsResult.pipe(gulp.dest('./public/js'));
});

gulp.task('sass', function(){
    return sass('sass/', { style : 'expanded' })
        .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.ts', './src/**/*.scss'], ['ts','sass']);
});
