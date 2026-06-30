import React from 'react';

import { render, screen } from '@/jest-utils';

import { AppLayoutHeader } from '../Header';
import { AppLayoutFooter } from '../Footer';
import { AppLayoutContent } from '../Content';
import { AppLayout } from '../AppLayout';

describe('AppLayout', () => {
  it('renders layout regions and content', () => {
    render(
      <AppLayout>
        <AppLayoutHeader>Header</AppLayoutHeader>
        <AppLayoutContent>Page content</AppLayoutContent>
        <AppLayoutFooter>Footer</AppLayoutFooter>
      </AppLayout>,
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Page content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
