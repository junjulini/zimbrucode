const path = require('path');
const glob = require('glob');

const generalFiles = glob.sync('./src/**/*.es6.js').reduce((obj, el) => {
    const key = path.normalize(path.dirname(el) + '/../' + path.basename(el)).replace(/\.es6\.js$/, '');

    obj[key] = './' + el;

    return obj
}, {});

const controls = glob.sync('./src/**/control.js').reduce((obj, el) => {
    const key = path.normalize(el).replace(/\.js$/, '');

    if (!generalFiles[key]) {
        obj[key] = './' + el;
    }

    return obj
}, {});

const prodConfig = {
    mode: 'production',
    entry: {
        ...generalFiles,
        ...controls
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }
            }
        ]
    }
};

const devConfig = {
    ...prodConfig,
    mode: 'development',
    devtool: 'inline-source-map',
    entry: generalFiles,
    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name].js'
    },
};

module.exports = () => {
    return [prodConfig, devConfig];
};