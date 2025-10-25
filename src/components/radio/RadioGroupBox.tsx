import React, { forwardRef, PropsWithChildren } from 'react';
import { RadioGroup as ChakraRadioGroupBox } from '@chakra-ui/react';

import Tooltip from '../tooltip';
import Text from '../text';
import { InformationIcon } from '../icons';
import FormControl from '../formControl';
import Flex from '../flex';
import Divider from '../divider';
import Box from '../box';

import Radio from './index';

export interface FollowUpProps {
  id: string;
  name: string;
  options: { label: string; value: string }[];
  groupLabel: string;
  tooltip?: string;
  hint?: string;
}

export interface Props {
  id: string;
  name: string;
  values: Record<string, string>;
  onChange: (values: Record<string, string>) => void;
  options: { label?: string; value: string }[];
  groupLabel: string;
  tooltip?: string;
  errorMessage?: string;
  hint?: string;
  followUps?: Record<string, FollowUpProps>;
}

const RadioGroupBox = forwardRef<HTMLInputElement, PropsWithChildren<Props>>(
  (
    {
      name,
      values,
      onChange,
      options,
      groupLabel,
      tooltip,
      id,
      errorMessage,
      hint,
      followUps,
      children,
    },
    ref,
  ) => {
    const currentValue = values[id];

    const handleChange = (groupId: string, value: string) => {
      let newValues: Record<string, string> = {
        ...values,
        [groupId]: value,
      };

      if (followUps) {
        Object.keys(followUps).forEach((key) => {
          if (key !== value) {
            const hiddenFollowUp = followUps[key];
            newValues = { ...newValues };
            if (hiddenFollowUp?.id) {
              delete newValues[hiddenFollowUp.id];
            }
          }
        });
      }

      onChange(newValues);
    };

    return (
      <FormControl id={id} errorMessage={errorMessage}>
        <Box
          border={followUps ? '1px' : 0}
          borderColor={errorMessage ? 'red.500' : 'gray.400'}
          borderRadius="sm"
          padding={followUps ? '2xl' : 0}
        >
          <ChakraRadioGroupBox
            value={currentValue || ''}
            onChange={(value) => handleChange(id, value)}
          >
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
              {options.map(({ label, value }) =>
                children ? (
                  children
                ) : (
                  <Radio
                    key={value}
                    name={name}
                    value={value}
                    isChecked={value === currentValue}
                    ref={ref}
                    label={label}
                    isInvalid={false}
                  />
                ),
              )}
              {currentValue && followUps && followUps[currentValue] && (
                <>
                  <Divider marginY="xl" />
                  <RadioGroupBox
                    {...followUps[currentValue]}
                    values={values}
                    onChange={onChange}
                  />
                </>
              )}
            </Flex>
          </ChakraRadioGroupBox>
        </Box>
      </FormControl>
    );
  },
);
Radio.displayName = 'RadioGroupBox';

export default RadioGroupBox;
