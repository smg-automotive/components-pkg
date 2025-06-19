/* eslint-disable unicorn/filename-case */
import React from 'react';
import userEvent from '@testing-library/user-event';

import { Brand } from 'src/types/brand';
import { privateSeller, professionalSeller } from 'fixtures/user';
import { fireEvent, render, screen, within } from '.jest/utils';

import { iconItems } from '../config/iconItems';
import { HeaderNavigationConfig } from '../config/HeaderNavigationConfig';
import { headerLinks } from '../config/headerLinks';
import { drawerNodeItems } from '../config/DrawerNodeItems';
import Navigation, { NavigationProps } from '..';

const renderNavigation = ({
  environment = 'preprod',
  user = privateSeller(),
  brand = Brand.AutoScout24,
  language = 'en',
  hasNotification = false,
  onLogin = jest.fn(),
  onLogout = jest.fn,
  useAbsoluteUrls,
  project,
}: Partial<NavigationProps>) =>
  render(
    <Navigation
      environment={environment}
      user={user}
      brand={brand}
      language={language}
      hasNotification={hasNotification}
      onLogin={onLogin}
      onLogout={onLogout}
      useAbsoluteUrls={useAbsoluteUrls}
      project={project}
    />,
  );

describe('Header', () => {
  it('should open search drawer', async () => {
    renderNavigation({});

    let drawerBody = screen.queryByTestId('drawer-body');
    expect(drawerBody).toBeNull();
    const searchItem = screen.getByText('Search');

    fireEvent.click(searchItem);
    drawerBody = screen.queryByTestId('drawer-body');
    expect(drawerBody).toBeInTheDocument();
  });

  it('should open user drawer', async () => {
    const email = 'john.doe@me.com';
    renderNavigation({ user: privateSeller({ email }) });

    let drawerBody = screen.queryByTestId('drawer-body');
    expect(drawerBody).toBeNull();
    const drawerToggle = screen.getByText(email);

    fireEvent.click(drawerToggle);
    drawerBody = screen.queryByTestId('drawer-body');
    expect(drawerBody).toBeInTheDocument();
  });

  it('displays user email in the user drawer', async () => {
    const email = 'john.doe@me.com';
    renderNavigation({ user: privateSeller({ email }) });
    const drawerToggle = screen.getByText(email);

    fireEvent.click(drawerToggle);

    const drawerBody = screen.getByTestId('drawer-body');
    expect(within(drawerBody).getByText(email)).toBeInTheDocument();
  });

  it('displays the user name in the user drawer', async () => {
    const email = 'john.doe@me.com';
    const userName = 'John Doe';
    renderNavigation({ user: professionalSeller({ email, userName }) });
    const drawerToggle = screen.getByText(email);

    fireEvent.click(drawerToggle);

    const drawerBody = screen.getByTestId('drawer-body');
    expect(within(drawerBody).getByText(`(${userName})`)).toBeInTheDocument();
  });

  it('does not display user name in the search drawer', async () => {
    const email = 'john.doe@me.com';
    renderNavigation({ user: professionalSeller({ email }) });

    const searchItem = screen.getByText('Search');
    fireEvent.click(searchItem);

    const drawerBody = screen.getByTestId('drawer-body');
    expect(
      within(drawerBody).queryByText(email, { exact: false }),
    ).not.toBeInTheDocument();
  });

  it("doesn't display user name if it's same as email", async () => {
    const email = 'john.doe@me.com';
    renderNavigation({ user: privateSeller({ email, userName: email }) });

    const searchItem = screen.getByText(email);
    fireEvent.click(searchItem);

    const drawerBody = screen.getByTestId('drawer-body');
    expect(
      within(drawerBody).getAllByText(email, { exact: false }),
    ).toHaveLength(1);
  });

  it('should display login button if there is no user', async () => {
    renderNavigation({ user: null });

    const login = screen.getByText('Login');
    expect(login).toBeInTheDocument();
  });

  it('should display user email if there is a user', async () => {
    const email = 'john.doe@me.com';
    renderNavigation({ user: professionalSeller({ email }) });

    const user = screen.getByText(email);
    expect(user).toBeInTheDocument();
  });

  it('should display notification icon if there is a notification', async () => {
    renderNavigation({ hasNotification: true });

    const notification = screen.getByTestId('notification-icon');
    expect(notification).toBeInTheDocument();
  });

  describe('getMappedConfig', () => {
    it('returns a mapped instance', () => {
      const headerConfigInstance = new HeaderNavigationConfig({
        brand: Brand.AutoScout24,
        environment: 'preprod',
        useAbsoluteUrls: false,
        config: {
          headerItems: headerLinks({ trackEvent: jest.fn() }),
          drawerItems: drawerNodeItems({
            onLogout: jest.fn(),
            currentLanguage: 'de',
            isLoggedIn: true,
          }),
          iconItems: iconItems({ trackEvent: jest.fn() }),
        },
        user: privateSeller(),
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

    const user = privateSeller();

    const listingsWebLink = {
      name: 'Merkliste',
      pathname: '/de/me/favorites',
    };
    const sellerWebLink = {
      name: 'Meine Fahrzeuge',
      pathname: '/de/vehicle-management',
    };
    const legacyWebLink = {
      name: 'Kontaktanfragen',
      pathname: '/de/member/messagemanager',
    };

    it('should use relative URLs for pages inside listings-web and keep the others absolute', async () => {
      renderNavigation({
        environment: 'production',
        user: user,
        useAbsoluteUrls: true,
        project: 'listings-web',
        language: 'de',
      });

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
      renderNavigation({
        user,
        project: 'seller-web',
        useAbsoluteUrls: true,
        environment: 'production',
        language: 'de',
      });

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
