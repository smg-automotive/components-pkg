import React, {
  FC,
  LegacyRef,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { EmblaCarouselType } from 'embla-carousel-react';

import { useMultiStyleConfig } from '@chakra-ui/react';

import ThumbnailNavigationButton from './ThumbnailNavigationButton';
import Thumbnail from './Thumbnail';
import Flex from '../flex';
import Box from '../box';

interface Props {
  currentSlide: number;
  thumbnails: ReactNode[];
  mainCarousel?: EmblaCarouselType;
  paginationCarouselRef?: LegacyRef<HTMLDivElement>;
  paginationCarousel?: EmblaCarouselType;
}

const ThumbnailPagination: FC<Props> = ({
  currentSlide,
  thumbnails,
  mainCarousel,
  paginationCarouselRef,
  paginationCarousel,
}) => {
  const [thumbnailScrollProgress, setThumbnailScrollProgress] = useState(0);
  const [showPaginationButtons, setShowPaginationButtons] = useState(true);
  const { pagination } = useMultiStyleConfig('Carousel', {
    variant: 'fullScreen',
  });

  const onThumbnailClick = useCallback(
    (index: number) => {
      if (!mainCarousel || !paginationCarousel) return;
      if (paginationCarousel.clickAllowed()) {
        mainCarousel.scrollTo(index);
      }
    },
    [mainCarousel, paginationCarousel]
  );

  const onScroll = useCallback(() => {
    if (
      !paginationCarousel ||
      paginationCarousel.slidesNotInView().length === 0
    ) {
      setShowPaginationButtons(false);
      return;
    }

    const progress = Math.max(
      0,
      Math.min(1, paginationCarousel.scrollProgress())
    );
    setThumbnailScrollProgress(progress);
  }, [paginationCarousel]);

  useEffect(() => {
    if (!paginationCarousel) return;
    onScroll();
    paginationCarousel.on('scroll', onScroll);
  }, [paginationCarousel, onScroll]);

  return (
    <Box ref={paginationCarouselRef} __css={pagination}>
      <Flex alignItems="center" height="full">
        {thumbnails.map((slide, index) => (
          <Thumbnail
            key={`slide-${index}`}
            onClick={() => onThumbnailClick(index)}
            isCurrent={index === currentSlide}
          >
            {paginationCarouselRef ? (
              slide
            ) : (
              <Box h="full" w="full" backgroundColor="gray.50" />
            )}
          </Thumbnail>
        ))}
      </Flex>
      {showPaginationButtons ? (
        <>
          {thumbnailScrollProgress > 0.2 ? (
            <ThumbnailNavigationButton
              onClick={() => {
                paginationCarousel && paginationCarousel.scrollPrev();
              }}
              direction="previous"
            />
          ) : null}

          {thumbnailScrollProgress < 0.8 ? (
            <ThumbnailNavigationButton
              onClick={() => {
                paginationCarousel && paginationCarousel.scrollNext();
              }}
              direction="next"
            />
          ) : null}
        </>
      ) : null}
    </Box>
  );
};

export default ThumbnailPagination;
