const path = require("path");
const proxy = require("./config/proxy");

module.exports = {
    devServer: {proxy},
    outputDir: path.resolve(__dirname, "./dist"),
    configureWebpack: require("./config/webpack.config"),
};