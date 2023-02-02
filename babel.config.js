module.exports = function (api) {
  api.cache(true);
  const presets = ["babel-preset-expo", ["@babel/preset-react"]];
  const plugins = [
     ["nativewind/babel"],
    "@babel/plugin-syntax-jsx",
  ];

  return {
    presets,
    plugins,
  };
};
