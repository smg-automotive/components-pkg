module.exports = {
  branches: [
    'main',
    '+([0-9])?(.{+([0-9]),x}).x',
    {
      name: '!(+([0-9])?(.{+([0-9]),x}).x|main)',
      prerelease: `$\{ name }`,
    },
    {
      name: 'renovate/ui-dependencies',
      prerelease: `ui-dependencies`,
    },
    {
      name: 'renovate/chakra-ui',
      prerelease: `chakra-ui`,
    },
    {
      name: 'chakra-v3/root',
      prerelease: `chakra-v3`,
    },
  ],
};
