import React, { FC, ReactNode } from 'react';
import { Progress } from '@chakra-ui/react';

import { Text } from 'src/components/text';
import { Stack } from 'src/components/stack';
import { CheckmarkCircleIcon } from 'src/components/icons';

export interface UploadProgressProps {
  current: number;
  max: number;
  label: ReactNode;
}

export const UploadProgress: FC<UploadProgressProps> = ({
  current,
  max,
  label,
}) => {
  const validMax = Math.max(max, 1);
  const validCurrent = Math.max(0, Math.min(current, validMax));
  const percentage = (validCurrent / validMax) * 100;
  const isComplete = validCurrent === validMax && validMax > 0;

  return (
    <>
      <Progress.Root value={percentage}>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
      <Stack direction="row" gap="xs" align="center" marginTop="sm">
        {isComplete && <CheckmarkCircleIcon color="green.400" />}
        <Text textStyle="body">{label}</Text>
      </Stack>
    </>
  );
};
