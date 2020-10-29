module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      unitToConvert: "px", // 默认值`px`，需要转换的单位
      viewportWidth: 375,//视窗的宽度，对应的是我们设计稿的宽度(750，高清屏实际375)
      viewportHeight: 667, // 视窗的高度，根据375设备的宽度来指定，一般指定667，也可以不配置
      unitPrecision: 5,//指定`px`转换为视窗单位值的小数位数，默认是5(很多时候无法整除)
      viewportUnit: 'vw',//指定需要转换成的视窗单位，建议使用vw
      fontViewportUnit: 'vw', //指定字体需要转换成的视窗单位，默认vw;
      selectorBlackList: ['.ignore'],//指定不转换为视窗单位的类 
      minPixelValue: 1,// 小于或等于`1px`不转换为视窗单位
      mediaQuery: false,// 允许在媒体查询中转换`px`，默认false
      exclude:[/TabBar/], //忽略指定文件，可以是数组/正则，数组里也需要用正则.
    }
  }
}