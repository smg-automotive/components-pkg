import { createSystem, defaultBaseConfig } from '@chakra-ui/react';

import { sharedConfig } from './shared';

export const baseSystem = createSystem(defaultBaseConfig, sharedConfig);
