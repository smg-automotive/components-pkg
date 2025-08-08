import { hideBin } from 'yargs/helpers';
import yargs from 'yargs';

import setupNextFonts from './setupNextFonts';
import setup from './setup';
import copyFonts from './copyFonts';

yargs(hideBin(process.argv))
  .command({
    command: 'setup',
    describe: 'Setup copy-fonts script and gitignore copied files',
    builder: (args: typeof yargs) =>
      args.option('path', {
        alias: 'p',
        description:
          'Path to copy fonts to, it should be public directory in your web project',
        type: 'string',
        default: 'public',
      }),
    handler: setup,
  })
  .command({
    command: 'copy-fonts',
    describe: 'Copy fonts from the package to required destination',
    builder: (args: typeof yargs) =>
      args.option('path', {
        alias: 'p',
        description: 'Path to copy fonts to',
        type: 'string',
        demandOption: 'Please specify path to copy fonts to',
      }),
    handler: copyFonts,
  })
  .command({
    command: 'setup-next-fonts',
    describe: 'Generate a component to load fonts with @next/fonts',
    builder: (args: typeof yargs) =>
      args
        .option('component-path', {
          alias: 'cp',
          description:
            'Path to save the generated component, relative to the current working directory',
          type: 'string',
          demandOption: 'Please specify where to save the component',
        })
        .option('fonts-path', {
          alias: 'fp',
          description: 'Path where fonts are copied to',
          type: 'string',
          demandOption: 'Please specify fonts path',
        }),
    handler: setupNextFonts,
  })
  .help()
  .demandCommand()
  .alias('help', 'h')
  .parse();
