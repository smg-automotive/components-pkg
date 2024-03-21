import React, { useState } from 'react';

import { Item } from './type';

import CheckboxFilter from './index';

type Values =
  | 'new'
  | 'long'
  | 'demonstration'
  | 'foo'
  | 'brandnew'
  | 'used'
  | 'lowered'
  | 'accident'
  | 'small-accident'
  | 'big-accident';

type Props = {
  onApplyAction: (args: unknown) => void;
  onToggleCheckboxGroupAction: (args: unknown) => void;
  numberOfColumnsOnDesktop?: number;
};

type FilterType = 'conditionType' | 'conditionTypeGroup';
const parentFilterName: FilterType = 'conditionTypeGroup';
const childFilterName: FilterType = 'conditionType';

type Filter = Record<FilterType, string[]>;
function StoryTemplate({
  onApplyAction,
  onToggleCheckboxGroupAction,
  numberOfColumnsOnDesktop,
}: Props) {
  const [filter, setFilter] = useState<Filter>({
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
      isChecked: filter.conditionTypeGroup.includes('used'),
      filterName: parentFilterName,
      childCheckboxes: [],
    },
    {
      label: 'Lowered',
      key: 'lowered',
      facet: 20,
      isChecked: filter.conditionTypeGroup.includes('lowered'),
      filterName: parentFilterName,
      childCheckboxes: [],
      image: (
        <img src="https://placekitten.com/g/100/50" alt="placeholder image" />
      ),
    },
    {
      label: 'Accident',
      key: 'accident',
      facet: 10,
      isChecked: filter.conditionTypeGroup.includes('accident'),
      filterName: parentFilterName,
      childCheckboxes: [
        {
          label: 'Only a little bit accident',
          key: 'small-accident',
          facet: 77,
          isChecked: filter.conditionType.includes('small-accident'),
          filterName: childFilterName,
          image: (
            <img
              src="https://placekitten.com/g/100/50"
              alt="placeholder image"
            />
          ),
        },
        {
          label:
            'Exponentially super duper bad accident that caused the airbags to deploy and the car to be totaled. Only buy when you are a mechanic.',
          key: 'big-accident',
          facet: 3,
          isChecked: filter.conditionType.includes('big-accident'),
          filterName: childFilterName,
        },
      ],
    },
    {
      label:
        'Super duper long group name that will break on multiple lines. Usually on Italian and French but also happens on other things',
      key: 'long',
      facet: 100,
      isChecked: filter.conditionTypeGroup.includes('long'),
      filterName: parentFilterName,
      childCheckboxes: [
        {
          label: 'Foo',
          key: 'foo',
          facet: 77,
          isChecked: filter.conditionType.includes('foo'),
          filterName: childFilterName,
        },
      ],
    },
  ];

  const getAllChildrenByParentKey = (key?: Values): string[] => {
    if (!key) return [];
    const childCheckboxesKeys = checkboxes
      .find((box) => box.key === key)
      ?.childCheckboxes?.map((child) => child.key);
    return childCheckboxesKeys ?? [];
  };

  const removeParentFilter = (
    parentFilter: string[],
    childFilter: string[],
    updatedItem: Item<Values, FilterType>,
  ): Filter => {
    const childrenToUpdate = getAllChildrenByParentKey(updatedItem.key);
    return {
      [parentFilterName]: parentFilter.filter(
        (parent) => parent !== updatedItem.key,
      ),
      [childFilterName]: childFilter.filter(
        (child) => !childrenToUpdate.includes(child),
      ),
    } as Filter;
  };

  const addParentFilter = (
    parentFilter: string[],
    childFilter: string[],
    updatedItem: Item<Values, FilterType>,
  ): Filter => {
    const childrenToUpdate = getAllChildrenByParentKey(updatedItem.key);
    return {
      [parentFilterName as FilterType]: [...parentFilter, updatedItem.key],
      [childFilterName]: childFilter.filter(
        (child) => !childrenToUpdate.includes(child),
      ),
    } as Filter;
  };

  const updateParentFilter = (updatedItem: Item<Values, FilterType>) => {
    setFilter((prevState) => {
      const parentFilter = prevState[parentFilterName];
      const childFilter = prevState[childFilterName];
      if (updatedItem.isChecked) {
        return addParentFilter(parentFilter, childFilter, updatedItem);
      } else {
        return removeParentFilter(parentFilter, childFilter, updatedItem);
      }
    });
  };

  const getParentItemByChildrenKey = (key?: Values) => {
    if (!key) return null;
    return checkboxes.find((box) =>
      box.childCheckboxes?.find((child) => child.key === key),
    );
  };

  const removeParentFilterAndAddAllChildrenExceptTheUpdatedOne = (
    parentFilter: string[],
    childFilter: string[],
    updatedItem: Item<Values, FilterType>,
    parentItem: Item<Values, FilterType>,
  ): Filter => {
    const childrenToUpdate = getAllChildrenByParentKey(parentItem.key).filter(
      (childKey) => childKey !== updatedItem.key,
    );
    return {
      [parentFilterName]: parentFilter.filter(
        (parent) => parent !== parentItem.key,
      ),
      [childFilterName]: [...childFilter, ...childrenToUpdate],
    } as Filter;
  };

  const removeAllChildrenAndAddParent = (
    parentFilter: string[],
    childFilter: string[],
    parentItem: Item<Values, FilterType>,
  ): Filter => {
    const childrenToRemove = getAllChildrenByParentKey(parentItem.key);
    return {
      [parentFilterName]: [...parentFilter, parentItem.key],
      [childFilterName]: childFilter.filter(
        (childKey) => !childrenToRemove.includes(childKey),
      ),
    } as Filter;
  };

  const addChildFilter = (
    parentFilter: string[],
    childFilter: string[],
    updatedItem: Item<Values, FilterType>,
  ) => {
    return {
      [parentFilterName]: parentFilter,
      [childFilterName]: [...childFilter, updatedItem.key],
    } as Filter;
  };

  const removeChildFilter = (
    parentFilter: string[],
    childFilter: string[],
    updatedItem: Item<Values, FilterType>,
  ) => {
    return {
      [parentFilterName]: parentFilter,
      [childFilterName]: childFilter.filter(
        (childKey) => childKey !== updatedItem.key,
      ),
    } as Filter;
  };

  const updateChildFilter = (updatedItem: Item<Values, FilterType>) => {
    const parentItem = getParentItemByChildrenKey(updatedItem.key);
    setFilter((prevState) => {
      const parentFilter = prevState[parentFilterName];
      const childFilter = prevState[childFilterName];
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
      return prevState;
    });
  };

  const onApply = (updatedItem: Item<Values, FilterType>) => {
    onApplyAction(updatedItem);
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
      onToggleCheckboxGroup={onToggleCheckboxGroupAction}
      language="en"
      numberOfColumnsOnDesktop={numberOfColumnsOnDesktop}
    />
  );
}

export default StoryTemplate;
