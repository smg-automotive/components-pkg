import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen } from 'jest-utils';

import { TabPanels } from '../TabPanels';
import { TabPanel } from '../TabPanel';
import { TabList } from '../TabList';
import { Tab } from '../Tab';
import { Tabs } from '../index';

const renderWrapper = ({
  disabled = false,
  defaultValue,
}: {
  disabled?: boolean;
  defaultValue?: string;
}) =>
  render(
    <Tabs lazyMount={true} defaultValue={defaultValue}>
      <TabList>
        <Tab value="one">One</Tab>
        <Tab value="two" disabled={disabled}>
          Two
        </Tab>
        <Tab value="three">Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="one">
          <p>Eins</p>
        </TabPanel>
        <TabPanel value="two">
          <p>Zwei</p>
        </TabPanel>
        <TabPanel value="three">
          <p>Drei</p>
        </TabPanel>
      </TabPanels>
    </Tabs>,
  );

describe('<Tabs />', () => {
  it('displays the tabs with the first one opens by default', () => {
    renderWrapper({ defaultValue: 'one' });
    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Two')).toBeInTheDocument();
    expect(screen.getByText('Three')).toBeInTheDocument();
    expect(screen.getByText('Eins')).toBeInTheDocument();
    expect(screen.queryByText('Zwei')).not.toBeInTheDocument();
  });

  it('changes tab on click', async () => {
    renderWrapper({ defaultValue: 'one' });
    await userEvent.click(screen.getByText('Two'));
    expect(await screen.findByText('Zwei')).toBeInTheDocument();
  });

  it('displays the tabs with the last tab opens by default', () => {
    renderWrapper({ defaultValue: 'three' });
    expect(screen.getByText('Drei')).toBeInTheDocument();
    expect(screen.queryByText('Eins')).not.toBeInTheDocument();
  });

  it('displays the tabs with one tab disabled', async () => {
    renderWrapper({ disabled: true, defaultValue: 'one' });
    await userEvent.click(screen.getByText('Two'));
    expect(screen.queryByText('Zwei')).not.toBeInTheDocument();
    expect(screen.getByText('Eins')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Three'));
    expect(await screen.findByText('Drei')).toBeInTheDocument();
    expect(screen.queryByText('Zwei')).not.toBeInTheDocument();
  });
});
