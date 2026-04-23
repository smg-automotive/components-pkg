import { hideBin } from 'yargs/helpers';
import yargs from 'yargs';

import setupNextFonts from './setupNextFonts';
import setup from './setup';
import copyFonts from './copyFonts';

type PathArgs = {
  path: string;
};

type SetupNextFontsArgs = {
  componentPath: string;
  fontsPath: string;
};

yargs(hideBin(process.argv))
  .command<PathArgs>({
    command: 'setup',
    describe: 'Setup copy-fonts script and gitignore copied files',
    builder: {
      path: {
        alias: 'p',
        description:
          'Path to copy fonts to, it should be public directory in your web project',
        type: 'string',
        default: 'public',
      },
    },
    handler: ({ path }) => setup({ path }),
  })
  .command<PathArgs>({
    command: 'copy-fonts',
    describe: 'Copy fonts from the package to required destination',
    builder: {
      path: {
        alias: 'p',
        description: 'Path to copy fonts to',
        type: 'string',
        demandOption: 'Please specify path to copy fonts to',
      },
    },
    handler: ({ path }) => copyFonts({ path }),
  })
  .command<SetupNextFontsArgs>({
    command: 'setup-next-fonts',
    describe: 'Generate a component to load fonts with @next/fonts',
    builder: {
      'component-path': {
        alias: 'cp',
        description:
          'Path to save the generated component, relative to the current working directory',
        type: 'string',
        demandOption: 'Please specify where to save the component',
      },
      'fonts-path': {
        alias: 'fp',
        description: 'Path where fonts are copied to',
        type: 'string',
        demandOption: 'Please specify fonts path',
      },
    },
    handler: ({ componentPath, fontsPath }) =>
      setupNextFonts({
        'component-path': componentPath,
        'fonts-path': fontsPath,
      }),
  })
  .help()
  .demandCommand()
  .alias('help', 'h')
  .parse();
