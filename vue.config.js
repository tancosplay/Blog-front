// eslint-disable-next-line no-unused-vars
const path = require("path");
module.exports = {
  configureWebpack: {
    devServer: {
      proxy: 'http://1.12.249.224:8099/user'
    },
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
