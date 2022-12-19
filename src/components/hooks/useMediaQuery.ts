import {
  ShowProps,
  useMediaQuery as useChakraMediaQuery,
  useQuery,
} from '@chakra-ui/react';

const useMediaQuery = (options: ShowProps) => {
  const query = useQuery(options);
  return useChakraMediaQuery(query)[0];
};

export default useMediaQuery;
