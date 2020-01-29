
const {CleanWebpackPlugin:CLEAN} = require('clean-webpack-plugin')
const HTML = require('html-webpack-plugin')
const path = require('path')

const load = name => name + '-loader'

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new CLEAN(),
        new HTML({
            title: 'Webpack Teaching',
            template: './src/template.ejs'
        })
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    load('style'),
                    {loader: load('css'), options: { sourceMap: true }},
                    load('sass')
                ]
            },
            {
                test: /\.jpe?g$/i,
                use: load('file')
            }
        ]
    }
}