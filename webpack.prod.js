const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
    externals: {
        // vue: "Vue",
        // vuex: "Vuex",
        // "vue-router": "VueRouter",
        // axios: "axios",
        // moment: "moment",
        // jquery: "jquery",
        // bootstrap: "bootstrap",
        // fullpage: "fullpage"
    }
};
