const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Apollo Client pulls in tslib in a way Metro's resolver mishandles —
// alias it directly to the ES module build.
// https://community.apollographql.com/t/cannot-destructure-property-extends-of-tslib-default-as-it-is-undefined/9501
const ALIASES = {
  tslib: 'tslib/tslib.es6.mjs',
};

config.resolver.resolveRequest = (context, moduleName, platform) => {
  return context.resolveRequest(
    context,
    ALIASES[moduleName] ?? moduleName,
    platform
  );
};

module.exports = withNativeWind(config, { input: './global.css' });