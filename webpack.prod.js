const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const cssLoaderConfig = {
    importLoaders: 1,
    modules: true
};

module.exports = merge(common, {
    mode: 'production',

    output: {
        filename: 'assets/bundle.[chunkhash].js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, 'src/template.html'),
            variables: {
                environment: 'production',
            },
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false,
            checkSyntacticErrors: true,
        }),
    ],

    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: [
                    'thread-loader',
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            happyPackMode: true,
                        },
                    },
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