const path = require("path");

const include = path.join(__dirname, "src");

module.exports = {
  entry: "./index",
  mode: "production",
  output: {
    path: path.join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "cloneDeep",
    filename: "clone-deep.umd.js"
  },
  devtool: "source-map",
  module: {
    rules: [{ test: /\.js$/, loader: "babel-loader", include }]
  }
};
