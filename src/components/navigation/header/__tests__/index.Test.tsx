/* eslint-disable unicorn/filename-case */
import React from 'react';
import userEvent from '@testing-library/user-event';

import { Brand } from 'src/types/brand';
import {
  multiTenantSeller,
  privateSeller,
  professionalSeller,
} from 'fixtures/enrichedSessionUser';
import { act, fireEvent, render, screen, within } from '.jest/utils';

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
  onLogin = jest.fn,
  onLogout = jest.fn,
  selectTenant = jest.fn(() => Promise.resolve()),
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
      selectTenant={selectTenant}
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

  it('displays user info in the user drawer', async () => {
    const email = 'john.doe@me.com';
    renderNavigation({ user: privateSeller({ email }) });
    const drawerToggle = screen.getByText(email);

    fireEvent.click(drawerToggle);

    const drawerBody = screen.getByTestId('drawer-body');
    expect(within(drawerBody).getByText(email)).toBeInTheDocument();
  });

  it('displays the seller id in the user drawer for the professional seller', async () => {
    const email = 'john.doe@me.com';
    const sellerId = '6002';
    renderNavigation({ user: professionalSeller({ email, sellerId }) });
    const drawerToggle = screen.getByText(email);

    fireEvent.click(drawerToggle);

    const drawerBody = screen.getByTestId('drawer-body');
    expect(within(drawerBody).getByText(`(${sellerId})`)).toBeInTheDocument();
  });

  it('displays selected tenant and location in the user drawer', async () => {
    const email = 'john.doe@me.com';
    renderNavigation({ user: multiTenantSeller({ email }) });
    const drawerToggle = screen.getByText(email);

    fireEvent.click(drawerToggle);

    const drawerBody = screen.getByTestId('drawer-body');
    expect(within(drawerBody).getByText('Garage Amir')).toBeInTheDocument();
    expect(within(drawerBody).getByText('8000 Zurich')).toBeInTheDocument();
  });

  it('allows switching tenants from the header menu', async () => {
    const selectTenant = jest.fn(() => Promise.resolve());
    renderNavigation({
      user: multiTenantSeller(),
      selectTenant,
    });
    const tenantSelectionMenu = screen.getByText('Garage Amir Zurich');
    fireEvent.click(tenantSelectionMenu);

    const popover = screen.getByRole('dialog', { hidden: true });
    const newTenant = within(popover).getByText('Garage Amir Basel - 6002');
    act(() => {
      fireEvent.click(newTenant);
    });

    expect(selectTenant).toHaveBeenCalledWith(6002);
  });

  it('does not display user name in the search drawer', async () => {
    renderNavigation({});

    const searchItem = screen.getByText('Search');
    fireEvent.click(searchItem);

    const drawerBody = screen.getByTestId('drawer-body');
    expect(
      within(drawerBody).queryByText('john.doe@me.com', { exact: false }),
    ).not.toBeInTheDocument();
  });

  it('should display login button if there is no user', async () => {
    renderNavigation({ user: null });

    const login = screen.getByText('Login');
    expect(login).toBeInTheDocument();
  });

  it('should display user email if there is a user', async () => {
    const email = 'john.doe@me.com';
    renderNavigation({ user: multiTenantSeller({ email }) });

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
          drawerItems: drawerNodeItems({ onLogout: jest.fn() }),
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
      name: 'Versichern',
      pathname: '/de/autoversicherung',
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
