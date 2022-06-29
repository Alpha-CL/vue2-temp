const path = require("path");

module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "localhost:1314",
            },
            "/download": {
                target: "localhost:80",
            }
        },
    },
    outputDir: path.resolve(__dirname, "./dist"),
    configureWebpack: require("./webpack.config"),
};


