const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        app: ['./app/react-datez.js']
    },
    output: {
        filename: 'js/react-datez.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader?importLoaders=1', 'postcss-loader']
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('css/reactDatez.css')
    ]
}