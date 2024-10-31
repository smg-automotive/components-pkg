import { createSystem, defaultBaseConfig } from '@chakra-ui/react';

import { motoScout24Config } from './motoScout24';
import { autoScout24Config } from './autoScout24';

export const autoScout24System = createSystem(
  defaultBaseConfig,
  autoScout24Config,
);

export const motoScout24System = createSystem(
  defaultBaseConfig,
  motoScout24Config,
);

export { breakpoints } from './shared';
