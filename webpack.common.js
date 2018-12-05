const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',

    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/'
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /moment[\/\\]locale$/,
            /(nl|en)$/
        )
    ],

    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.css',
            '.scss'
        ],
        modules: [
            path.resolve(__dirname),
            'node_modules',
        ]
    },

    /**
     * Suppresses TypeScript warnings when using ts-loader
     * with transpileOnly set to true. According to the ts-loader
     * GitHub page, the warnings generated here are harmless.
     */
    stats: {
        warningsFilter: /export .* was not found in/
    },

    module: {
        rules: [
            {
                test: /\.svg$|\.png$|\.gif$|\.jpe?g$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/images/[name]-[hash:base64:8].[ext]'
                    }
                }],
                exclude: path.resolve(__dirname, 'src/Resources/Icons')
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/fonts/[name]-[hash:base64:8].[ext]'
                    }
                }]
            },

            // Load the manifest.json file
            {
                type: 'javascript/auto',
                test: /\.json$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[name].[ext]'
                    }
                }],
                include: path.resolve(__dirname, 'src/Resources')
            },

            // Load the favicon and app icons used in manifest.json
            {
                test: /\.png$|\.ico$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/icons/[name].[ext]'
                    }
                }],
                include: path.resolve(__dirname, 'src/Resources/Icons')
            }
        ]
    }
};