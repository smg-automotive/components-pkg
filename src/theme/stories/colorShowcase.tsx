import React, { FC } from 'react';
import { ColorItem } from '@storybook/addon-docs';
import { useTheme } from '@chakra-ui/react';

type Props = {
  name: string;
  title?: string;
};

const ColorShowcase: FC<Props> = ({ name, title }) => {
  const theme = useTheme();

  const nameToShow = name.charAt(0).toUpperCase() + name.slice(1);

  const colors =
    typeof theme.colors[name] === 'string'
      ? { [name]: theme.colors[name] }
      : {
          [`${name}-50`]: theme.colors[name][50],
          [`${name}-100`]: theme.colors[name][100],
          [`${name}-200`]: theme.colors[name][200],
          [`${name}-300`]: theme.colors[name][300],
          [`${name}-400`]: theme.colors[name][400],
          [`${name}-500`]: theme.colors[name][500],
          [`${name}-600`]: theme.colors[name][600],
          [`${name}-700`]: theme.colors[name][700],
          [`${name}-800`]: theme.colors[name][800],
          [`${name}-900`]: theme.colors[name][900],
        };

  return (
    <ColorItem
      title={title || nameToShow}
      subtitle={title ? nameToShow : ''}
      colors={colors}
    />
  );
};

export default ColorShowcase;
