import {
  useMediaQuery as useChakraMediaQuery,
  UseMediaQueryOptions,
} from '@chakra-ui/react';

import { emBreakpoints as breakpoints } from 'src/themes/shared/breakpoints';

type AboveQueryProps = {
  above: keyof typeof breakpoints;
  below?: keyof typeof breakpoints;
};
type BelowQueryProps = {
  above?: keyof typeof breakpoints;
  below: keyof typeof breakpoints;
};
export type QueryProps = AboveQueryProps | BelowQueryProps;

const useQuery = (props: QueryProps): string => {
  const toNumber = (em: string) => parseFloat(em);

  const min = props.above ? `(min-width: ${breakpoints[props.above]})` : '';
  const max = props.below
    ? `(max-width: ${toNumber(breakpoints[props.below]) - 0.01}em)`
    : '';

  return `${min}${min && max ? ' and ' : ''}${max}`;
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
