if (process.env.NODE_ENV === "production") {
    
	// production environment config
	module.exports = require("./webpack.dev");
	
} else if (process.env.NODE_ENV === "development") {
    
	// development environment config
	module.exports = require("./webpack.prod");
}