var gulp = require('gulp');

var ts = require('gulp-typescript');
var tsConfig = require('./src/tsconfig.json');

var sass = require('gulp-ruby-sass');

var webpack = require('gulp-webpack');
var webpackTsConfig = require('./webpack.ts.config.js');

// TypeScriptのコンパイルとwebpackの実行
gulp.task('ts', function () {
    // TypeScriptのコンパイル
    var tsResult = gulp.src(['./src/**/*.ts', '!./src/typings'])
        // tscpnfig.jsonに書いたコンパイルオプションの取得
        .pipe(ts(tsConfig.compilerOptions))
        // webpack.config.jsに書いたwebpackの設定取得
        .pipe(webpack(webpackTsConfig));

    // JSファイルを出力
    return tsResult.pipe(gulp.dest('./public/js'));
});

gulp.task('sass', function(){
    return sass('sass/', { style : 'expanded' })
        .pipe(gulp.dest('./public/'));
});

// 自動コンパイル
gulp.task('watch', function () {
    // src配下のTSが変更されたら、'ts'タスク（TypeScriptのコンパイル）を実行
    gulp.watch(['./src/**/*.ts', './src/**/*.scss'], ['ts','sass']);
});

// コマンドで「> gulp」と入力するだけでtsタスクとwatchタスクをする
gulp.task('default', ['ts', 'watch']);
