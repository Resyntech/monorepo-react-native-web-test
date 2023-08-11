const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const watchFolders = [
  //Relative path to packages directory
  path.resolve(__dirname + '/../../node_modules'), // References `yantracker-test/node_modules`
  path.resolve(__dirname + '/../../node_modules/react-native'), // References `react-native`
  path.resolve(__dirname + '/../../node_modules/nativewind/tailwind'), // References `css`
  path.resolve(__dirname + '/../../message'), // References message
];

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
