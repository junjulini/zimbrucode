'use strict';

/**
 * External dependencies
 */
const path    = require('path');
const gulp    = require('gulp');
const uglify  = require('gulp-uglify');
const rename  = require('gulp-rename');
const notify  = require('gulp-notify');
const plumber = require('gulp-plumber');
const named   = require('vinyl-named');
const webpackStream = require('webpack-stream');

const webpack  = webpackStream.webpack;
const startDir = 'src';

function compES6(isWatch) {
    const options = {
        mode: 'development',
        watch: isWatch,
        devtool: 'cheap-module-inline-source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.join(__dirname, startDir),
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            caseSensitive: true,
                            removeComments: true,
                            collapseWhitespace: true,
                            removeAttributeQuotes: false,
                            removeEmptyElements: false
                        }
                    }
                }
            ]
        },
        plugins: [
            new webpack.NoEmitOnErrorsPlugin()
        ]
    };

    return gulp.src(`${startDir}/**/*.es6.js`)
        .pipe(plumber({
            errorHandler: notify.onError(err => ({
                title: 'Comp:ES6 WebPack',
                message: err.message
            }))
        }))
        .pipe(named((file) => {
            let name = path.basename(file.path, path.extname(file.path)).replace(/.es6/g, '');
            let output = path.dirname(path.dirname(file.relative)) + '/' + name;

            return output;
        }))
        .pipe(webpackStream(options))
        .pipe(gulp.dest(startDir))
        .pipe(uglify())
        .pipe(rename((path) => {
            path.extname = '.min.js';
        }))
        .pipe(gulp.dest(startDir));
}

gulp.task('comp:es6', () => {
    return compES6(false);
});

gulp.task('comp:control', () => {
    return gulp.src(`${startDir}/**/control.js`)
        .pipe(plumber({
            errorHandler: notify.onError(err => ({
                title: 'Comp:Control',
                message: () => {
                    let msg = err.message;
                    let file = err.fileName;

                    file = file.substr(file.length - 30);

                    return `${msg} File : ...${file}`;
                },
            }))
        }))
        .pipe(uglify())
        .pipe(rename((path) => {
            path.extname = '.min.js';
        }))
        .pipe(gulp.dest(startDir));
});

gulp.task('comp:w', gulp.series(gulp.parallel(
    () => {
        compES6(true);
    },
    () => {
        gulp.watch(`${startDir}/**/control.js`, gulp.series('comp:control'));
    }
)));

gulp.task('default', gulp.series('comp:es6', 'comp:control'));