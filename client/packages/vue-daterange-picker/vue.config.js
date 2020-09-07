const path = require('path'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        config: {
          // Fixed postcss configuration location inside monorepos
          path: path.join(__dirname, 'postcss.config.js'),
        },
      },
    },
  },
  chainWebpack: config => {
    config.module.rule('pug')
      .oneOf('pug-vue')
      .use('pug-plain-loader')
        .loader('pug-plain-loader')
  }
};
