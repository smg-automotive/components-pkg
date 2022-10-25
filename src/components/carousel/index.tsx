import React, {
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import NavigationButton, { Direction } from './NavigationButton';
import Flex from '../flex';
import Box from '../box';

interface Props {
  startIndex?: number;
  onSlideClick?: (index: number) => void;
}

const Carousel: FC<PropsWithChildren<Props>> = ({
  startIndex = 0,
  onSlideClick,
  children,
}) => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    startIndex: startIndex,
    speed: 20,
  });
  const [selectedIndex, setSelectedIndex] = useState(startIndex);

  const slides: ReactNode[] = Array.isArray(children) ? children : [children];
  const numberOfSlides = slides.length;

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scroll = useCallback(
    (direction: Direction) => {
      switch (direction) {
        case 'previous':
          scrollPrev();
          break;
        case 'next':
          scrollNext();
          break;
      }
    },
    [scrollNext, scrollPrev]
  );

  const onClick = useCallback(
    (index: number) => {
      if (onSlideClick && embla && embla.clickAllowed()) {
        onSlideClick(index);
      }
    },
    [embla, onSlideClick]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    const newIndex = embla.selectedScrollSnap();
    setSelectedIndex(newIndex);
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
  }, [embla, onSelect]);

  const renderSlide = (slide: ReactNode, index: number) => {
    return (
      <Box
        key={`slide-${index}`}
        flexGrow="0"
        flexShrink="0"
        flexBasis="full"
        onClick={() => onClick(index)}
        aria-roledescription="slide"
        aria-label={`${index + 1} of ${numberOfSlides}`}
        aria-current={index === selectedIndex}
      >
        {slide}
      </Box>
    );
  };

  const prerenderFallbackSlide = startIndex !== 0 && !emblaRef;

  return prerenderFallbackSlide ? (
    renderSlide(slides[startIndex], startIndex)
  ) : (
    <Box
      ref={emblaRef}
      overflow="hidden"
      position="relative"
      aria-label="Carousel"
      aria-roledescription="Carousel"
      role="group"
    >
      <Flex>{slides.map((slide, index) => renderSlide(slide, index))}</Flex>
      <NavigationButton onClick={scroll} direction="previous" />
      <NavigationButton onClick={scroll} direction="next" />
    </Box>
  );
};

export default Carousel;
