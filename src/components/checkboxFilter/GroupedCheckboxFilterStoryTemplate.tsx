import React, { ReactNode, useState } from 'react';

import { CheckboxFilterItem, Item } from './type';

import CheckboxFilter from './index';

type Values = 'new' | 'demonstration' | 'brandnew';

type Props<ItemKey extends string, FilterName extends string> = {
  onApplyAction: (args: unknown) => void;
  defaultFacets?: Partial<{ [_key in Values]: number }>;
  image?: ReactNode;
  numberOfColumnsOnDesktop?: number;
  items: {
    parent: Item<ItemKey, FilterName>;
    childCheckboxes: Item<ItemKey, FilterName>[];
  }[];
};

type FilterType = 'conditionType' | 'conditionTypeGroup';
const parentFilterName: FilterType = 'conditionTypeGroup';
const childFilterName: FilterType = 'conditionType';
function StoryTemplate<ItemKey extends string, FilterName extends string>({
  onApplyAction,
  numberOfColumnsOnDesktop,
}: Props<ItemKey, FilterName>) {
  const [filter, setFilter] = useState<Record<FilterType, string[]>>({
    conditionType: [],
    conditionTypeGroup: [],
  });

  const checkboxes: CheckboxFilterItem<Values, FilterType>[] = [
    {
      parent: {
        label: 'New',
        key: 'new',
        facet: 100,
        isChecked: filter.conditionTypeGroup.includes('new'),
        filterName: parentFilterName,
      },
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
  ];

  const getAllChildrenByParentName = (parentName: FilterType): string[] => {
    return (
      checkboxes
        .find((box) => box.parent.filterName === parentName)
        ?.childCheckboxes.map((child) => child.key) ?? []
    );
  };

  const updateParentFilter = (updatedItem: Item<Values, FilterType>) => {
    const childrenToUpdate = getAllChildrenByParentName(updatedItem.filterName);
    if (updatedItem.isChecked) {
      setFilter((prevState) => {
        return {
          [parentFilterName]: [...prevState[parentFilterName], updatedItem.key],
          [childFilterName]: [...prevState[childFilterName]].filter(
            (child) => !childrenToUpdate.includes(child)
          ),
        } as Record<FilterType, string[]>;
      });
    } else {
      setFilter((prevState) => {
        return {
          [parentFilterName]: prevState[parentFilterName].filter(
            (parent) => parent !== updatedItem.key
          ),
          [childFilterName]: [...prevState[childFilterName]].filter(
            (child) => !childrenToUpdate.includes(child)
          ),
        } as Record<FilterType, string[]>;
      });
    }
  };

  // FIXME
  const updateChildFilter = (updatedItem: Item<Values, FilterType>) => {
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
    const filterToUpdate = updatedItem.filterName as FilterType;
    if (filterToUpdate === parentFilterName) {
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
