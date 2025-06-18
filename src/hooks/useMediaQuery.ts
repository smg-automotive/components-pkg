import {
  useMediaQuery as useChakraMediaQuery,
  UseMediaQueryOptions,
} from '@chakra-ui/react';

const useMediaQuery = (query: string, options?: UseMediaQueryOptions) => {
  return useChakraMediaQuery([query], options ? options : {})[0];
};

export default useMediaQuery;
