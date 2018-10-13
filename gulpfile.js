var gulp = require('gulp');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
//复制html相关代码
gulp.task('copyHtml', function() {
    return gulp.src('src/html/*.html').pipe(gulp.dest('dist/html'));
});

//终端中运行   $ gulp copyHtml

//压缩css代码
gulp.task('cssmin', function() {
    return gulp.src('src/styles/*.css').pipe(cssmin()).pipe(rename({ suffix: '.min' })).pipe(gulp.dest('dist/styles'))
});

//终端中运行   $  gulp cssmin
//压缩js代码
gulp.task('uglify', function() {
    return gulp.src(['src/js/*.js', '!src/js/**/{jquery-3.3.1.min,jquery.SuperSlide.2.1.1,jquery1.42.min}.js']).pipe(uglify()).pipe(rename({ suffix: '.min' })).pipe(gulp.dest('dist/js'))
});

//终端中运行   $  gulp uglify

//复制剩余js代码
gulp.task('copyHtml', function() {
    return gulp.src(['src/js/jquery-3.3.1.min.js', 'src/js/jquery.SuperSlide.2.1.1.js', 'jquery.SuperSlide.2.1.1.js', 'qcloud_data_wj.json']).pipe(gulp.dest('dist/js'));
});

//终端中运行   $gulp copyHtml

gulp.task('copyJs', function() {
    return gulp.src(['src/js/jquery-3.3.1.min.js', 'src/js/jquery.SuperSlide.2.1.1.js', 'src/js/jquery.SuperSlide.2.1.1.js', 'src/js/qcloud_data_wj.json']).pipe(gulp.dest('dist/js'));
});

//终端中运行   $gulp copyJs