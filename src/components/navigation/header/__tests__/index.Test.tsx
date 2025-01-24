/* eslint-disable unicorn/filename-case */
import React from 'react';

import userEvent from '@testing-library/user-event';
import { MappedUserType } from '@smg-automotive/auth';

import { Brand } from 'src/types/brand';
import { fireEvent, render, screen, within } from '.jest/utils';

import { iconItems } from '../config/iconItems';
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
          email: 'john.doe@me.com',
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
    const searchItem = screen.getByText('john.doe@me.com');

    fireEvent.click(searchItem);
    drawerBody = screen.queryByTestId('drawer-body');
    expect(drawerBody).toBeInTheDocument();
  });
  it('displays user info in the drawer', async () => {
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
          email: 'john.doe@me.com',
          exp: 123,
        }}
        brand={Brand.AutoScout24}
        language="en"
        hasNotification={false}
        onLogin={jest.fn}
        onLogout={jest.fn}
      />,
    );

    const searchItem = screen.getByText('john.doe@me.com');
    fireEvent.click(searchItem);

    const drawerBody = screen.getByTestId('drawer-body');
    expect(within(drawerBody).getByText('john.doe@me.com')).toBeInTheDocument();
    expect(within(drawerBody).getByText('(John Doe)')).toBeInTheDocument();
  });
  it("doesn't displays user name if it's same as email", async () => {
    render(
      <Navigation
        environment="preprod"
        user={{
          id: '1',
          userName: 'john.doe@me.com',
          userType: MappedUserType.Private,
          sellerId: '5',
          sellerIds: ['5'],
          isImpersonated: false,
          email: 'john.doe@me.com',
          exp: 123,
        }}
        brand={Brand.AutoScout24}
        language="en"
        hasNotification={false}
        onLogin={jest.fn}
        onLogout={jest.fn}
      />,
    );

    const searchItem = screen.getByText('john.doe@me.com');
    fireEvent.click(searchItem);

    const drawerBody = screen.getByTestId('drawer-body');
    expect(
      within(drawerBody).getAllByText('john.doe@me.com', { exact: false }),
    ).toHaveLength(1);
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
  it('should display user email if there is a user', async () => {
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
          email: 'john.doe@me.com',
          exp: 123,
        }}
        brand={Brand.AutoScout24}
        language="en"
        hasNotification={false}
        onLogin={jest.fn}
        onLogout={jest.fn}
      />,
    );

    const user = screen.getByText('john.doe@me.com');
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
        iconItems: iconItems({ trackEvent: jest.fn() }),
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
      iconItems: { comparison: null },
      homeUrl: expect.any(String),
      menuHeight: expect.any(String),
      user: expect.any(Object),
    });
  });

  describe('projectIdentifier', () => {
    const isAbsoluteUrl = (url: string) => {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    };
    const transformToAbsoluteUrl = (pathname: string) => {
      return `https://www.autoscout24.ch${pathname}`;
    };

    const user = {
      id: '1',
      userName: 'John Doe',
      userType: MappedUserType.Private,
      sellerId: '5',
      sellerIds: ['5'],
      isImpersonated: false,
      email: 'john@doe.ch',
      exp: 123,
    };
    const listingsWebLink = {
      name: 'Merkliste',
      pathname: '/de/me/favorites',
    };
    const sellerWebLink = {
      name: 'Meine Fahrzeuge',
      pathname: '/de/vehicle-management',
    };
    const legacyWebLink = {
      name: 'Versichern',
      pathname: '/de/autoversicherung',
    };

    it('should use relative URLs for pages inside listings-web and keep the others absolute', async () => {
      render(
        <Navigation
          environment="production"
          user={user}
          useAbsoluteUrls={true}
          brand={Brand.AutoScout24}
          project="listings-web"
          language="de"
          hasNotification={false}
          onLogin={jest.fn}
          onLogout={jest.fn}
        />,
      );

      await userEvent.click(screen.getByText(user.email));

      const listingsLink = screen
        .getAllByRole('link', {
          name: listingsWebLink.name,
          hidden: true,
        })[0]
        .getAttribute('href');
      expect(isAbsoluteUrl(listingsLink!)).toBe(false);
      expect(listingsLink!).toEqual(listingsWebLink.pathname);
      const sellerLink = screen
        .getAllByRole('link', {
          name: sellerWebLink.name,
          hidden: true,
        })[0]
        .getAttribute('href');
      expect(isAbsoluteUrl(sellerLink!)).toBe(true);
      expect(sellerLink!).toEqual(
        transformToAbsoluteUrl(sellerWebLink.pathname),
      );
      const legacyLink = screen
        .getAllByRole('link', {
          name: legacyWebLink.name,
          hidden: true,
        })[0]
        .getAttribute('href');
      expect(isAbsoluteUrl(legacyLink!)).toBe(true);
      expect(legacyLink!).toEqual(
        transformToAbsoluteUrl(legacyWebLink.pathname),
      );
    });

    it('should use relative URLs for pages inside seller-web and keep the others absolute', async () => {
      render(
        <Navigation
          environment="production"
          user={user}
          useAbsoluteUrls={true}
          brand={Brand.AutoScout24}
          project="seller-web"
          language="de"
          hasNotification={false}
          onLogin={jest.fn}
          onLogout={jest.fn}
        />,
      );

      await userEvent.click(screen.getByText(user.email));

      const listingsLink = screen
        .getAllByRole('link', {
          name: listingsWebLink.name,
          hidden: true,
        })[0]
        .getAttribute('href');
      expect(isAbsoluteUrl(listingsLink!)).toBe(true);
      expect(listingsLink!).toEqual(
        transformToAbsoluteUrl(listingsWebLink.pathname),
      );
      const sellerLink = screen
        .getAllByRole('link', {
          name: sellerWebLink.name,
          hidden: true,
        })[0]
        .getAttribute('href');
      expect(isAbsoluteUrl(sellerLink!)).toBe(false);
      expect(sellerLink!).toEqual(sellerWebLink.pathname);
      const legacyLink = screen
        .getAllByRole('link', {
          name: legacyWebLink.name,
          hidden: true,
        })[0]
        .getAttribute('href');
      expect(isAbsoluteUrl(legacyLink!)).toBe(true);
      expect(legacyLink!).toEqual(
        transformToAbsoluteUrl(legacyWebLink.pathname),
      );
    });
  });
});
