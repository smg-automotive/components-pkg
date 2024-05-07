import React, {
  FC,
  LegacyRef,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { UseEmblaCarouselType } from 'embla-carousel-react';
import { useMultiStyleConfig } from '@chakra-ui/react';

import Flex from '../flex';
import Box from '../box';
import ThumbnailNavigationButton from './ThumbnailNavigationButton';
import Thumbnail from './Thumbnail';

interface Props {
  currentSlideIndex: number;
  thumbnails: ReactNode[];
  mainCarousel?: UseEmblaCarouselType[1];
  paginationCarouselRef?: LegacyRef<HTMLDivElement>;
  paginationCarousel?: UseEmblaCarouselType[1];
}

const ThumbnailPagination: FC<Props> = ({
  currentSlideIndex,
  thumbnails,
  mainCarousel,
  paginationCarouselRef,
  paginationCarousel,
}) => {
  const [paginationButtonVisibility, setPaginationButtonVisibility] = useState<{
    previous: boolean;
    next: boolean;
  }>({ previous: false, next: true });
  const { pagination } = useMultiStyleConfig('Carousel', {
    variant: 'fullScreen',
  });

  const scrollPrev = useCallback(
    () => paginationCarousel && paginationCarousel.scrollPrev(true),
    [paginationCarousel],
  );
  const scrollNext = useCallback(
    () => paginationCarousel && paginationCarousel.scrollNext(true),
    [paginationCarousel],
  );

  const onThumbnailClick = useCallback(
    (index: number) => {
      if (!mainCarousel || !paginationCarousel) return;
      mainCarousel.scrollTo(index, true);
    },
    [mainCarousel, paginationCarousel],
  );

  const evalPaginationButtonVisibility = useCallback(() => {
    if (
      !paginationCarousel ||
      paginationCarousel.slidesNotInView().length === 0
    ) {
      setPaginationButtonVisibility({ previous: false, next: false });
      return;
    }

    const progress = Math.max(
      0,
      Math.min(1, paginationCarousel.scrollProgress()),
    );
    const slideWidth = 1 / thumbnails.length;
    setPaginationButtonVisibility({
      previous: progress > slideWidth,
      next: progress < 1 - slideWidth,
    });
  }, [paginationCarousel, thumbnails.length]);

  useEffect(() => {
    if (!paginationCarousel) return;

    evalPaginationButtonVisibility();

    paginationCarousel.on('scroll', evalPaginationButtonVisibility);
    paginationCarousel.on('slidesInView', evalPaginationButtonVisibility);
  }, [paginationCarousel, evalPaginationButtonVisibility]);

  return (
    <Box ref={paginationCarouselRef} __css={pagination} aria-label="Pagination">
      <Flex alignItems="center" height="full" id="thumbnail-wrapper">
        {thumbnails.map((slide, index) => (
          <Thumbnail
            key={`slide-${index}`}
            onClick={() => onThumbnailClick(index)}
            isCurrent={index === currentSlideIndex}
            thumbnailIndex={index}
            totalThumbnails={thumbnails.length}
          >
            {paginationCarouselRef ? (
              slide
            ) : (
              <Box h="full" w="full" backgroundColor="gray.50" />
            )}
          </Thumbnail>
        ))}
      </Flex>
      {paginationButtonVisibility.previous ? (
        <ThumbnailNavigationButton onClick={scrollPrev} direction="previous" />
      ) : null}
      {paginationButtonVisibility.next ? (
        <ThumbnailNavigationButton onClick={scrollNext} direction="next" />
      ) : null}
    </Box>
  );
};

export default ThumbnailPagination;
