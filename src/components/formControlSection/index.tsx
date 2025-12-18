import React, { FC, PropsWithChildren } from 'react';
import {
  Box,
  FormControl as ChakraFormControl,
  Flex,
  FormErrorMessage,
} from '@chakra-ui/react';

import Tooltip from '../tooltip';
import Text from '../text';

import { InformationIcon } from '../icons';

export type Props = {
  id: string;
  errorMessage?: string;
  label?: string;
  hint?: string;
  tooltip?: string;
};

const FormControlSection: FC<PropsWithChildren<Props>> = ({
  children,
  errorMessage,
  id,
  label,
  hint,
  tooltip,
}) => {
  const isInvalid = !!errorMessage;

  return (
    <ChakraFormControl id={id} isInvalid={isInvalid}>
      <Box
        border="1px solid"
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
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </ChakraFormControl>
  );
};

FormControlSection.displayName = 'FormControlSection';

export default FormControlSection;
export { Props as FormControlSectionProps };
