module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map'
};