import React, { FC, ReactNode } from 'react';
import { Progress } from '@chakra-ui/react';

import Text from 'src/components/text';
import Stack from 'src/components/stack';
import { CheckmarkCircleIcon } from 'src/components/icons';

export interface UploadProgressProps {
  current: number;
  max: number;
  label: (current: number, max: number) => ReactNode;
}

const UploadProgress: FC<UploadProgressProps> = ({ current, max, label }) => {
  const validMax = Math.max(max, 1);
  const validCurrent = Math.max(0, Math.min(current, validMax));
  const isComplete = validCurrent >= validMax;

  return (
    <>
      <Progress
        value={validCurrent}
        max={validMax}
        h="0.5rem"
        borderRadius="lg"
        bg="gray.50"
        sx={{
          '& > div': {
            backgroundColor: 'gray.900',
          },
        }}
      />
      <Stack direction="row" spacing="xs" align="center" marginTop="sm">
        {isComplete && <CheckmarkCircleIcon color="green.400" />}
        <Text textStyle="body">{label(validCurrent, max)}</Text>
      </Stack>
    </>
  );
};

export default UploadProgress;
