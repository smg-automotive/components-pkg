/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
import path from 'path';

import { destination } from '../paths';

const fs = require('fs-extra');

export default ({
  'fonts-path': destinationRoot,
  'component-path': componentPath,
}: {
  'fonts-path': string;
  'component-path': string;
}) => {
  const componentDestination = path.join(componentPath, 'Fonts.tsx');
  console.info('Creating a <Fonts /> component in', componentDestination);

  const resolvedDestination = destination(destinationRoot);
  const pathToFonts = path.relative(componentPath, resolvedDestination);

  const component = fs
    .readFileSync(path.join(__dirname, 'template.tsx.tpl'))
    .toString('utf8')
    .replace(/%fontPath%/gi, pathToFonts);

  fs.writeFileSync(componentDestination, component);

  console.info('<Fonts /> component created');
};
