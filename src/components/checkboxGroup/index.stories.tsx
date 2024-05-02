import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import CheckboxGroup, { type CheckboxGroupProps } from './index';

const Template = (props: CheckboxGroupProps) => {
  const [args, updateArgs] = useArgs<CheckboxGroupProps>();

  const uncheckAll = () =>
    updateArgs({
      checkboxes: args.checkboxes?.map((checkbox) => ({
        ...checkbox,
        isChecked: false,
      })),
    });
  const checkAll = () =>
    updateArgs({
      checkboxes: args.checkboxes?.map((checkbox) => ({
        ...checkbox,
        isChecked: true,
      })),
    });
  const allChecked = args.checkboxes?.every((checkbox) => checkbox.isChecked);
  const isIndeterminate =
    args.checkboxes?.some((checkbox) => checkbox.isChecked) && !allChecked;
  return (
    <CheckboxGroup
      {...{
        ...props,
        ...args,
      }}
      isChecked={allChecked}
      isIndeterminate={isIndeterminate}
      onChange={(e) => {
        args.onChange?.(e);
        if (allChecked) {
          uncheckAll();
        } else {
          checkAll();
        }
      }}
      checkboxes={args.checkboxes?.map((checkbox, index) => ({
        ...checkbox,
        onChange: (e) => {
          checkbox.onChange?.(e);

          updateArgs({
            checkboxes: [
              ...args.checkboxes!.slice(0, index),
              {
                ...checkbox,
                isChecked: e.target.checked,
              },
              ...args.checkboxes!.slice(index + 1),
            ],
          });
        },
      }))}
    />
  );
};

/**
 * Checkox group is a controlled component, the parent should control the state of checkboxes
 **/
const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/Forms/Checkbox Group',
  component: CheckboxGroup,
  render: Template.bind({}),
  args: {
    name: 'Control',
    value: '1',
    isDisabled: false,
    isInvalid: false,
    label: 'Parent item',
    addDividerAfterIndex: [2],
    checkboxes: [
      {
        label: 'First child',
        name: 'First child',
        isChecked: false,
        onChange: action('onChange, first child'),
      },
      {
        label: 'Second child',
        name: 'Second child',
        isChecked: false,
        onChange: action('onChange, second child'),
      },
      {
        label: 'Third child',
        name: 'Third child',
        isChecked: false,
        onChange: action('onChange, third child'),
      },
      {
        label: 'Fourth child',
        name: 'Fourth child',
        isChecked: false,
        onChange: action('onChange, fourth child'),
      },
    ],
    onChange: action('onChange, parent'),
  },
  argTypes: {
    isChecked: {
      control: { disable: true },
      description:
        'Should be computed by the component controlling the state, based on the state of child checkboxes (true if all are checked)',
    },
    isIndeterminate: {
      control: { disable: true },
      description:
        'Should be computed by the component controlling the state, based on the state of child checkobxes (true if some are checked)',
    },
    label: {
      control: 'text',
    },
    onChange: {
      control: { disable: true },
      description:
        'Should be computed by the component controlling the state and check/uncheck all the children',
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof CheckboxGroup> = {};
