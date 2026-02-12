import { SystemConfig } from '@chakra-ui/react';

import { autoScout24System } from 'src/themes';

type Token = keyof NonNullable<NonNullable<SystemConfig['theme']>['tokens']>;

export const tokenControl = ({
  name: arg,
  token,
}: {
  name: string;
  token: Token;
}) => {
  return {
    [arg]: {
      control: { type: 'select' },
      options: Object.keys(
        autoScout24System._config.theme?.tokens?.[token] || {},
      ),
      if: {
        arg,
        exists: true,
      },
    },
  };
};
