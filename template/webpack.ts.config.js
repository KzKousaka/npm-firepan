var path = require('path');
var webpack = require('webpack');

module.exports = {
    // Entry Position
    entry:{
        'main.js':'./src/main.ts'
    },

    output: {
        filename: '[name]',
        publicPath: './public/js/'
    },
    // Dependency
    resolve: {
        root:[path.join(__dirname, 'bower_components')],
        extensions:['', '.webpack.js', 'web.js', '.js', '.ts']
    },
    // bower-plugin
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        )
    ],
    // ts-loader
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
}
