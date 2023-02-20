import React, { FC, useState } from 'react';

import CheckboxFilter from './index';

type Values = 'new' | 'used' | 'old-timer';

const options: Array<{ label: string; value: Values }> = [
  { label: 'New', value: 'new' },
  { label: 'Used', value: 'used' },
  { label: 'Old-timer', value: 'old-timer' },
];

type Props = {
  onApplyAction: (args: unknown) => void;
  defaultFacets?: Partial<{ [key in Values]: number }>;
};

const StoryTemplate: FC<Props> = ({ onApplyAction, defaultFacets }) => {
  const [checked, setChecked] = useState<{ [key in Values]: boolean }>({
    new: true,
    used: true,
    'old-timer': false,
  });

  return (
    <CheckboxFilter
      checked={checked}
      options={options}
      facets={{
        new: 10,
        used: 20,
        'old-timer': 1,
        ...defaultFacets,
      }}
      name="condition-filter"
      onApply={(item, newFilterState) => {
        onApplyAction({ item, newFilterState });
        setChecked(newFilterState);
      }}
    />
  );
};

export default StoryTemplate;
