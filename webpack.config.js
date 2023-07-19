const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
              { from: "img/", to: path.resolve(__dirname, 'dist/img') },
              { from: "audio/", to: path.resolve(__dirname, 'dist/audio') }
            ],
          }),
          new MiniCssExtractPlugin({
            filename: 'bundle.css',
          }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {},
                    },
                    "css-loader",
                    "sass-loader"
                  ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {},
                    },
                    "css-loader",
                  ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|mp3|mpe?g)$/i,
                use: ['file-loader']
              },
        ]
    }
}