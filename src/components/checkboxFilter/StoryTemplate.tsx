import React, { FC, ReactNode, useState } from 'react';

import CheckboxFilter from './index';

type Values = 'new' | 'used' | 'old-timer';

type Props = {
  // onApplyAction: (args: unknown) => void;
  defaultFacets?: Partial<{ [_key in Values]: number }>;
  image?: ReactNode;
  numberOfColumnsOnDesktop?: number;
  isCollapsible?: boolean;
  icon?: ReactNode;
};

const StoryTemplate: FC<Props> = ({
  // onApplyAction,
  defaultFacets,
  image,
  numberOfColumnsOnDesktop,
  isCollapsible,
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

  return (
    <CheckboxFilter
      item={{
        label: 'Parent',
        key: 'parent',
        facet: facets.parent,
        isChecked: conditionQuery.parent,
        onChange: () => {},
      }}
      items={[
        {
          label: 'New',
          key: 'new',
          facet: facets.new,
          isChecked: conditionQuery.new,
          onChange: () => {},
        },
        {
          label: 'Used',
          key: 'used',
          facet: facets.used,
          isChecked: conditionQuery.used,
          onChange: () => {},
        },
        {
          label: 'Old-timer',
          image,
          key: 'old-timer',
          facet: facets['old-timer'],
          isChecked: conditionQuery['old-timer'],
          highlightIndices: [[1, 3]],
          onChange: () => {},
        },
        {
          label: 'Broken',
          image,
          key: 'broken',
          facet: facets['broken'],
          isChecked: conditionQuery['broken'],
          onChange: () => {},
        },
        {
          label: 'Iconic',
          image,
          key: 'iconic',
          facet: facets['iconic'],
          isChecked: conditionQuery['iconic'],
          onChange: () => {},
        },
        {
          label: 'Not working',
          image,
          // eslint-disable-next-line sonarjs/no-duplicate-string
          key: 'not-working',
          facet: facets['not-working'],
          isChecked: conditionQuery['not-working'],
          onChange: () => {},
        },
        {
          label:
            'Large word Nequeporroquisquamestquidoloremipsumquiadolorsitamet,consectetur,adipiscivelit...',
          image,
          // eslint-disable-next-line sonarjs/no-duplicate-string
          key: 'not-working',
          facet: facets['not-working'],
          isChecked: conditionQuery['not-working'],
          onChange: () => {},
        },
      ]}
      name="condition-filter"
      // onApply={(item, newFilterState) => {
      //   onApplyAction({ item, newFilterState });
      //   setConditionQuery(newFilterState);
      // }}
      numberOfColumnsOnDesktop={numberOfColumnsOnDesktop}
      isCollapsible={isCollapsible}
      icon={icon}
    />
  );
};

export default StoryTemplate;
