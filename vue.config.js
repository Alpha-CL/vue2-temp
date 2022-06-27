const path = require("path");

module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:80",
            },
            "/download": {
                target: "http://localhost:80",
            }
        },
    },

    outputDir: path.resolve(__dirname, "./dist"),
    configureWebpack: require("./webpack.config"),
};


