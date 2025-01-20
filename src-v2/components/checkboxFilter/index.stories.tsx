import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Source } from '@storybook/blocks';
import { action } from '@storybook/addon-actions';

import Text from '../text';
import Box from '../box';
import { Item } from './type';

import CheckboxFilterComponent, { Props } from './index';

type Values =
  | 'new'
  | 'used'
  | 'old-timer'
  | 'broken'
  | 'iconic'
  | 'not-working'
  | 'meh'
  | 'small-accident'
  | 'big-accident'
  | 'brand-new'
  | 'demonstration';

type FilterType = 'conditionType' | 'conditionTypeGroup';
const parentFilterName: FilterType = 'conditionTypeGroup';
const childFilterName: FilterType = 'conditionType';
type Filters = Record<FilterType, Values[]>;
type Args = Props<Values, FilterType> & { query: Filters };

const Template = ({ query, ...props }: Args) => {
  const [args, updateArgs] = useArgs<Args>();

  const checkboxes: Item<Values, FilterType>[] = args.items.map((item) => ({
    ...item,
    isChecked: query[item.filterName || 'conditionTypeGroup'].includes(
      item.key,
    ),
    childCheckboxes: item.childCheckboxes?.map((child) => ({
      ...child,
      isChecked: query[child.filterName || 'conditionType'].includes(child.key),
    })),
  }));

  const getAllChildrenByParentKey = (key?: Values): Values[] => {
    if (!key) return [];
    const childCheckboxesKeys = checkboxes
      .find((box) => box.key === key)
      ?.childCheckboxes?.map((child) => child.key);
    return childCheckboxesKeys ?? [];
  };

  const removeParentFilter = (
    parentFilter: Values[],
    childFilter: Values[],
    updatedItem: Item<Values, FilterType>,
  ): Filters => {
    const childrenToUpdate = getAllChildrenByParentKey(updatedItem.key);
    return {
      [parentFilterName]: parentFilter.filter(
        (parent) => parent !== updatedItem.key,
      ),
      [childFilterName]: childFilter.filter(
        (child) => !childrenToUpdate.includes(child),
      ),
    };
  };

  const addParentFilter = (
    parentFilter: Values[],
    childFilter: Values[],
    updatedItem: Item<Values, FilterType>,
  ): Filters => {
    const childrenToUpdate = getAllChildrenByParentKey(updatedItem.key);
    return {
      [parentFilterName]: [...parentFilter, updatedItem.key],
      [childFilterName]: childFilter.filter(
        (child) => !childrenToUpdate.includes(child),
      ),
    };
  };

  const updateParentFilter = (updatedItem: Item<Values, FilterType>) => {
    const parentFilter = args.query[parentFilterName];
    const childFilter = args.query[childFilterName];

    updateArgs({
      query: updatedItem.isChecked
        ? addParentFilter(parentFilter, childFilter, updatedItem)
        : removeParentFilter(parentFilter, childFilter, updatedItem),
    });
  };

  const getParentItemByChildrenKey = (key?: Values) => {
    if (!key) return undefined;
    return checkboxes.find((box) =>
      box.childCheckboxes?.find((child) => child.key === key),
    );
  };

  const removeParentFilterAndAddAllChildrenExceptTheUpdatedOne = (
    parentFilter: Values[],
    childFilter: Values[],
    updatedItem: Item<Values, FilterType>,
    parentItem: Item<Values, FilterType>,
  ): Filters => {
    const childrenToUpdate = getAllChildrenByParentKey(parentItem.key).filter(
      (childKey) => childKey !== updatedItem.key,
    );
    return {
      [parentFilterName]: parentFilter.filter(
        (parent) => parent !== parentItem.key,
      ),
      [childFilterName]: [...childFilter, ...childrenToUpdate],
    };
  };

  const removeAllChildrenAndAddParent = (
    parentFilter: Values[],
    childFilter: Values[],
    parentItem: Item<Values, FilterType>,
  ): Filters => {
    const childrenToRemove = getAllChildrenByParentKey(parentItem.key);
    return {
      [parentFilterName]: [...parentFilter, parentItem.key],
      [childFilterName]: childFilter.filter(
        (childKey) => !childrenToRemove.includes(childKey),
      ),
    };
  };

  const addChildFilter = (
    parentFilter: Values[],
    childFilter: Values[],
    updatedItem: Item<Values, FilterType>,
  ): Filters => {
    return {
      [parentFilterName]: parentFilter,
      [childFilterName]: [...childFilter, updatedItem.key],
    };
  };

  const removeChildFilter = (
    parentFilter: Values[],
    childFilter: Values[],
    updatedItem: Item<Values, FilterType>,
  ) => {
    return {
      [parentFilterName]: parentFilter,
      [childFilterName]: childFilter.filter(
        (childKey) => childKey !== updatedItem.key,
      ),
    };
  };

  const updatedChildFilter = (
    parentFilter: Values[],
    childFilter: Values[],
    updatedItem: Item<Values, FilterType>,
    parentItem?: Item<Values, FilterType>,
  ): Filters => {
    if (parentItem && parentItem.childCheckboxes) {
      if (parentItem.isChecked) {
        return removeParentFilterAndAddAllChildrenExceptTheUpdatedOne(
          parentFilter,
          childFilter,
          updatedItem,
          parentItem,
        );
      }
      if (updatedItem.isChecked) {
        const childrenWithoutModified = parentItem.childCheckboxes.filter(
          (child) => child.key !== updatedItem.key,
        );
        if (childrenWithoutModified.every((child) => child.isChecked)) {
          return removeAllChildrenAndAddParent(
            parentFilter,
            childFilter,
            parentItem,
          );
        }
        return addChildFilter(parentFilter, childFilter, updatedItem);
      } else {
        return removeChildFilter(parentFilter, childFilter, updatedItem);
      }
    }
    return args.query;
  };
  const updateChildFilter = (updatedItem: Item<Values, FilterType>) => {
    const parentItem = getParentItemByChildrenKey(updatedItem.key);
    const parentFilter = args.query[parentFilterName];
    const childFilter = args.query[childFilterName];

    updateArgs({
      query: updatedChildFilter(
        parentFilter,
        childFilter,
        updatedItem,
        parentItem,
      ),
    });
  };

  const onApply = (updatedItem: Item<Values, FilterType>) => {
    args.onApply?.(updatedItem);
    if (updatedItem.filterName === parentFilterName) {
      updateParentFilter(updatedItem);
    } else {
      updateChildFilter(updatedItem);
    }
  };

  return (
    <CheckboxFilterComponent<Values, FilterType>
      {...{
        ...props,
        ...args,
      }}
      items={checkboxes}
      onApply={onApply}
    />
  );
};

