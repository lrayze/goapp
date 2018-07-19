'use strict;';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const dir = {
    src: 'resources',
    dist: 'public'
};

const options = {
    sass: {
        outputStyle: 'nested'
    },
    autoprefixer: {
        browsers: ['last 3 versions'],
        cascade: false
    }
};

gulp.task('sass', ()=> {
    gulp.src(`${dir.src}/scss/**/*.scss`)
        .pipe(sass(options.sass).on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(options.autoprefixer))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(`${dir.dist}/css`));
});

gulp.task('watch', ['sass'], ()=>{
    gulp.watch(`${dir.src}/scss/**/*.scss, ['sass]`);
});

gulp.task('default', ['watch']);