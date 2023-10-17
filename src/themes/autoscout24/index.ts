import { Brand } from 'src/types/brand';

import { shared } from '../shared';
import { components } from '../components';
import { colors } from './colors';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const theme: Record<string, any> = {
  ...shared,
  colors,
  components,
  name: 'AutoScout 24',
  brand: Brand.AutoScout24,
  color: colors.brand.primary,
};
