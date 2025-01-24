/* eslint-disable no-console */
const { mergeJSONSync } = require('merge-json-file');

export default (fontsRoot: string) => {
  const scriptEntry = {
    scripts: {
      postinstall: `components copy-fonts --path=${fontsRoot}`,
    },
  };
  console.info('adding script to package.json');
  mergeJSONSync('./package.json', scriptEntry, {
    appendNewline: true,
    pretty: true,
  });
  console.info('package.json extended');
};
