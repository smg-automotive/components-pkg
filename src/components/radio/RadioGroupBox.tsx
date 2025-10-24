import React, { forwardRef } from 'react';
import { RadioGroup as ChakraRadioGroupBox } from '@chakra-ui/react';

import Tooltip from '../tooltip';
import Text from '../text';
import { InformationIcon } from '../icons';
import FormControl from '../formControl';
import Flex from '../flex';
import Box from '../box';

import Radio from './index';

export interface Props {
  id: string;
  name?: string;
  value: string;
  onChange?: (nextValue: string) => void;
  options: { label: string; value: string }[];
  groupLabel: string;
  tooltip?: string;
  errorMessage?: string;
  hint?: string;
}

const RadioGroupBox = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      onChange,
      options,
      groupLabel,
      tooltip,
      id,
      errorMessage,
      hint,
    },
    ref,
  ) => {
    return (
      <FormControl id={id} errorMessage={errorMessage}>
        <Box
          border="1px"
          borderColor={errorMessage ? 'red.500' : 'gray.400'}
          borderRadius="sm"
          padding="2xl"
        >
          <ChakraRadioGroupBox onChange={onChange}>
            <Flex flexDirection="column">
              <Box mb="lg">
                <Flex>
                  <Text color="gray.900" textStyle="heading4">
                    {groupLabel}
                  </Text>
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
              {options.map(({ label, value: optionValue }) => (
                <Radio
                  key={optionValue}
                  name={name}
                  value={optionValue}
                  size="base"
                  isChecked={optionValue === value}
                  ref={ref}
                  variant="fontRegular"
                  label={label}
                  isInvalid={false}
                />
              ))}
            </Flex>
          </ChakraRadioGroupBox>
        </Box>
      </FormControl>
    );
  },
);
Radio.displayName = 'RadioGroupBox';

export default RadioGroupBox;
