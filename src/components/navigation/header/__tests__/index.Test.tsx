/* eslint-disable unicorn/filename-case */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { screen } from '@storybook/testing-library';

import Navigation from '..';

describe('Header', () => {
  it('should open search drawer', async () => {
    render(
      <Navigation
        environment="preprod"
        user={{ id: 1, name: 'John Doe', type: 'private', accountId: 5 }}
        brand="as24"
        language="en"
        hasNotification={false}
      />
    );

    let drawerBody = screen.queryByTestId('drawer-body');
    expect(drawerBody).toBeNull();
    const searchItem = screen.getByText('Search');

    fireEvent.click(searchItem);
    drawerBody = screen.queryByTestId('drawer-body');
    expect(drawerBody).toBeInTheDocument();
  });
  it('should open user drawer', async () => {
    render(
      <Navigation
        environment="preprod"
        user={{ id: 1, name: 'John Doe', type: 'private', accountId: 5 }}
        brand="as24"
        language="en"
        hasNotification={false}
      />
    );

    let drawerBody = screen.queryByTestId('drawer-body');
    expect(drawerBody).toBeNull();
    const searchItem = screen.getByText('John Doe');

    fireEvent.click(searchItem);
    drawerBody = screen.queryByTestId('drawer-body');
    expect(drawerBody).toBeInTheDocument();
  });
  it('should display login button if there is no user', async () => {
    render(
      <Navigation
        environment="preprod"
        user={null}
        brand="as24"
        language="en"
        hasNotification={false}
      />
    );

    const login = screen.getByText('Login');
    expect(login).toBeInTheDocument();
  });
  it('should display user name if there is a user', async () => {
    render(
      <Navigation
        environment="preprod"
        user={{ id: 1, name: 'John Doe', type: 'private', accountId: 5 }}
        brand="as24"
        language="en"
        hasNotification={false}
      />
    );

    const user = screen.getByText('John Doe');
    expect(user).toBeInTheDocument();
  });
  it('should display notification icon if there is a notification', async () => {
    render(
      <Navigation
        environment="preprod"
        user={{ id: 1, name: 'John Doe', type: 'private', accountId: 5 }}
        brand="as24"
        language="en"
        hasNotification
      />
    );

    const notification = screen.getByTestId('notification-icon');
    expect(notification).toBeInTheDocument();
  });
});
