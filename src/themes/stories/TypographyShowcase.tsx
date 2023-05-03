import React, { CSSProperties, FC } from 'react';
import { Text, useTheme } from '@chakra-ui/react';

const TypographyShowcase: FC = () => {
  const theme = useTheme();

  return (
    <>
      {Object.entries(theme.textStyles).map(([name, typography]) => {
        return (
          <Text key={name} mb="lg" style={typography as CSSProperties}>
            {name}
          </Text>
        );
      })}
    </>
  );
};

export default TypographyShowcase;
