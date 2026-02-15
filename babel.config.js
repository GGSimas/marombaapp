module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
          '@domain': './src/domain',
          '@hooks': './src/hooks',
          '@components': './src/presentation/components',
          '@screens': './src/presentation/screens',
          '@services': './src/services',
        },
      },
    ],
  ],
};
