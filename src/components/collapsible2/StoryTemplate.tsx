import React, { FC, ChangeEvent, ReactNode, useState } from 'react';

import { Item } from '../checkboxFilter/types';

import Collapsible2 from './index';

type Values = 'new' | 'used' | 'old-timer';

type Props = {
  defaultFacets?: Partial<{ [_key in Values]: number }>;
  image?: ReactNode;
  numberOfColumnsOnDesktop?: number;
  isCollapsible?: boolean;
  isParent?: boolean;
  icon?: ReactNode;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isIndeterminate?: boolean;
};

const StoryTemplate: FC<Props> = ({
  defaultFacets,
  image,
  numberOfColumnsOnDesktop,
  isCollapsible,
  isParent,
  icon,
}) => {
  // coming from backend
  const facets = {
    parent: 122,
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
    parent: true,
    new: true,
    used: true,
    'old-timer': false,
    broken: false,
    'not-working': false,
    iconic: false,
  });

  const checkboxes = [
    {
      label: 'New',
      key: 'new',
      facet: facets.new,
      isChecked: conditionQuery.new,
      onChange: () =>
        setConditionQuery({
          ...conditionQuery,
          ['new']: !conditionQuery.new,
        }),
    },
    {
      label: 'Used',
      key: 'used',
      facet: facets.used,
      isChecked: conditionQuery.used,
      image: (
        <img src="https://placekitten.com/g/220/100" alt="placeholder image" />
      ),
      onChange: () =>
        setConditionQuery({
          ...conditionQuery,
          ['used']: !conditionQuery.used,
        }),
    },
    {
      label: 'Old-timer',
      image,
      key: 'old-timer',
      facet: facets['old-timer'],
      isChecked: conditionQuery['old-timer'],
      highlightIndices: [[1, 3]],
      onChange: () =>
        setConditionQuery({
          ...conditionQuery,
          ['old-timer']: !conditionQuery['old-timer'],
        }),
    },
    {
      label: 'Broken',
      image,
      key: 'broken',
      facet: facets['broken'],
      isChecked: conditionQuery['broken'],
      onChange: () =>
        setConditionQuery({
          ...conditionQuery,
          ['broken']: !conditionQuery['broken'],
        }),
    },
    {
      label: 'Iconic',
      image,
      key: 'iconic',
      facet: facets['iconic'],
      isChecked: conditionQuery['iconic'],
      onChange: () =>
        setConditionQuery({
          ...conditionQuery,
          ['iconic']: !conditionQuery['iconic'],
        }),
    },
    {
      label: 'Not working',
      image,
      // eslint-disable-next-line sonarjs/no-duplicate-string
      key: 'not-working',
      facet: facets['not-working'],
      isChecked: conditionQuery['not-working'],
      onChange: () =>
        setConditionQuery({
          ...conditionQuery,
          ['not-working']: !conditionQuery['not-working'],
        }),
    },
    {
      label:
        'Large word Nequeporroquisquamestquidoloremipsumquiadolorsitamet,consectetur,adipiscivelit...',
      image,
      // eslint-disable-next-line sonarjs/no-duplicate-string
      key: 'not-working',
      facet: facets['not-working'],
      isChecked: conditionQuery['not-working'],
      onChange: () =>
        setConditionQuery({
          ...conditionQuery,
          ['not-working']: !conditionQuery['not-working'],
        }),
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

  const parentOnChange = () => {
    if (allChecked) {
      uncheckAll();
    } else {
      checkAll();
    }
  };
  const allChecked = checkboxes.every((checkbox) => checkbox.isChecked);

  const indeterminate =
    checkboxes.some((checkbox) => checkbox.isChecked) && !allChecked;

  return (
    <Collapsible2
      // item={checkboxes[0] as Item<string>}
      items={checkboxes as Item<string>[]}
      name="nested-filter"
      numberOfColumnsOnDesktop={numberOfColumnsOnDesktop}
      isCollapsible={isCollapsible}
      areAllChecked={allChecked}
      isParent={isParent}
      icon={icon}
      onParentChange={parentOnChange}
      isIndeterminate={indeterminate}
    />
  );
};

export default StoryTemplate;
