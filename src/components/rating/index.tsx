import React, { FC } from 'react';
import { RatingGroup, Stack } from '@chakra-ui/react';

export type Props = {
  rating: number;
  size: 'sm' | 'lg';
};

export const Rating: FC<Props> = ({ rating, size }) => {
  const fullStars = Math.floor(rating); // Get the full stars count (3 for rating 3.6)
  const fractional = rating - fullStars; // Get the fractional part (0.6 for rating 3.6)
  const percentage = (fractional / 1) * 100; // Calculate the percentage for the next star (100% for 0.6)

  console.log(fullStars); // Log full stars
  console.log(fractional); // Log fractional part
  console.log(percentage); // Log percentage for fractional part

  return (
    <Stack maxW="320px" gap="4">
      <RatingGroup.Root
        readOnly
        count={5} // There are always 5 stars
        size={size}
        allowHalf
        value={rating}
        css={{
          '--rating-percent': `${percentage}%`, // Set the custom property for fractional star
        }}
      >
        <RatingGroup.HiddenInput />
        <RatingGroup.Control />
      </RatingGroup.Root>
    </Stack>
  );
};