const items: Item<Values, FilterType>[] = [
  {
    label: 'New',
    key: 'new',
    facet: 10,
    filterName: 'conditionTypeGroup',
  },
  {
    label: 'Used',
    key: 'used',
    facet: 20,
    filterName: 'conditionTypeGroup',
  },
  {
    label: 'Old-timer',
    key: 'old-timer',
    facet: 5,
    filterName: 'conditionTypeGroup',
  },
  {
    label: 'Not working',
    key: 'not-working',
    facet: 5,
    filterName: 'conditionTypeGroup',
  },
];

const meta: Meta<typeof Template> = {
  title: 'Components/Filter/Checkbox',
  component: CheckboxFilterComponent<Values, FilterType>,
  render: Template.bind({}),

  decorators: [
    (Story) => {
      const [{ query }] = useArgs<Args>();

      return (
        <Box display="flex" maxW="8xl" w="100%" gap="md" flexDirection="column">
          <Text>Current query:</Text>
          <Source code={JSON.stringify(query, null, 2)} language="json" dark />
          <Story />
        </Box>
      );
    },
  ],

  args: {
    onApply: action('onApply'),
    numberOfColumnsOnDesktop: 1,
    onToggleCheckboxGroup: action('onToggleCheckboxGroup'),
    language: 'en',
    items,
    query: {
      conditionType: [],
      conditionTypeGroup: [],
    },
  },

  argTypes: {
    language: {
      control: 'select',
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof Template>;
export const Overview: StoryType = {};

export const WithInitiallyCheckedItems: StoryType = {
  args: {
    query: {
      conditionTypeGroup: ['new', 'used'],
      conditionType: [],
    },
  },
};

export const LabelWithImage: StoryType = {
  args: {
    items: items.map((item, i) => ({
      ...item,
      image: <img src="https://picsum.photos/220/100" alt={`image ${i}`} />,
    })),
  },
};

export const LabelWithLongText: StoryType = {
  args: {
    items: [
      {
        ...items[0],
        label:
          items[0].label +
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat condimentum nisl. Morbi commodo interdum lorem, quis rutrum massa commodo id. Nunc ornare turpis quis nibh feugiat, non iaculis sem sollicitudin. Integer at mi lorem. Nunc at velit fringilla, dignissim erat eleifend, vulputate enim. Sed feugiat enim tellus, sit amet euismod nunc hendrerit eu.',
      },
      ...items.slice(1),
    ],
  },
};

export const WithMultipleColumns: StoryType = {
  args: {
    numberOfColumnsOnDesktop: 2,
  },
};

export const WithGroupedItems: StoryType = {
  args: {
    alwaysExpanded: false,
    numberOfColumnsOnDesktop: 2,
    items: [
      {
        label: 'New',
        key: 'new',
        facet: 10,
        filterName: 'conditionTypeGroup',
        childCheckboxes: [
          {
            label: 'Demonstration',
            key: 'demonstration',
            facet: 8,
            filterName: 'conditionType',
          },
          {
            label: 'Brand new',
            key: 'brand-new',
            facet: 2,
            filterName: 'conditionType',
          },
        ],
      },
      {
        label: 'Used',
        key: 'used',
        facet: 20,
        filterName: 'conditionTypeGroup',
      },
      {
        label: 'Old-timer',
        key: 'old-timer',
        facet: 5,
        filterName: 'conditionTypeGroup',
        childCheckboxes: [
          {
            label: 'Iconic',
            key: 'iconic',
            facet: 3,
            filterName: 'conditionType',
          },
          {
            label: 'Meh',
            key: 'meh',
            facet: 5,
            filterName: 'conditionType',
          },
        ],
      },
      {
        label: 'Not working',
        key: 'not-working',
        facet: 15,
        filterName: 'conditionTypeGroup',
        childCheckboxes: [
          {
            label: 'Broken',
            key: 'broken',
            facet: 3,
            filterName: 'conditionType',
          },
          {
            label: 'Small accident',
            key: 'small-accident',
            facet: 8,
            filterName: 'conditionType',
          },
          {
            label: 'Big accident',
            key: 'big-accident',
            facet: 4,
            filterName: 'conditionType',
          },
        ],
      },
    ],
  },
};
