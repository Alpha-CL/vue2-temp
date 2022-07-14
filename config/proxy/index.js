const domainMap = {
    development: 'localhost:1314',
    production: 'localhost:80'
};

const domain = domainMap[process.env.NODE_ENV];

module.exports = {
    "/api": {
        target: domain,
        // secure: false,
        // changeOrigin: true,
        // pathRewrite: {
        //     // '^/api': ''
        // },
    },
    "/download": {
        target: domain,
    }
};