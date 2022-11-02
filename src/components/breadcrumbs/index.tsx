import React, { FC } from 'react';
import {
  Box,
  BreadcrumbItem,
  chakra,
  Breadcrumb as ChakraBreadcrumb,
  Hide,
  useMultiStyleConfig,
} from '@chakra-ui/react';

import Link from '../link';
import { ArrowLeftIcon as BackArrowIcon, ChevronRight } from '../icons';

type Props = {
  crumbs: Crumb[];
  backLink: Crumb;
  LinkWrapper: FC<LinkWrapperProps>;
};

const Breadcrumbs: FC<Props> = ({ crumbs, backLink, LinkWrapper }) => {
  const styles = useMultiStyleConfig('Breadcrumbs');

  return (
    <Box display="flex" alignItems="center">
      {backLink?.url && (
        <ChakraBreadcrumb>
          <BreadcrumbItem>
            <LinkWrapper href={backLink.url}>
              <Link
                display="flex"
                alignItems="center"
                leftIcon={<BackArrowIcon />}
              >
                {backLink.title}
              </Link>
            </LinkWrapper>
          </BreadcrumbItem>
        </ChakraBreadcrumb>
      )}

      <Hide below="md">
        <chakra.span __css={styles.separator} />

        {crumbs?.length > 0 && (
          <ChakraBreadcrumb separator={<ChevronRight />} spacing="xs">
            {crumbs.map((crumb, index) => {
              return (
                <BreadcrumbItem key={crumb.title}>
                  {crumb.url && index !== crumbs.length - 1 ? (
                    <LinkWrapper href={crumb.url}>
                      <Link>{crumb.title}</Link>
                    </LinkWrapper>
                  ) : (
                    <chakra.p __css={styles.text}>{crumb.title}</chakra.p>
                  )}
                </BreadcrumbItem>
              );
            })}
          </ChakraBreadcrumb>
        )}
      </Hide>
    </Box>
  );
};

type Crumb = {
  title: string;
  url?: string;
  params?: {
    pathname: string;
    query: {
      slug: string;
    };
  };
};

type LinkWrapperProps = {
  children: JSX.Element;
  href?: string | NextLinkHrefProps;
  passHref?: boolean;
};

type NextLinkHrefProps = {
  pathname: string;
  query: { name?: string; slug?: string };
};

export default Breadcrumbs;
