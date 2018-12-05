const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const cssLoaderConfig = {
    importLoaders: 1,
    localIdentName: "[name]--[local]--[hash:base64:8]",
    modules: true
};

module.exports = merge(common, {
    mode: 'development',

    output: {
        filename: 'assets/bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, 'src/template.html'),
            variables: {
                environment: 'development',
                release: 'local',
            },
        }),
        new ForkTsCheckerWebpackPlugin()
    ],

    resolve: {
        symlinks: false,
    },

    devServer: {
        port: 3000,
        host: '0.0.0.0',
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        disableHostCheck: true,
        progress: true,
        overlay: true,
        clientLogLevel: 'error',
        index: 'index.html',
        historyApiFallback: true,

        stats: {
            warningsFilter: /export .* was not found in/
        }
    },

    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ],
                exclude: '/node_modules'
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: cssLoaderConfig
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: cssLoaderConfig
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    }
});