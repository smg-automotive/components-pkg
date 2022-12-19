import {
  ShowProps,
  useMediaQuery as useChakraMediaQuery,
  UseMediaQueryOptions,
  useQuery,
} from '@chakra-ui/react';

const useMediaQuery = (query: ShowProps, options?: UseMediaQueryOptions) => {
  const mediaQuery = useQuery(query);
  return useChakraMediaQuery(mediaQuery, options)[0];
};

export default useMediaQuery;
