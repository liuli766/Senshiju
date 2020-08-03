module.exports = {

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