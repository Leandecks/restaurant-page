const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(scss|css)/,
                use: [MiniCssExtractPlugin.loader, "css-home"]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
});