const version = require('./version.json');
const constants = require('./app-constants.json');

export default {
  expo: {
    name: constants.appName,
    slug: constants.slug,
    version: version.version,
    description: '',
    scheme: constants.scheme,
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    splash: {
      image: './assets/images/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: constants.iosBundleId,
      buildNumber: version.iosBuildNumber.toString(),
    },
    android: {
      versionCode: version.androidVersionCode,
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: constants.androidPackage,
      edgeToEdgeEnabled: true,
    },
    web: {
      favicon: './assets/images/favicon.png',
      bundler: 'metro',
    },
    plugins: [
      'expo-router',
      [
        'react-native-google-mobile-ads',
        {
          androidAppId: '',
        },
      ],
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
      'expo-font',
      'expo-build-properties',
    ],
    experiments: {
      typedRoutes: true,
    },
    packagerOpts: {
      config: 'metro.config.js',
      sourceExts: [
        'expo.ts',
        'expo.tsx',
        'expo.js',
        'expo.jsx',
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'wasm',
        'svg',
      ],
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: '',
      },
    },
    owner: 'rishim777',
  },
};
