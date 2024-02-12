import React, { ReactNode, useState } from 'react';

import { Item } from '../checkboxFilter/type';

import CheckboxCollapsible from './index';

type Values = 'new' | 'used' | 'old-timer';

type Props<ItemKey extends string> = {
  onApplyAction: (args: unknown) => void;
  defaultFacets?: Partial<{ [_key in Values]: number }>;
  image?: ReactNode;
  checkboxes: Item<ItemKey>[];
  item: Item<ItemKey>;
  onParentCheckboxChange: (args: unknown) => void;
};

function StoryTemplate<ItemKey extends string>({
  onApplyAction,
  defaultFacets,
  image,
  checkboxes,
  item,
  onParentCheckboxChange,
}: Props<ItemKey>) {
  // coming from backend
  const facets = {
    parent: 177,
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
    parent: false,
    new: true,
    used: true,
    'old-timer': false,
    broken: false,
    'not-working': false,
    iconic: false,
    ...defaultFacets,
  });

  const parent = {
    label: 'Parent',
    key: 'parent',
    facet: facets.parent,
    isChecked: conditionQuery.parent,
  };

  const items = [
    {
      label: 'New',
      key: 'new',
      facet: facets.new,
      isChecked: conditionQuery.new,
    },
    {
      label: 'Old-timer',
      image,
      key: 'old-timer',
      facet: facets['old-timer'],
      isChecked: conditionQuery['old-timer'],
      highlightIndices: [[1, 3]],
    },
    {
      label: 'Broken',
      key: 'broken',
      facet: facets['broken'],
      isChecked: conditionQuery['broken'],
    },
    {
      label: 'Iconic',
      key: 'iconic',
      facet: facets['iconic'],
      isChecked: conditionQuery['iconic'],
    },
  ];

  const uncheckAll = () =>
    setConditionQuery({
      parent: false,
      new: false,
      used: false,
      'old-timer': false,
      broken: false,
      'not-working': false,
      iconic: false,
    });

  const checkAll = () =>
    setConditionQuery({
      parent: true,
      new: true,
      used: true,
      'old-timer': true,
      broken: true,
      'not-working': true,
      iconic: true,
    });

  console.log({ items }, { parent });

  return (
    <CheckboxCollapsible
      item={item ? item : parent}
      checkboxes={checkboxes ? checkboxes : items}
      onParentCheckboxChange={(itemToUpdate) => {
        console.log('parent', { itemToUpdate });
        onParentCheckboxChange({ itemToUpdate });
        if (itemToUpdate.isChecked) {
          uncheckAll();
        } else {
          checkAll();
        }
      }}
      onChildreCheckboxChange={(itemToUpdate) => {
        console.log('child', { itemToUpdate });
        onApplyAction({ itemToUpdate });
        setConditionQuery((prevState) => ({
          ...prevState,
          [itemToUpdate.key]: itemToUpdate.isChecked,
        }));
      }}
    />
  );
}

export default StoryTemplate;
