import React, { FC, ReactNode } from 'react';
import { Progress as ChakraProgress } from '@chakra-ui/react';

import Text from 'src/components/text';
import Stack from 'src/components/stack';
import { CheckmarkCircleIcon } from 'src/components/icons';

export interface ProgressProps {
  current: number;
  max: number;
  label: (current: number, max: number) => ReactNode;
}

const Progress: FC<ProgressProps> = ({ current, max, label }) => {
  const validMax = Math.max(max, 1);
  const validCurrent = Math.max(0, Math.min(current, validMax));
  const isComplete = validCurrent >= validMax;

  return (
    <>
      <ChakraProgress
        value={validCurrent}
        max={validMax}
        aria-label={label(validCurrent, max) as string}
      />
      <Stack direction="row" spacing="xs" align="center" marginTop="sm">
        {isComplete && <CheckmarkCircleIcon color="green.400" />}
        <Text textStyle="body">{label(validCurrent, max)}</Text>
      </Stack>
    </>
  );
};

export default Progress;
