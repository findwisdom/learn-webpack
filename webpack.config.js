/**
 * Created by Administrator on 2016/11/27.
 */
var path =require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

//定义一些文件夹路径

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH =path.resolve(ROOT_PATH,'app');
var BUILD_PATH =path.resolve(ROOT_PATH,'build');

module.exports = {
    //项目文件夹，可以直接用文件夹名称 默认会找到index.js
    entry:APP_PATH,
    //输出的文件名 合并后的js 会命名为build.js
    output:{
        path:BUILD_PATH,
        filename:'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css' ,'sass'],
                include: APP_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            }
        ]
    },
    plugins:[
        new HtmlwebpackPlugin({
            title: 'hello world'
        })
    ]
};
