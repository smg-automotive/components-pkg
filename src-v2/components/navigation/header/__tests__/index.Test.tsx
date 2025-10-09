/* eslint-disable unicorn/filename-case */
import React from 'react';
import userEvent from '@testing-library/user-event';
import {
  multiTenantUser,
  privateUser,
  professionalUser,
} from '@smg-automotive/auth/fixtures';

import { Brand } from 'src/types/brand';

import { act, fireEvent, render, screen, within } from 'jest-utils';

import { iconItems } from '../config/iconItems';
import { HeaderNavigationLink } from '../config/headerNavigationLink';
import { HeaderNavigationConfig } from '../config/HeaderNavigationConfig';
import { headerLinks } from '../config/headerLinks';
import { drawerNodeItems } from '../config/DrawerNodeItems';
import Navigation, { NavigationProps } from '..';

const renderNavigation = ({
  environment = 'preprod',
  user = privateUser(),
  brand = Brand.AutoScout24,
  language = 'en',
  hasNotification = false,
  onLogin = jest.fn(),
  onLogout = jest.fn(),
  selectTenant = jest.fn(() => Promise.resolve()),
  useAbsoluteUrls,
  project,
  showTenantSelection,
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
      showTenantSelection={showTenantSelection}
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
    renderNavigation({ user: privateUser({ email }) });

    let drawerBody = screen.queryByTestId('drawer-body');
    expect(drawerBody).toBeNull();
    const drawerToggle = screen.getByText(email);

    fireEvent.click(drawerToggle);
    drawerBody = screen.queryByTestId('drawer-body');
    expect(drawerBody).toBeInTheDocument();
  });

  it('displays user email in the user drawer', async () => {
    const email = 'john.doe@me.com';
    renderNavigation({ user: privateUser({ email }) });
    const drawerToggle = screen.getByText(email);

    fireEvent.click(drawerToggle);

    const drawerBody = screen.getByTestId('drawer-body');
    expect(within(drawerBody).getByText(email)).toBeInTheDocument();
  });

  it('displays the seller id in the user drawer for the professional seller', async () => {
    const email = 'john.doe@me.com';
    const sellerId = '6002';
    renderNavigation({ user: professionalUser({ email, sellerId }) });
    const drawerToggle = screen.getByText(email);

    fireEvent.click(drawerToggle);

    const drawerBody = screen.getByTestId('drawer-body');
    expect(within(drawerBody).getByText(`(${sellerId})`)).toBeInTheDocument();
  });

  it('displays selected tenant and location in the user drawer', async () => {
    const email = 'john.doe@me.com';
    renderNavigation({ user: multiTenantUser({ email }) });
    const drawerToggle = screen.getByText(email);

    fireEvent.click(drawerToggle);

    const drawerBody = screen.getByTestId('drawer-body');
    expect(within(drawerBody).getAllByText('Garage Amir').length).toEqual(3);
    expect(within(drawerBody).getAllByText('8000 Zurich').length).toEqual(3);
  });

  it('allows switching tenants from the header menu', async () => {
    const selectTenant = jest.fn(() => Promise.resolve());
    renderNavigation({
      user: multiTenantUser(),
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

  it('allows switching tenants from the combined menu on mobile', async () => {
    const selectTenant = jest.fn(() => Promise.resolve());
    renderNavigation({
      user: multiTenantUser(),
      selectTenant,
    });

    const menuToggle = screen.getByTitle('Hamburger menu icon');
    fireEvent.click(menuToggle);

    const drawerBody = screen.getByTestId('drawer-body');
    const tenantSelectionToggle = within(drawerBody).getAllByTestId(
      'tenant-selection-accordion-toggle',
    )[0];
    fireEvent.click(tenantSelectionToggle);

    const newTenant = within(
      screen.getAllByTestId('tenant-selection-accordion-panel')[0],
    ).getByText('Garage Amir Basel - 6002');
    act(() => {
      fireEvent.click(newTenant);
    });

    expect(selectTenant).toHaveBeenCalledWith(6002);
  });

  it('should show tenant selection menu when showTenantSelection is true', () => {
    renderNavigation({
      user: multiTenantUser(),
      showTenantSelection: true,
    });

    const tenantSelectionMenu = screen.getByText('Garage Amir Zurich');
    expect(tenantSelectionMenu).toBeInTheDocument();
  });

  it('should hide tenant selection menu when showTenantSelection is false', () => {
    renderNavigation({
      user: multiTenantUser(),
      showTenantSelection: false,
    });

    const tenantSelectionMenu = screen.queryByText('Garage Amir Zurich');
    expect(tenantSelectionMenu).not.toBeInTheDocument();
  });

  it('should show tenant selection menu by default when showTenantSelection is not provided', () => {
    renderNavigation({
      user: multiTenantUser(),
    });

    const tenantSelectionMenu = screen.getByText('Garage Amir Zurich');
    expect(tenantSelectionMenu).toBeInTheDocument();
  });

  it('does not display user name in the search drawer', async () => {
    const email = 'john.doe@me.com';
    renderNavigation({ user: professionalUser({ email }) });

    const searchItem = screen.getByText('Search');
    fireEvent.click(searchItem);

    const drawerBody = screen.getByTestId('drawer-body');
    expect(
      within(drawerBody).queryByText(email, { exact: false }),
    ).not.toBeInTheDocument();
  });

  it('should display login button if there is no user', async () => {
    renderNavigation({ user: null });

    const login = screen.getByText('Login');
    expect(login).toBeInTheDocument();
  });

  it('should display user email if there is a user', async () => {
    const email = 'john.doe@me.com';
    renderNavigation({ user: professionalUser({ email }) });

    const user = screen.getByText(email);
    expect(user).toBeInTheDocument();
  });

  it('should display notification icon if there is a notification', async () => {
    renderNavigation({ hasNotification: true });

    const notification = screen.getByTestId('notification-icon');
    expect(notification).toBeInTheDocument();
  });

  it('should not display favorites icon if there is no user', async () => {
    renderNavigation({ user: null });

    const favorites = screen.queryByText('Heart icon');
    expect(favorites).not.toBeInTheDocument();
  });

  it('should display favorites icon if there is a user', async () => {
    const email = 'john.doe@me.com';
    renderNavigation({ user: privateUser({ email }) });

    const favorites = screen.getByText('Heart icon');
    expect(favorites).toBeInTheDocument();
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
        user: privateUser(),
      });
      const config = headerConfigInstance.getMappedConfig();
      expect(config).toEqual({
        drawerItems: expect.any(Object),
        headerItems: expect.any(Object),
        iconItems: {
          comparison: null,
          favorites: expect.any(HeaderNavigationLink),
        },
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

    const user = privateUser();

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
      pathname: '/de/message-manager',
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
