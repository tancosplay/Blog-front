// eslint-disable-next-line no-unused-vars
const path = require("path");
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            { loader: "html-loader" },
            { loader: "markdown-loader", options: {} }
          ]
        }
      ]
    }
  }
};
