import React, { ReactNode, useState } from 'react';

import { Item } from './type';

import CheckboxFilter from './index';

type Values = 'new' | 'demonstration' | 'brandnew' | 'used';

type Props = {
  onApplyAction: (args: unknown) => void;
  defaultFacets?: Partial<{ [_key in Values]: number }>;
  image?: ReactNode;
  numberOfColumnsOnDesktop?: number;
};

// TODO: remove
const example = [
  { type: 'mild-petrol', group: 'petrol' },
  { type: 'petrol', group: 'petrol' },
  { type: 'electro', group: null },
];
const fooFromExample = [
  { parent: 'petrol', child: ['mild-petrol', 'petrol'] },
  { parent: 'electro', child: [] },
];

type FilterType = 'conditionType' | 'conditionTypeGroup';
const parentFilterName: FilterType = 'conditionTypeGroup';
const childFilterName: FilterType = 'conditionType';
function StoryTemplate({ onApplyAction, numberOfColumnsOnDesktop }: Props) {
  const [filter, setFilter] = useState<Record<FilterType, string[]>>({
    conditionType: [],
    conditionTypeGroup: [],
  });

  const checkboxes: Item<Values, FilterType>[] = [
    {
      label: 'New',
      key: 'new',
      facet: 100,
      isChecked: filter.conditionTypeGroup.includes('new'),
      filterName: parentFilterName,
      childCheckboxes: [
        {
          label: 'Demonstration',
          key: 'demonstration',
          facet: 77,
          isChecked: filter.conditionType.includes('demonstration'),
          filterName: childFilterName,
        },
        {
          label: 'Brand new',
          key: 'brandnew',
          facet: 33,
          isChecked: filter.conditionType.includes('brandnew'),
          filterName: childFilterName,
        },
      ],
    },
    {
      label: 'Used',
      key: 'used',
      facet: 50,
      isChecked: filter.conditionType.includes('used'),
      filterName: parentFilterName,
      childCheckboxes: [],
    },
    // TODO: add example with image
    // TODO: add example with multiple columns
  ];

  const getAllChildrenByParentName = (parentName?: FilterType): string[] => {
    if (!parentName) return [];
    return (
      checkboxes
        .find((box) => box.filterName === parentName)
        ?.childCheckboxes?.map((child) => child.key) ?? []
    );
  };

  const updateParentFilter = (updatedItem: Item<Values, FilterType>) => {
    const childrenToUpdate = getAllChildrenByParentName(updatedItem.filterName);
    if (updatedItem.isChecked) {
      setFilter((prevState) => {
        return {
          [parentFilterName]: [...prevState[parentFilterName], updatedItem.key],
          [childFilterName]: [...prevState[childFilterName]].filter(
            (child) => !childrenToUpdate.includes(child),
          ),
        } as Record<FilterType, string[]>;
      });
    } else {
      setFilter((prevState) => {
        return {
          [parentFilterName]: prevState[parentFilterName].filter(
            (parent) => parent !== updatedItem.key,
          ),
          [childFilterName]: [...prevState[childFilterName]].filter(
            (child) => !childrenToUpdate.includes(child),
          ),
        } as Record<FilterType, string[]>;
      });
    }
  };

  // FIXME:
  const updateChildFilter = (updatedItem: Item<Values, FilterType>) => {
    // TODO: if all children of the parent are checked -> remove all from filter and update group
    // TODO: if child is unchecked was checked trough group -> remove group and add all children expect the unchecked one
    // TODO: add/remove normally if only a subset of the group are selected
    setFilter((prevState) => {
      const state = {
        ...prevState,
        [childFilterName]: updatedItem.isChecked
          ? [...prevState[childFilterName], updatedItem.key]
          : prevState[childFilterName].filter((key) => key != updatedItem.key),
      };
      onApplyAction(state);
      return state;
    });
  };

  const onApply = (updatedItem: Item<Values, FilterType>) => {
    if (updatedItem.filterName === parentFilterName) {
      updateParentFilter(updatedItem);
    } else {
      updateChildFilter(updatedItem);
    }
  };

  return (
    <CheckboxFilter
      items={checkboxes}
      onApply={onApply}
      numberOfColumnsOnDesktop={numberOfColumnsOnDesktop}
    />
  );
}

export default StoryTemplate;
