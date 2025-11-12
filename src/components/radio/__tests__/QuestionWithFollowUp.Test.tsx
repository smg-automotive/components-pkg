import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen } from 'jest-utils';

import QuestionWithFollowUpComponent from '../QuestionWithFollowUp';

const baseOptions = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
];

const followUps = {
  a: {
    id: 'followupA',
    name: 'followupA',
    options: [
      { label: 'FA1', value: 'fa1' },
      { label: 'FA2', value: 'fa2' },
    ],
    groupLabel: 'Follow-up A',
  },
};

const Wrapper = ({
  initialValues = { main: '', followupA: '' },
  onValuesChange,
}: {
  initialValues?: Record<string, string>;
  onValuesChange?: (values: Record<string, string>) => void;
}) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (newValues: Record<string, string>) => {
    setValues(newValues);
    onValuesChange?.(newValues);
  };

  return (
    <QuestionWithFollowUpComponent
      id="main"
      name="mainGroup"
      options={baseOptions}
      groupLabel="Main Group"
      followUps={followUps}
      values={values}
      onChange={handleChange}
    />
  );
};

describe('<QuestionWithFollowUpComponent />', () => {
  it('displays follow-up options when clicking option with follow-up', async () => {
    render(<Wrapper />);

    expect(await screen.findByText('Main Group')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Option A'));

    expect(await screen.findByLabelText('FA1')).toBeInTheDocument();
    expect(await screen.findByLabelText('FA2')).toBeInTheDocument();
  });

  it('removes follow-up options when switching to an option without follow-up', async () => {
    render(<Wrapper initialValues={{ main: 'a', followupA: 'fa1' }} />);

    expect(await screen.findByText('Main Group')).toBeInTheDocument();

    expect(await screen.findByLabelText('FA1')).toBeInTheDocument();
    expect(await screen.findByLabelText('FA2')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Option B'));

    expect(screen.queryByLabelText('FA1')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('FA2')).not.toBeInTheDocument();
  });

  it('keeps correct data when selecting a main option', async () => {
    const onChange = jest.fn();
    render(<Wrapper onValuesChange={onChange} />);

    expect(await screen.findByText('Main Group')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Option A'));

    expect(onChange).toHaveBeenCalledWith({ main: 'a', followupA: '' });
  });

  it('keeps correct data when selecting a main option and its follow-up', async () => {
    const onChange = jest.fn();
    render(<Wrapper onValuesChange={onChange} />);

    expect(await screen.findByText('Main Group')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Option A'));
    expect(onChange).toHaveBeenCalledWith({ main: 'a', followupA: '' });

    expect(await screen.findByLabelText('FA2')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('FA2'));
    expect(onChange).toHaveBeenCalledWith({ main: 'a', followupA: 'fa2' });
  });

  it('keeps correct data when selecting a main option and its follow-up and switching to a main option without follow-up', async () => {
    const onChange = jest.fn();
    render(<Wrapper onValuesChange={onChange} />);

    expect(await screen.findByText('Main Group')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Option A'));
    expect(onChange).toHaveBeenCalledWith({ main: 'a', followupA: '' });

    expect(await screen.findByLabelText('FA2')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('FA2'));
    expect(onChange).toHaveBeenCalledWith({ main: 'a', followupA: 'fa2' });

    await userEvent.click(screen.getByLabelText('Option B'));

    expect(screen.queryByLabelText('FA1')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('FA2')).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledWith({ main: 'b' });
  });
});
