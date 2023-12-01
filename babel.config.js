module.exports = {
  presets: [
    'babel-preset-expo',
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
  plugins: ["@babel/plugin-transform-flow-strip-types", 'expo-router/babel']
};
