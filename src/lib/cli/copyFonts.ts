/* eslint-disable no-console */
import { destination, source } from './paths';

const fs = require('fs-extra');

export default ({ path: destinationRoot }: { path: string }) => {
  const resolvedDestination = destination(destinationRoot);

  console.info('copying fonts from the package to', resolvedDestination);
  fs.copySync(source, resolvedDestination);
  console.info('fonts copied');
};
