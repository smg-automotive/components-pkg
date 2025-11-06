import React, { forwardRef, PropsWithChildren } from 'react';

import FormControlSection from '../formControlSection';
import Flex from '../flex';
import Divider from '../divider';

import Radio from './index';
import { RadioGroup as ChakraRadioGroup } from '.';

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
  options: TOptions;
  groupLabel: string;
  tooltip?: string;
  errorMessage?: string;
  hint?: string;
  followUps?: Partial<Record<TOptions[number]['value'], FollowUpProps>>;
  recurring?: boolean;
};

const QuestionWithFollowUp = forwardRef<
  HTMLInputElement,
  PropsWithChildren<Props>
>(
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
      recurring,
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
      <FormControlSection
        id={id}
        errorMessage={errorMessage}
        label={groupLabel}
        hint={hint}
        tooltip={tooltip}
        recurring={recurring}
      >
        <ChakraRadioGroup
          value={currentValue || ''}
          onChange={(value) => handleChange(id, value)}
        >
          <Flex flexDirection="column">
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
                <QuestionWithFollowUp
                  {...followUps[currentValue]}
                  values={values}
                  onChange={onChange}
                  recurring={true}
                />
              </>
            ) : null}
          </Flex>
        </ChakraRadioGroup>
      </FormControlSection>
    );
  },
);
Radio.displayName = 'QuestionWithFollowUp';

export default QuestionWithFollowUp;
