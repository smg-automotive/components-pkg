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
        filterName: 'conditionTypeGroup',
      },
      childCheckboxes: [
        {
          label: 'Demonstration',
          key: 'demonstration',
          facet: 77,
          isChecked: filter.conditionType.includes('demonstration'),
          filterName: 'conditionType',
        },
        {
          label: 'Brand new',
          key: 'brandnew',
          facet: 33,
          isChecked: filter.conditionType.includes('brandnew'),
          filterName: 'conditionType',
        },
      ],
    },
  ];

  return (
    <CheckboxFilter
      items={checkboxes}
      onApply={(item) => {
        setFilter((prevState) => {
          const filterToUpdate = item.filterName as FilterType;
          const state = {
            ...prevState,
            [filterToUpdate]: item.isChecked
              ? [...prevState[filterToUpdate], item.key]
              : prevState[filterToUpdate].filter((key) => key != item.key),
          };
          onApplyAction(state);
          return state;
        });
        console.log({ item });
      }}
      numberOfColumnsOnDesktop={numberOfColumnsOnDesktop}
    />
  );
}

export default StoryTemplate;
