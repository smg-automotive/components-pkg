import {
  createSystem,
  defaultBaseConfig,
  mergeConfigs,
} from '@chakra-ui/react';

import { motoScout24Config } from './motoScout24';
import { autoScout24Config } from './autoScout24';

const typegenSystem = createSystem(
  defaultBaseConfig,
  mergeConfigs(autoScout24Config, motoScout24Config),
  { preflight: true },
);

export default typegenSystem;
