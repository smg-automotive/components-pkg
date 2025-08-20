import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import { chakra } from '@chakra-ui/react';

import { HeartIcon } from 'src/components/icons';

import { Link } from '../link';

type Props = {
  link: Link;
};

const FavoritesItem: FC<Props> = ({ link }) => {
  const { t, language } = useI18n();

  return (
    <chakra.a
      position="relative"
      href={link.link?.[language]}
      onClick={link.onClick}
      aria-label={t(link.translationKey ?? '')}
    >
      <HeartIcon color="gray.900" />
    </chakra.a>
  );
};

export default FavoritesItem;
