module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 16, // 1rem = 16px
      unitPrecision: 5,
      propList: ["*"],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  },
};
