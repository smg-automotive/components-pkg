import yargs from 'yargs';
import path from 'path';
import { copySync } from 'fs-extra';

const argv = yargs
  .option('path', {
    alias: 'p',
    description:
      'Path to copy fonts to, it should be public directory in your web project',
    type: 'string',
    demandOption: 'Please specify path to copy fonts to',
  })
  .help()
  .alias('help', 'h').argv;

const source = path.resolve(__dirname, '../assets/fonts');
const destination = path.resolve(argv.path, 'assets/fonts');

copySync(source, destination);
