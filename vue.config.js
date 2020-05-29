// module.exports = {
//     publicPath:'./', // 修改基础路径 
//     lintOnSave: false, // 保存代码时  忽略eslint

//     devServer: {
//         // open: true,
//         // host: '0.0.0.0',
//         // port: 8080,
//         // https: false,
//         // hotOnly: false,
        
//         proxy: {
//             // 只对本地开发起作用
//             "^/api": {
//                 target: "https://www.easy-mock.com/mock/5bf0ee68643497494c87d289", // 我们要转接到的域
//                 ws: true, // 默认true
//                 changeOrigin: true, // 是否改变域
//                 pathRewrite: {// 路径重写
//                     // "^/api": "/mock/5bf0ee68643497494c87d289/api", 
//                     // // "^/qqq": "/mock/5bf0ee68643497494c87d289/qqq", 
//                     // 假如我们的访问路径是以 /api开头的； 同意转到了/mock/24076/api 这个路径
//                     // "^/bannerList": "/mock/5bf0ee68643497494c87d289/bannerList" // rewrite path
//                     //http://yapi.demo.qunar.com/qqq/bannerList
//                     // localhost:8080/api/bannerList
//                     //https://www.easy-mock.com/mock/5bf0ee68643497494c87d289/api/bannerList
//                 }
//             }
//         }
//     }
// };

const path = require('path');
 
function resolve(dir) {
  return path.join(__dirname, dir)
}
 
// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'axios': 'axios',
  'ELEMENT': 'element-ui'
}
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']
 
module.exports = {
  publicPath: '/book/', //基本路径
  outputDir: 'dist',
  productionSourceMap: false,
  assetsDir: 'static',
  filenameHashing: true,
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html", // 这里用来区分加载那个 html
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  // 高级的方式
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
      // config.externals = externals
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        }),
      //   new UglifyJsPlugin({
      //     uglifyOptions: {
      //       compress: {
      //         warnings: false,
      //         drop_debugger: true,
      //         drop_console: true,
      //       },
      //     },
      //     sourceMap: false,
      //     parallel: true,
      //   }),
      );
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
      config.plugins.push(new BundleAnalyzerPlugin());
    }
  },
  // CSS 相关选项
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {}, // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    modules: false
  },
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,
  // PWA 插件的选项。
  pwa: {},
  // 配置 webpack-dev-server 行为。
  devServer: {
    port: 3001,
    open: true,
    proxy: 'http://localhost:8080'
  },
  
  // 第三方插件的选项
  pluginOptions: {}
}