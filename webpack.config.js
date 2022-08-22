const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
//3. 导入
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    // 简易打包
    mode: 'development',
    entry: "./src/main.js", // 入口
    output: {
        path: path.join(__dirname, "lib"), // 出口路径
        filename: "index.js", // 出口文件名
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
        //4. 调用MiniCssExtractPlugin
        new MiniCssExtractPlugin()
    ],
    devServer: {
        port: 30000, // 端口号
        open: true
    },
    module: {
        rules: [ // loader的规则
            {
                test: /\.css$/, // 匹配所有的css文件
                // use数组里从右向左运行
                // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
                // 再用 style-loader 将样式, 把css插入到dom中
                // use: ["style-loader", "css-loader"]
                //5.配置样式
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/,
                // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
                use: ["style-loader", "css-loader", 'less-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ]
    }

}