module.exports = {
     // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,
    //axios域代理，解决axios跨域问题

    devServer: {
        open: true,
        host: 'http://192.168.1.3',
        port: 8080,
        // https: false,
        // hotOnly: false,
        // proxy: 'http://127.0.0.1:8080' // 配置跨域处理,只有一个代理
        proxy: { // 配置跨域
            '/api': {
                //要访问的跨域的api的域名
                target: 'http://villa.jisapp.cn',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    }
}