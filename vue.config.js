// vue脚手架项目 - 默认的配置文件名
const CompressionWebpackPlugin = require("compression-webpack-plugin")

// webpack+node环境 - 导出配置对象
module.exports = {
    configureWebpack: {
        plugins: [
            new CompressionWebpackPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp('\\.(js|css)$'),
                threshold: 10240,
                minRatio: 0.8
            })
        ]
    },
    devServer: {
        port: 3000,
        open: true // 浏览器自动打开
    },
    lintOnSave: false // 关闭eslint检查
}