import React, { FC } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

import Link from '../link';
import { ArrowLeftIcon as BackArrowIcon } from '../icons';

const BreadcrumbBackLink: FC = ({ ...props }) => {
  const styles = useMultiStyleConfig('Breadcrumbs');
  /**
   * TODO
   * Add translation for back button link
   * after integrating i18n package into components-pkg
   */
  return (
    <Link leftIcon={<BackArrowIcon />} {...props}>
      Back
      <chakra.span __css={styles.separator} />
    </Link>
  );
};

export default BreadcrumbBackLink;
