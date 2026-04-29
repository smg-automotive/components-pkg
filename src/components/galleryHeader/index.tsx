import { PropsWithChildren } from 'react';

import { withTranslationProvider } from '@/src/components/translationProvider/withTranslationProvider';

import { GalleryHeaderContent, GalleryHeaderProps } from './Content';

export const GalleryHeader = withTranslationProvider<
  PropsWithChildren<GalleryHeaderProps>
>(['galleryHeader'])(GalleryHeaderContent);
