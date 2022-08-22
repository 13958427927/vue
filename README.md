## Uncaught SyntaxError: Cannot use import statement outside a module(at index.js:4:1)

at index.js 在index.js文件里报错了

:4:1  4行号 1:列数



## webpack的使用流程

yarn的下载速度快, npm比较慢

npm i yarn -g



1. 在项目中使用包: 一定要有package.json文件  npm init -y
2. 下载webpack     yarn add webpack webpack-cli 
   - webpack-cli  cli==> command-line-interface  

## HTML-WEBPACK-PLUGIN

1. yarn add html-webpack-plugin 
2. const HtmlWebpackPlugin = require('html-webpack-plugin')





lock文件

package.json有什么作用?
> 记录这个项目下了哪些包?

lock文件的作用
> 更详细的记录项目用到了那些包, 以及包的信息

如果说你使用npm作为包管理管局
生成的lock文件叫: package-lock.json

如果说你使用yarn作为包管理工具
生成的lock文件叫: yarn.lock