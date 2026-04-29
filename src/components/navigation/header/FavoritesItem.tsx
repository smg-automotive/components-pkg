import React, { FC } from 'react';
import { chakra } from '@chakra-ui/react';

import { useI18n } from '@/src/utilities/i18nInit';
import { Link } from '@/src/components/navigation/link';
import { HeartIcon } from '@/src/components/icons';

type Props = {
  link: Link;
};

export const FavoritesItem: FC<Props> = ({ link }) => {
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
