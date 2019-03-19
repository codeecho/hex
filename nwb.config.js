var StatsPlugin = require('stats-webpack-plugin');

const config = {
  type: 'react-app',
  devServer: {
      disableHostCheck: true
  },
  webpack: {
      define: {
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        },
      extra: {
          plugins: [],
              module: {
        rules: [
          {
            test: [ /\.vert$/, /\.frag$/ ],
            use: 'raw-loader'
          }
        ]
    }
      }
  }
};

config.webpack.extra.plugins.push(new StatsPlugin('stats.json', {chunkModules: true}));

module.exports = config;
