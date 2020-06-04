const path = require('path');
const webpack = require('webpack');

module.exports = {
    //it will be our start point where webpack would build a tree for us
  entry :"./src/client/index.js",
  module : {
      rules : [
          {
              //in this case we're looking for anything ends by .js
            test:'/\.js$/',
            exclude : /node_module/,
            loader:"babel-loader"

          }
      ]

  },
}