const {
  createSystem,
  defaultBaseConfig,
  mergeConfigs,
} = require('@chakra-ui/react');

const { autoScout24Config, motoScout24Config } = require('../cjs/themes.js');

module.exports = createSystem(
  defaultBaseConfig,
  mergeConfigs(autoScout24Config, motoScout24Config),
  { preflight: true },
);
