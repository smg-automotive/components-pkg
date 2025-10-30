import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen } from 'jest-utils';

import RadioGroupBox from '../RadioGroupBox';

const baseOptions = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
];

const followUps = {
  a: {
    id: 'followupA',
    name: 'followupA',
    options: [{ label: 'FA1', value: 'fa1' }],
    groupLabel: 'Follow-up A',
  },
};

const Wrapper = () => {
  const [values, setValues] = useState<Record<string, string>>({
    main: 'a',
    followupA: 'fa1',
  });
  return (
    <RadioGroupBox
      id="main"
      name="mainGroup"
      options={baseOptions}
      groupLabel="Main Group"
      followUps={followUps}
      values={values}
      onChange={(newValues) => setValues(newValues)}
    />
  );
};

describe('<RadioGroupBox />', () => {
  it('displays follow-up when clicking option with follow-up', async () => {
    render(<Wrapper />);

    expect(await screen.findByText('Main Group')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Option A'));
    expect(await screen.findByText('Follow-up A')).toBeInTheDocument();
  });

  it('removes follow-up when switching to an option without follow-up', async () => {
    render(<Wrapper />);

    expect(await screen.findByText('Main Group')).toBeInTheDocument();
    expect(await screen.findByText('Follow-up A')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Option B'));
    expect(await screen.queryByText('Follow-up A')).not.toBeInTheDocument();
  });
});
