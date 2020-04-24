const path = require('path');

const { genWebpackConfig } = require('@nuvolo/webpack-config');
const config = genWebpackConfig({
  envPath: path.resolve('../.env'),
  servePath: path.resolve('./dist')
});

// console.log('Config entry: ' + config.entry);

// config.entry = ["@babel/polyfill", './src/index.tsx']
// config.entry = ['./src/index.jsx']

config.mode = 'development';
config.devtool = 'inline-source-map';
config.output = {
  filename: 'script.js',
  // filename: 'script.js?t=' + new Date().getTime(),
  // chunkFilename: 'script-chunk.js?t=' + new Date().getTime(),
  path: path.resolve('../src/sys_ui_script/x_nuvo_sinc_modern.app')
};

config.module.rules.push({test: /\.(ts|tsx)$/,  use: { loader: 'ts-loader'}})
// config.module.rules.push({test: /\.(js|jsx?)$/,  use: { loader: 'babel-loader'}})
// config.module.rules.push({test: /\.css$/, use: ['style-loader', 'css-loader']})
// config.module.rules.push({test: /\.css$/, use: { loader: 'style-loader'}})

// {
//   test: /\.(js|jsx)$/,
//   exclude: /node_modules/,
//   use: [
//     {
//       loader: "babel-loader"
//     }
//   ]
// },
// config.module.rules.push({
//   test: /\.(png|jpe?g|gif)$/i,
//   use: [
//     {
//       loader: 'file-loader'
//     }
//   ]
// });

// config.externals = {
//   'dhtmlxscheduler/codebase/dhtmlxscheduler.js': {
//     commonjs: 'dhtmlxscheduler/codebase/dhtmlxscheduler.js',
//     commonjs2: 'dhtmlxscheduler/codebase/dhtmlxscheduler.js',
//     amd: ['scheduler', 'Scheduler'],
//     root: ['scheduler', 'Scheduler']
//   },
//   leaflet: 'L'
// };

module.exports = config;
