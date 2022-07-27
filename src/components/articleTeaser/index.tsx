import React, { FC } from 'react';
import { chakra, ResponsiveValue, useMultiStyleConfig } from '@chakra-ui/react';

import Stack from '../stack';
import { Sizes } from '../../themes';

type Props = {
  title: string;
  text: string;
  imageUrl: string;
  url: string;
  maxImgW?: ResponsiveValue<Sizes>;
};

const ArticleTeaser: FC<Props> = ({
  title,
  text,
  imageUrl,
  url,
  maxImgW = '4xl',
}) => {
  const styles = useMultiStyleConfig('ArticleTeaser');

  return (
    <article>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          spacing={{ md: 'lg' }}
          align="center"
        >
          <chakra.img maxW={maxImgW} src={imageUrl} />
          <Stack direction="column" spacing="sm">
            <chakra.h2 __css={styles.title}>{title}</chakra.h2>
            <chakra.span __css={styles.text}>{text}</chakra.span>
          </Stack>
        </Stack>
      </a>
    </article>
  );
};

export default ArticleTeaser;
