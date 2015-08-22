var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BundleTracker = require('webpack-bundle-tracker');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var node_modules_dir = __dirname + '/node_modules';

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }
    return sources;
}

function getPublicPath() {
    if (process.env.NODE_ENV !== 'production') {
        return 'http://localhost:8080/public/';
    }
    return __dirname + '/public';
}

function getStatesFile() {
    if (process.env.NODE_ENV !== 'production') {
        return 'webpack-stats.json';
    }
    return 'webpack-stats-prod.json';
}

module.exports = {
    entry: {
        'styles': getEntrySources(['./app/styles/index.styl']),
        'app': getEntrySources(['./app/scripts/app.jsx']),
    },
    output: {
        filename: '[name].js',
        path: getPublicPath(),
        publicPath: "/public/",
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/ },
            { test: /\.styl$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader') }
        ]
    },
    resolve: {
        modulesDirectories: ['jsx', 'node_modules'],
        extensions: ['', '.js', '.jsx', '.styl'],
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new CommonsChunkPlugin({name: "common.chunk", filename: "common.chunk.js"}),
        new ExtractTextPlugin("[name].css", { allChunks: true }),
        new BundleTracker({filename: getStatesFile()}),
    ],
    devtool: 'source-map'
};
