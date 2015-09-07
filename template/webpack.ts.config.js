var path = require('path');
var webpack = require('webpack');

module.exports = {
    // エントリーポイント
    entry:{
        'main.js':'./src/main.ts'
    },
    // 出力先
    // dest: './public/js',
    // 出力するファイル名
    output: {
        filename: '[name]',
        publicPath: './public/js/'
    },
    // 依存関係
    resolve: {
        root:[path.join(__dirname, 'bower_components')],
        extensions:['', '.webpack.js', 'web.js', '.js', '.ts']
    },
    // bowerで取得したライブラリの読み込み用プラグイン
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        )
    ],
    // TypeScriptを読み込むためのloader
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
}
