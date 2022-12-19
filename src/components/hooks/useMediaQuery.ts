import {
  ShowProps,
  useMediaQuery as useChakraMediaQuery,
  UseMediaQueryOptions,
  useQuery,
} from '@chakra-ui/react';

type Props = {
  query: ShowProps;
  options?: UseMediaQueryOptions;
};
const useMediaQuery = ({ query, options }: Props) => {
  const mediaQuery = useQuery(query);
  return useChakraMediaQuery(mediaQuery, options)[0];
};

export default useMediaQuery;
