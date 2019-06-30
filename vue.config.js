const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);


module.exports = {
    outputDir: "dist",
    indexPath: "./index.html",
    chainWebpack: config => {
        // set other name
        config.resolve.alias
          .set("@", resolve("src"));
        // set i18n loader
        // vue-loader version should > v15.0.0
        config.module
          .rule("i18n")
          .resourceQuery(/blockType=i18n/)
          .type('javascript/auto')
          .use("i18n")
          .loader("@kazupon/vue-i18n-loader")
          .end();
    }
}