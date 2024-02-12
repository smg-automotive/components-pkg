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
  const [conditionType, setConditionType] = useState<string[]>([]);
  const [conditionTypeGroup, setConditionTypeGroup] = useState<string[]>([]);

  const checkboxes = [
    {
      parent: {
        label: 'New',
        key: 'new',
        facet: 100,
        isChecked: conditionTypeGroup.includes('new'),
        filterName: 'conditionTypeGroup',
      },
      childCheckboxes: [
        {
          label: 'Demonstration',
          key: 'demonstration',
          facet: 77,
          isChecked: conditionType.includes('demonstration'),
          filterName: 'conditionType',
        },
        {
          label: 'Brand new',
          key: 'brandnew',
          facet: 33,
          isChecked: conditionType.includes('brandnew'),
          filterName: 'conditionType',
        },
      ],
    },
  ];

  return (
    <CheckboxFilter
      items={checkboxes}
      onApply={(item) => {
        console.log({ item });
        if (item.filterName === 'conditionType') {
          setConditionType((prevState) => {
            let newState = [];
            if (item.isChecked) {
              newState = [...prevState, item.key];
            } else {
              newState = prevState.filter((s) => s !== item.key);
            }

            if (newState.length === 2) {
              setConditionTypeGroup(['new']);
              return [];
            } else {
              setConditionTypeGroup([]);
              return newState;
            }
          });
        }
        if (item.filterName === 'conditionTypeGroup') {
          setConditionTypeGroup((prevState) => {
            if (item.isChecked) {
              return [...prevState, item.key];
            }
            return prevState.filter((s) => s !== item.key);
          });
        }
      }}
      numberOfColumnsOnDesktop={numberOfColumnsOnDesktop}
    />
  );
}

export default StoryTemplate;
