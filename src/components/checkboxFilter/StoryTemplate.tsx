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
  // coming from backend
  const facets = {
    new: 10,
    used: 20,
    'old-timer': 1,
    broken: 15,
    'not-working': 5,
    iconic: 100,
    ...defaultFacets,
  };

  // coming from the URL
  const [conditionQuery, setConditionQuery] = useState({
    new: true,
    used: true,
    'old-timer': false,
    broken: false,
    'not-working': false,
    iconic: false,
  });

  const checkboxes = [
    {
      parent: {
        label: 'New',
        key: 'new',
        facet: facets.new,
        isChecked: conditionQuery.new,
      },
      childCheckboxes: [],
    },
    {
      parent: {
        label: 'Used',
        key: 'used',
        facet: facets.used,
        isChecked: conditionQuery.used,
      },
      childCheckboxes: [],
    },
    {
      parent: {
        label: 'Old-timer',
        image,
        key: 'old-timer',
        facet: facets['old-timer'],
        isChecked: conditionQuery['old-timer'],
        highlightIndices: [[1, 3]],
      },
      childCheckboxes: [],
    },
    {
      parent: {
        label: 'Broken',
        image,
        key: 'broken',
        facet: facets['broken'],
        isChecked: conditionQuery['broken'],
      },
      childCheckboxes: [],
    },
    {
      parent: {
        label: 'Iconic',
        image,
        key: 'iconic',
        facet: facets['iconic'],
        isChecked: conditionQuery['iconic'],
      },
      childCheckboxes: [],
    },
    {
      parent: {
        label: 'Not working',
        image,
        // eslint-disable-next-line sonarjs/no-duplicate-string
        key: 'not-working',
        facet: facets['not-working'],
        isChecked: conditionQuery['not-working'],
      },
      childCheckboxes: [],
    },
    {
      parent: {
        label:
          'Large word Nequeporroquisquamestquidoloremipsumquiadolorsitamet,consectetur,adipiscivelit...',
        image,
        // eslint-disable-next-line sonarjs/no-duplicate-string
        key: 'not-working',
        facet: facets['not-working'],
        isChecked: conditionQuery['not-working'],
      },
      childCheckboxes: [],
    },
  ];

  return (
    <CheckboxFilter
      items={items ? items : checkboxes}
      onApply={(item) => {
        onApplyAction({ item });
        setConditionQuery((prevState) => ({
          ...prevState,
          [item.key]: item.isChecked,
        }));
      }}
      numberOfColumnsOnDesktop={numberOfColumnsOnDesktop}
    />
  );
}

export default StoryTemplate;
