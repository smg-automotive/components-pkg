import React, { FC } from 'react';
import { Button, useTheme } from '@chakra-ui/react';

type Props = {
  name: string;
};

const BorderRadiusShowcase: FC<Props> = ({ name }) => {
  const theme = useTheme();
  return (
    <Button
      background={theme.colors.brand.primary}
      size="lg"
      borderRadius={theme.borderRadius[name]}
    >
      {name}
    </Button>
  );
};

export default BorderRadiusShowcase;
