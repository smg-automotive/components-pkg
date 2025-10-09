import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen } from 'jest-utils';

import TabPanels from '../TabPanels';
import TabPanel from '../TabPanel';
import TabList from '../TabList';
import Tab from '../Tab';
import Tabs from '../index';

const renderWrapper = ({
  isDisabled = false,
  defaultIndex,
}: {
  isDisabled?: boolean;
  defaultIndex?: number;
}) =>
  render(
    <Tabs isLazy={true} defaultIndex={defaultIndex}>
      <TabList>
        <Tab>One</Tab>
        <Tab isDisabled={isDisabled}>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>Eins</p>
        </TabPanel>
        <TabPanel>
          <p>Zwei</p>
        </TabPanel>
        <TabPanel>
          <p>Drei</p>
        </TabPanel>
      </TabPanels>
    </Tabs>,
  );

describe('<Tabs />', () => {
  it('displays the tabs with the first one opens by default', () => {
    renderWrapper({});
    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Two')).toBeInTheDocument();
    expect(screen.getByText('Three')).toBeInTheDocument();
    expect(screen.getByText('Eins')).toBeInTheDocument();
    expect(screen.queryByText('Zwei')).not.toBeInTheDocument();
  });
  it('changes tab on click', async () => {
    renderWrapper({});
    await userEvent.click(screen.getByText('Two'));
    expect(await screen.findByText('Zwei')).toBeInTheDocument();
  });
  it('displays the tabs with the last tab opens by default', () => {
    renderWrapper({ defaultIndex: 2 });
    expect(screen.getByText('Drei')).toBeInTheDocument();
    expect(screen.queryByText('Eins')).not.toBeInTheDocument();
  });
  it('displays the tabs with one tab disabled', async () => {
    renderWrapper({ isDisabled: true });
    await userEvent.click(screen.getByText('Two'));
    expect(screen.queryByText('Zwei')).not.toBeInTheDocument();
    expect(screen.getByText('Eins')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Three'));
    expect(await screen.findByText('Drei')).toBeInTheDocument();
    expect(screen.queryByText('Zwei')).not.toBeInTheDocument();
  });
});
