import React, { FC, PropsWithChildren } from 'react';
import { Field as ChakraField } from '@chakra-ui/react';

import { Tooltip } from '../tooltip';
import { Text } from '../text';
import { InformationIcon } from '../icons';
import { Flex } from '../flex';
import { Box } from '../box';

export type BaseProps = {
  id: string;
  errorMessage?: string;
  label?: string;
  hint?: string;
  tooltip?: string;
};

export const FormControlSection: FC<PropsWithChildren<BaseProps>> = ({
  children,
  errorMessage,
  id,
  label,
  hint,
  tooltip,
}) => {
  const isInvalid = !!errorMessage;

  return (
    <ChakraField.Root id={id} invalid={isInvalid}>
      <Box
        border="1px"
        borderRadius="sm"
        borderColor={isInvalid ? 'red.500' : 'gray.400'}
        padding="2xl"
      >
        <Flex flexDirection="column">
          <Box mb="lg">
            <Flex alignItems="center">
              {label ? (
                <Text color="gray.900" textStyle="heading4">
                  {label}
                </Text>
              ) : null}
              {tooltip ? (
                <Tooltip label={tooltip}>
                  <InformationIcon ml="md" />
                </Tooltip>
              ) : null}
            </Flex>
            {hint ? (
              <Text color="gray.900" textStyle="body">
                {hint}
              </Text>
            ) : null}
          </Box>
          {children}
        </Flex>
      </Box>
      <ChakraField.ErrorText>{errorMessage}</ChakraField.ErrorText>
    </ChakraField.Root>
  );
};

export { BaseProps as FormControlSectionProps };
