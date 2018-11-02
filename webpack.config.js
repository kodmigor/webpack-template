const path = require(`path`);
const ExtractTextPlugin = require(`extract-text-webpack-plugin`);

const config = {
    entry: `./src/index.js`,
    output: {
        path: path.resolve(__dirname, `./dist`),
        filename: `main.js`,
        publicPath: "/dist"
    },
    devtool: `eval-sourcemap`,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: `babel-loader`
                },
                exclude: `/node_modules/`
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    // fallback: "style-loader",
                    use: "css-loader"
                })
                // use: [`style-loader`, `css-loader`]
            }
        ]
    },
    plugins: [new ExtractTextPlugin("style.css")]
};

module.exports = (env, options) => {
    const production = options.mode === `production`;
    config.devtool = production ? `source-map` : `eval-source-map`;

    return config;
};
