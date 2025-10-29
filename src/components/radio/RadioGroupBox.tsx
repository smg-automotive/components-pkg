import React, { forwardRef, PropsWithChildren } from 'react';

import Tooltip from '../tooltip';
import Text from '../text';
import { RadioGroup as ChakraRadioGroupBox } from '../radio';
import { InformationIcon } from '../icons';
import FormControl from '../formControl';
import Flex from '../flex';
import Divider from '../divider';
import Box from '../box';

import Radio from './index';

export type FollowUpProps = {
  id: string;
  name: string;
  options: { label: string; value: string }[];
  groupLabel: string;
  tooltip?: string;
  hint?: string;
};

export type Option = { label: string; value: string };

export type Props<TOptions extends readonly Option[] = Option[]> = {
  id: string;
  name: string;
  values: Record<string, string>;
  onChange: (values: Record<string, string>) => void;
  options: { label: string; value: string }[];
  groupLabel: string;
  tooltip?: string;
  errorMessage?: string;
  hint?: string;
  followUps?: Partial<Record<TOptions[number]['value'], FollowUpProps>>;
};

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
    },
    ref,
  ) => {
    const currentValue = values[id];

    const handleChange = (groupId: string, value: string) => {
      const newValues = { ...values, [groupId]: value };

      if (followUps) {
        for (const [key, followUp] of Object.entries(followUps)) {
          if (!followUp) continue;
          if (key !== value && followUp.id in newValues) {
            delete newValues[followUp.id];
          }
        }
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
              {options.map(({ label, value }) => (
                <Radio
                  key={value}
                  name={name}
                  value={value}
                  isChecked={value === currentValue}
                  ref={ref}
                  label={label}
                  isInvalid={false}
                />
              ))}
              {followUps?.[currentValue] ? (
                <>
                  <Divider marginY="xl" />
                  <RadioGroupBox
                    {...followUps[currentValue]}
                    values={values}
                    onChange={onChange}
                  />
                </>
              ) : null}
            </Flex>
          </ChakraRadioGroupBox>
        </Box>
      </FormControl>
    );
  },
);
Radio.displayName = 'RadioGroupBox';

export default RadioGroupBox;
