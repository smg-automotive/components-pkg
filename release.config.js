module.exports = {
  branches: [
    'main',
    '+([0-9])?(.{+([0-9]),x}).x',
    {
      name: '!(+([0-9])?(.{+([0-9]),x}).x|main)',
      prerelease: `$\{ name }-${process.env.CIRCLE_SHA1}`,
    },
    {
      name: 'renovate/ui-dependencies',
      prerelease: `ui-dependencies-${process.env.CIRCLE_SHA1}`,
    },
    {
      name: 'renovate/chakra-ui',
      prerelease: `chakra-ui-${process.env.CIRCLE_SHA1}`,
    },
  ],
};
