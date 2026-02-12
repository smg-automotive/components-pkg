import { useMemo } from 'react';

import {
  useMediaQuery as useChakraMediaQuery,
  UseMediaQueryOptions,
} from '@chakra-ui/react';

import { emBreakpoints as breakpoints } from 'src/themes/shared/breakpoints';

type BreakpointKey = keyof typeof breakpoints;

type AboveBelowQueryProps =
  | { above: BreakpointKey; below?: BreakpointKey }
  | { below: BreakpointKey; above?: BreakpointKey }
  | { above: BreakpointKey; below: BreakpointKey }; // allow range explicitly

type BreakpointQueryProps = {
  breakpoint: string;
};

export type QueryProps = AboveBelowQueryProps | BreakpointQueryProps;

const toNumber = (em: string): number => Number.parseFloat(em);

function buildAboveBelowQuery(props: AboveBelowQueryProps): string {
  const min = props.above ? `(min-width: ${breakpoints[props.above]})` : '';
  const max = props.below
    ? `(max-width: ${toNumber(breakpoints[props.below]) - 0.01}em)`
    : '';

  if (min && max) return `${min} and ${max}`;
  return min || max;
}

function buildMediaQuery(props: QueryProps): string {
  if ('breakpoint' in props) {
    return props.breakpoint;
  }
  return buildAboveBelowQuery(props);
}

const useMediaQuery = (
  query: QueryProps,
  options?: UseMediaQueryOptions,
): boolean => {
  const mediaQuery = useMemo(() => buildMediaQuery(query), [query]);

  const mergedOptions: UseMediaQueryOptions = {
    ssr: true,
    fallback: [false],
    ...options,
  };

  const [matches] = useChakraMediaQuery([mediaQuery], mergedOptions);
  return matches;
};

export default useMediaQuery;
