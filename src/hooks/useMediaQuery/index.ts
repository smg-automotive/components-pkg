import {
  useMediaQuery as useChakraMediaQuery,
  UseMediaQueryOptions,
} from '@chakra-ui/react';

import { emBreakpoints as breakpoints } from 'src/themes/shared/breakpoints';

export type QueryProps = {
  above?: keyof typeof breakpoints;
  below?: keyof typeof breakpoints;
};

const useQuery = (props: QueryProps): string => {
  const toNumber = (em: string) => parseFloat(em);

  if (props.above && props.below) {
    const min = breakpoints[props.above];
    const max = breakpoints[props.below];
    return `(min-width: ${min}) and (max-width: ${toNumber(max) - 0.01}em)`;
  }

  if (props.above) {
    const min = breakpoints[props.above];
    return `(min-width: ${min})`;
  }

  if (props.below) {
    const max = breakpoints[props.below];
    return `(max-width: ${toNumber(max) - 0.01}em)`;
  }

  throw new Error("Invalid useQuery props: provide 'above' or 'below'");
};
const useMediaQuery = (query: QueryProps, options?: UseMediaQueryOptions) => {
  const mediaQuery = useQuery(query);
  const defaultOptions = {
    ssr: false,
    ...options,
  };
  return useChakraMediaQuery([mediaQuery], defaultOptions)[0];
};

export default useMediaQuery;
