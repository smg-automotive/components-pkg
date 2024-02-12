import React, { ReactNode, useState } from 'react';

import { Item } from './type';

import CheckboxFilter from './index';

type Values = 'new' | 'used' | 'old-timer';

type Props<ItemKey extends string> = {
  onApplyAction: (args: unknown) => void;
  defaultFacets?: Partial<{ [_key in Values]: number }>;
  image?: ReactNode;
  numberOfColumnsOnDesktop?: number;
  items: { parent: Item<ItemKey>; childCheckboxes: Item<ItemKey>[] }[];
};

function StoryTemplate<ItemKey extends string>({
  onApplyAction,
  defaultFacets,
  image,
  numberOfColumnsOnDesktop,
  items,
}: Props<ItemKey>) {
  const [filter, setFilter] = useState({
    conditionType: [],
    conditionTypeGroup: [],
  });

  const checkboxes = [
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
          const state = {
            ...prevState,
            [item.filterName]: item.isChecked
              ? [...prevState[item.filterName], item.key]
              : prevState[item.filterName].filter((key) => key != item.key),
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
