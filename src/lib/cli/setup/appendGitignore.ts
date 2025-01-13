/* eslint-disable no-console */
const fs = require('fs-extra');

export default (pathToIgnore: string) => {
  console.info('adding', pathToIgnore, 'to .gitignore');
  fs.appendFileSync('./.gitignore', pathToIgnore);
  console.info('.gitignore extended');
};
