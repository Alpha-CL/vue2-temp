const path = require("path");

module.exports = {
    alias: {
        "@": path.resolve(__dirname, "./src"),
        "~@": path.resolve(__dirname, "./src"),
    },
};