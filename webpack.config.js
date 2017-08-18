const webpack = require('webpack');

module.exports = {
    entry: {
        "exemple-ajax": './scripts/exemple_ajax.js',
        index: './index.js',
        vendor: [
            'jquery'
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    devtool: 'inline-source-map'
};