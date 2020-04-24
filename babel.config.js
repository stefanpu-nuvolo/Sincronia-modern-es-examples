module.exports = {
    ignore: [
        /\/node_modules\//,
    ],
    presets: [
        ["@babel/preset-env", {
            // modules: false,
            // forceAllTransforms: true,
            useBuiltIns: "usage", targets: { ie: "10" }, corejs: { version: 3 } 
        }], 
        "@babel/preset-typescript"
    ],
    plugins: [
      //   "@sincronia/remove-modules",
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread"
    ]
  };
  

