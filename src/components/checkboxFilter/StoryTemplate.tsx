import React, { FC, useState } from 'react';

import CheckboxFilter from './index';

type Values = 'new' | 'used' | 'old-timer';

type Props = {
  onApplyAction: (args: unknown) => void;
  defaultFacets?: Partial<{ [key in Values]: number }>;
};

const StoryTemplate: FC<Props> = ({ onApplyAction, defaultFacets }) => {
  // coming from backend
  const facets = {
    new: 10,
    used: 20,
    'old-timer': 1,
    ...defaultFacets,
  };

  // coming from the URL
  const [conditionQuery, setConditionQuery] = useState({
    new: true,
    used: true,
    'old-timer': false,
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
          key: 'old-timer',
          facet: facets['old-timer'],
          isChecked: conditionQuery['old-timer'],
        },
      ]}
      name="condition-filter"
      onApply={(item, newFilterState) => {
        onApplyAction({ item, newFilterState });
        setConditionQuery(newFilterState);
      }}
    />
  );
};

export default StoryTemplate;
