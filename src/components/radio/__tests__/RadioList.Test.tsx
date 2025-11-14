import React from 'react';
import userEventLib from '@testing-library/user-event';
import { render, screen, waitFor } from 'jest-utils';

import { RadioList } from '../RadioList';

const DummyOption = ({ label }: { label: string }) => <div>{label}</div>;

const buildOptions = () => [
  <DummyOption key="one" label="One" />,
  <DummyOption key="two" label="Two" />,
  <DummyOption key="three" label="Three" />,
];

describe('<RadioList>', () => {
  it('renders all options', async () => {
    render(<RadioList name="list" options={buildOptions()} />);

    // async, da sačekamo da Chakra/Ark završi inicijalni render
    expect(await screen.findByText('One')).toBeInTheDocument();
    expect(await screen.findByText('Two')).toBeInTheDocument();
    expect(await screen.findByText('Three')).toBeInTheDocument();
  });

  it('selects default value', async () => {
    render(
      <RadioList
        name="list"
        defaultValue="two"
        options={buildOptions()}
      />,
    );

    const radio = await screen.findByRole('radio', { name: 'Two' });
    await waitFor(() => expect(radio).toBeChecked());
  });

  it('triggers onChange when clicking an option', async () => {
    const user = userEventLib.setup();
    const onChange = jest.fn();

    render(
      <RadioList name="list" options={buildOptions()} onChange={onChange} />,
    );

    const radio = await screen.findByRole('radio', { name: 'Three' });

    await user.click(radio);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith('three');
    });
  });
});
