
module.exports = {
	entry: {
		app: ["./src/entry.js"]
    },
	output: {
        filename: "./output/app.js"
	},
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {
					  presets: ['es2015', 'react']
				}
			}
		]
	}
};
