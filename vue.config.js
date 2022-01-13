let path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './',
    outputDir: process.env.outputDir,  //根据当前启动的环境生成 生产或测试的包
    // 静态资源目录(js, css, img, fonts)
    assetsDir: 'static',
    productionSourceMap: false,//去掉打包后的map文件
    css: {
        loaderOptions: {
            // 设置 scss 公用变量文件
            sass: {
                data: `@import '~@/assets/style/common.scss';`
            }
        }
    },
    // 开发环境中的跨域配置
    devServer: {                
        port: 8080,//设置本地默认端口  选填
        proxy: {              
            '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
                target: 'http://localhost:9090',     //代理的目标地址
                changeOrigin: true,              //是否设置同源，输入是的
                pathRewrite: {                   //路径重写
                    '/api': ''                     //选择忽略拦截器里面的单词
                }
            }
        }
    },
    lintOnSave: false, //关闭eslint检查
    configureWebpack: { //添加别名
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    chainWebpack(config) {
        //这里是打包后的 依赖包大小分析
        // config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        //     {
        //         analyzerMode: 'static'
        //     }
        // ])
        // config.resolve.alias.set('@', resolve('src'));

        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true
                return options
            })
            .end()
    },
}