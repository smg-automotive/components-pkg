import React, { CSSProperties, FC } from 'react';
import { Text, useTheme } from '@chakra-ui/react';

const TypographyShowcase: FC = () => {
  const theme = useTheme();

  return (
    <>
      {Object.entries(theme.typography).map(([name, typography]) => {
        return (
          <Text key={name} mb={5} style={typography as CSSProperties}>
            {name}
          </Text>
        );
      })}
    </>
  );
};

export default TypographyShowcase;
