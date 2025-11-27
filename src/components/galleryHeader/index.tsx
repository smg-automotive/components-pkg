import { PropsWithChildren } from 'react';

import { withTranslationProvider } from '../translationProvider/withTranslationProvider';
import GalleryHeaderContent, { GalleryHeaderProps } from './Content';

const GalleryHeader = withTranslationProvider<
  PropsWithChildren<GalleryHeaderProps>
>(['galleryHeader'])(GalleryHeaderContent);

export default GalleryHeader;
