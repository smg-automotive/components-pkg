/* eslint-disable unicorn/filename-case */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MappedUserType } from '@smg-automotive/auth';

import { Brand } from 'src/types/brand';

import { HeaderNavigationConfig } from '../config/HeaderNavigationConfig';
import { headerLinks } from '../config/headerLinks';
import { drawerNodeItems } from '../config/DrawerNodeItems';
import Navigation from '..';

describe('Header', () => {
  it('should open search drawer', async () => {
    render(
      <Navigation
        environment="preprod"
        user={{
          id: '1',
          userName: 'John Doe',
          userType: MappedUserType.Private,
          sellerId: '5',
          sellerIds: ['5'],
          isImpersonated: false,
          email: '',
          exp: 123,
        }}
        brand={Brand.AutoScout24}
        language="en"
        hasNotification={false}
        onLogin={jest.fn}
        onLogout={jest.fn}
      />,
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
        user={{
          id: '1',
          userName: 'John Doe',
          userType: MappedUserType.Private,
          sellerId: '5',
          sellerIds: ['5'],
          isImpersonated: false,
          email: '',
          exp: 123,
        }}
        brand={Brand.AutoScout24}
        language="en"
        hasNotification={false}
        onLogin={jest.fn}
        onLogout={jest.fn}
      />,
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
        brand={Brand.AutoScout24}
        language="en"
        hasNotification={false}
        onLogin={jest.fn}
        onLogout={jest.fn}
      />,
    );

    const login = screen.getByText('Login');
    expect(login).toBeInTheDocument();
  });
  it('should display user name if there is a user', async () => {
    render(
      <Navigation
        environment="preprod"
        user={{
          id: '1',
          userName: 'John Doe',
          userType: MappedUserType.Private,
          sellerId: '5',
          sellerIds: ['5'],
          isImpersonated: false,
          email: '',
          exp: 123,
        }}
        brand={Brand.AutoScout24}
        language="en"
        hasNotification={false}
        onLogin={jest.fn}
        onLogout={jest.fn}
      />,
    );

    const user = screen.getByText('John Doe');
    expect(user).toBeInTheDocument();
  });
  it('should display notification icon if there is a notification', async () => {
    render(
      <Navigation
        environment="preprod"
        user={{
          id: '1',
          userName: 'John Doe',
          userType: MappedUserType.Private,
          sellerId: '5',
          sellerIds: ['5'],
          isImpersonated: false,
          email: '',
          exp: 123,
        }}
        brand={Brand.AutoScout24}
        language="en"
        hasNotification
        onLogin={jest.fn}
        onLogout={jest.fn}
      />,
    );

    const notification = screen.getByTestId('notification-icon');
    expect(notification).toBeInTheDocument();
  });
  it('returns a mapped instance', () => {
    const headerConfigInstance = new HeaderNavigationConfig({
      brand: Brand.AutoScout24,
      environment: 'preprod',
      useAbsoluteUrls: false,
      config: {
        headerItems: headerLinks({ trackEvent: jest.fn() }),
        drawerItems: drawerNodeItems({ onLogout: jest.fn() }),
      },
      user: {
        id: '1',
        userName: 'John Doe',
        userType: MappedUserType.Private,
        sellerId: '5',
        sellerIds: ['5'],
        isImpersonated: false,
        email: '',
        exp: 123,
      },
    });
    const config = headerConfigInstance.getMappedConfig();
    expect(config).toEqual({
      drawerItems: expect.any(Object),
      headerItems: expect.any(Object),
      homeUrl: expect.any(String),
      menuHeight: expect.any(String),
      user: expect.any(Object),
    });
  });
});
