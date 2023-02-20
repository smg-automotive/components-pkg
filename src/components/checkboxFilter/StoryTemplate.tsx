import React, { FC, useState } from 'react';

import CheckboxFilter from './index';

type Values = 'new' | 'used' | 'old-timer';

const options: Array<{ label: string; key: Values }> = [
  { label: 'New', key: 'new' },
  { label: 'Used', key: 'used' },
  { label: 'Old-timer', key: 'old-timer' },
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
      items={options}
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
