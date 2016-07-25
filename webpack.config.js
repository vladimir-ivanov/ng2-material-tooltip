var webpack = require('webpack');

module.exports = {
    entry: {
        app: './demo/main.ts',
        vendors: './demo/vendors.ts'
    },
    devtool: 'source-map',
    output: {
        path: __dirname + '/demo/build',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {test: /\.ts?$/, loader: 'ts-loader', exclude: /node_modules/}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};