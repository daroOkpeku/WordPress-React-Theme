const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
  ...defaultConfig,
  externals: {},
  module: {
    ...defaultConfig.module,
    rules: defaultConfig.module.rules.map((rule) => {
      if (rule.test && rule.test.toString().includes("jsx")) {
        return {
          ...rule,
          options: {
            ...rule.options,
            presets: [["@babel/preset-react", { runtime: "automatic" }]],
          },
        };
      }
      return rule;
    }),
  },
};
