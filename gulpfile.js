var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var uglify = require('gulp-uglify');
gulp.task('default', ()=>{
    return gulp.src('./index.js')
        .pipe(webpack(webpackConfig, null, (err, stats)=>{
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", 'webpack is  OK!');
        }))
        .pipe(gulp.dest('.'))
});
