module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    //if you already have other plugin just paste this lines below
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': ['./src/components'],
          '@screens': ['./src/screens'],
          '@assets': ['./src/assets'],
          '@utils': ['./src/utils'],
          '@constants': ['./src/constants'],
          '@hooks': ['./src/hooks'],
          '@navigation': ['./src/navigation'],
        },
      },
    ],
  ],
};
