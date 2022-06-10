import setup from './setup';
import copyFonts from './copy-fonts';

/* eslint-disable @typescript-eslint/no-var-requires */
const yargs = require('yargs');

yargs
  .command({
    command: 'setup',
    desc: 'Setup copy-fonts script and gitignore copied files',
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
    desc: 'Copy fonts from the package to required destination',
    builder: (args: typeof yargs) =>
      args.option('path', {
        alias: 'p',
        description:
          'Path to copy fonts to, it should be public directory in your web project',
        type: 'string',
        demandOption: 'Please specify path to copy fonts to',
      }),
    handler: copyFonts,
  })
  .help()
  .demandCommand()
  .alias('help', 'h')
  .parse();
