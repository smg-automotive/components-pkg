module.exports = {
  branches: [
    'main',
    '+([0-9])?(.{+([0-9]),x}).x',
    {
      name: '!(+([0-9])?(.{+([0-9]),x}).x|main)',
      prerelease: `$\{ name }-${process.env.CIRCLE_SHA1}`,
    },
  ],
};
