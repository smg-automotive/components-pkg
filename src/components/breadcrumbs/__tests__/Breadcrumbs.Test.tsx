import React from 'react';
import { render, screen } from '@testing-library/react';

import { Box, Center, Divider, Hide } from '@chakra-ui/react';

import BreadcrumbLink from '../Link';
import BreadcrumbItem from '../Item';
import Link from '../../link';
import { ArrowLeftIcon as BackArrowIcon } from '../../icons';
import Breadcrumbs from '..';

const renderWrapper = ({
  backButton = '',
  crumbs = [{ title: 'title', url: 'http://link.com' }],
}) =>
  render(
    <Box display="flex">
      {backButton && (
        <>
          <Link
            data-testid="breadcrumb-back-button"
            leftIcon={<BackArrowIcon />}
            href={backButton}
          >
            Back
          </Link>
          <Hide below="sm">
            <Center height="sm" mr="md" ml="md">
              <Divider orientation="vertical" />
            </Center>
          </Hide>
        </>
      )}

      {crumbs.length > 0 && (
        <Hide below="sm">
          <Breadcrumbs data-testid="breadcrumbs-container">
            {crumbs.map((crumb, i) => (
              <BreadcrumbItem key={i}>
                <BreadcrumbLink href={crumb?.url}>{crumb.title}</BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumbs>
        </Hide>
      )}
    </Box>
  );

describe('<Breadcrumbs>', () => {
  it('properly renders breadcrumbs without backButton', () => {
    const crumbs = [
      { title: 'VW', url: '#' },
      { title: 'Golf', url: '##' },
      { title: 'VW GOLF 2.0 TSI GTI DSG Performance', url: '' },
    ];
    renderWrapper({
      crumbs,
    });

    const links = screen.getAllByRole('link');
    links.forEach((link, i) => {
      expect(link).toHaveAttribute('href', crumbs[i].url);
    });
    const breadcrumbLastItem = screen.getByText(crumbs[2].title);
    expect(breadcrumbLastItem).not.toHaveAttribute('href');
  });

  it('renders back button', () => {
    const crumbs = [
      { title: 'VW', url: '#' },
      { title: 'Golf', url: '##' },
      { title: 'VW GOLF 2.0 TSI GTI DSG Performance', url: '' },
    ];
    const backButton = '#backButtonLink';
    renderWrapper({
      backButton,
      crumbs,
    });

    const link = screen.getByTestId('breadcrumb-back-button');
    expect(link).toBeTruthy();
  });
});
