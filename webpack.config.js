const path = require('path');
const colors = require('colors');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Need this plugin to fail webpack build on ts errors
// https://stackoverflow.com/questions/54675587/babel-typescript-doesnt-throw-errors-while-webpack-build
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const sourceDir = 'src';
const dist = 'www';

/* 
  'cordova build ios' will not stop build if there are typescript errors.
  This homemade plugin fails the webpack process. 
  Then 'cordova-plugin-webpack' fails the cordova build.

*/
class StopCordovaBuildOnErrorPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('StopCordovaBuildOnErrorPlugin', stats => {
      if (stats && stats.hasErrors()) {
        stats.toJson().errors.forEach(err => {
          console.error(err.red);
        });
        console.log('** CORDOVA BUILD FAILED **');
        process.exit(1);
      }
    });
  }
}

module.exports = {
  // entry: `./${sourceDir}/index.js`,
  // mode: 'development',
  // bail: true,
  // output: {
  //   filename: 'main.js',
  //   path: path.resolve(__dirname, dist)
  // },
  // devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: path.join(__dirname, dist),
  //   compress: true,
  //   port: 9003,
  //   host: 'localhost'
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: `./${sourceDir}/index.html`
  //   }),
  //   new CopyPlugin([
  //     {
  //       from: `${sourceDir}/certificates`,
  //       to: 'certificates'
  //     },
  //     {
  //       from: `${sourceDir}/img`,
  //       to: 'img'
  //     },
  //     /*
  //       $IonicModal uses 'fromTemplateUrl'  method, 
  //       which receives templateUrl as first argument.
  //       The angularjs-template-loader for webpack does not handle that case, 
  //       so templates are not found. Solution is to copy the templates as static directory
  //     */
  //     {
  //       from: `${sourceDir}/templates/modals`,
  //       to: 'templates/modals'
  //     },
  //     {
  //       from: `${sourceDir}/css/style_widgets.css`,
  //       to: 'css'
  //     }
  //   ]),
  //   new StopCordovaBuildOnErrorPlugin(),
  //   new ForkTsCheckerWebpackPlugin({
  //     tsconfig: path.resolve(__dirname, './tsconfig.json')
  //   })
  // ],
  // resolve: {
  //   modules: [path.resolve(__dirname, sourceDir), 'node_modules'],
  //   alias: {
  //     translationKeys: path.resolve(
  //       __dirname,
  //       `./${sourceDir}/js/translationKeys/translationKeys`
  //     )
  //   },
  //   extensions: ['.tsx', '.ts', '.jsx', '.js']
  // },
  module: {
    rules: [
      // {
      //   loader: 'prettier-loader',
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   include: path.resolve(__dirname, sourceDir)
      // },
      /* 
        eslint loader must be before code transforming loaders(like babel and typescript), 
        because we want to lint our source code before the a loader transpiles it.
      */
      // {
      //   // run before normal loaders
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   include: [path.resolve(__dirname, sourceDir)],
      //   exclude: [
      //     '/node_modules/',
      //     path.resolve(__dirname, sourceDir + '/lib/')
      //   ],
      //   loader: 'eslint-loader',
      //   options: {
      //     formatter: 'compact',
      //     emitWarning: true
      //     //   outputReport: {
      //     //     filePath: 'esLintReport.html',
      //     //     formatter: 'html'
      //     //   }
      //   }
      // },
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: [
          // Excluding node_modules fails the typechecks, as mentioned here:
          // https://github.com/babel/babel/issues/9306
          /node_modules/,
          // path.resolve(__dirname, sourceDir + '/lib/')
        ],
        loader: 'babel-loader'
      },
      // {
      //   test: /\.js$/,
      //   /* 
      //       These external libs use $templateCache to load template strings direclty,
      //       so they do not need to run through the loader
      //   */
      //   exclude: [/ionic-durationpicker\.js$/, /ion-datetime-picker\.min\.js$/],
      //   use: [
      //     {
      //       loader: 'angularjs-template-loader',
      //       options: {
      //         relativeTo: path.resolve(__dirname, sourceDir)
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: 'raw-loader',
      //       options: {
      //         esModule: false
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.css$/i,
      //   exclude: [/style_widgets\.css$/i, /ion-datetime-picker\.min\.\.css$/i],
      //   use: ['style-loader', 'css-loader']
      // },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'fonts/'
      //       }
      //     }
      //   ]
      // }
    ]
  }
};
