import React, { FC, ReactNode, useState } from 'react';

import CheckboxFilter from './index';

type Values = 'new' | 'used' | 'old-timer';

type Props = {
  onApplyAction: (args: unknown) => void;
  defaultFacets?: Partial<{ [_key in Values]: number }>;
  image?: ReactNode;
  numberOfColumnsOnDesktop?: number;
};

const StoryTemplate: FC<Props> = ({
  onApplyAction,
  defaultFacets,
  image,
  numberOfColumnsOnDesktop,
}) => {
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

  return (
    <CheckboxFilter
      items={[
        {
          label: 'New',
          key: 'new',
          facet: facets.new,
          isChecked: conditionQuery.new,
        },
        {
          label: 'Used',
          key: 'used',
          facet: facets.used,
          isChecked: conditionQuery.used,
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
          image,
          key: 'broken',
          facet: facets['broken'],
          isChecked: conditionQuery['broken'],
        },
        {
          label: 'Iconic',
          image,
          key: 'iconic',
          facet: facets['iconic'],
          isChecked: conditionQuery['iconic'],
        },
        {
          label: 'Not working',
          image,
          // eslint-disable-next-line sonarjs/no-duplicate-string
          key: 'not-working',
          facet: facets['not-working'],
          isChecked: conditionQuery['not-working'],
        },
        {
          label:
            'Large word Nequeporroquisquamestquidoloremipsumquiadolorsitamet,consectetur,adipiscivelit...',
          image,
          // eslint-disable-next-line sonarjs/no-duplicate-string
          key: 'not-working',
          facet: facets['not-working'],
          isChecked: conditionQuery['not-working'],
        },
      ]}
      onApply={(item, newFilterState) => {
        onApplyAction({ item, newFilterState });
        setConditionQuery(newFilterState);
      }}
      numberOfColumnsOnDesktop={numberOfColumnsOnDesktop}
    />
  );
};

export default StoryTemplate;
