type MatchMediaViewport = {
  height?: number;
  width?: number;
};

let viewport: Required<MatchMediaViewport> | null = null;

export const setMatchMediaViewport = ({
  height = 0,
  width = 0,
}: MatchMediaViewport) => {
  viewport = { height, width };
};

const resetMatchMediaViewport = () => {
  viewport = null;
};

const matchesFeature = (feature: string) => {
  if (!viewport) {
    return false;
  }

  const minWidth = feature.match(/^min-width:\s*(\d+(?:\.\d+)?)px$/);
  if (minWidth) {
    return viewport.width >= Number(minWidth[1]);
  }

  const maxWidth = feature.match(/^max-width:\s*(\d+(?:\.\d+)?)px$/);
  if (maxWidth) {
    return viewport.width <= Number(maxWidth[1]);
  }

  const minHeight = feature.match(/^min-height:\s*(\d+(?:\.\d+)?)px$/);
  if (minHeight) {
    return viewport.height >= Number(minHeight[1]);
  }

  const maxHeight = feature.match(/^max-height:\s*(\d+(?:\.\d+)?)px$/);
  if (maxHeight) {
    return viewport.height <= Number(maxHeight[1]);
  }

  if (feature === 'orientation: landscape') {
    return viewport.width > viewport.height;
  }

  if (feature === 'orientation: portrait') {
    return viewport.height >= viewport.width;
  }

  return false;
};

const normalizeFeature = (feature: string) => {
  const trimmedFeature = feature.trim();
  const withoutOpeningParenthesis = trimmedFeature.startsWith('(')
    ? trimmedFeature.slice(1)
    : trimmedFeature;

  return withoutOpeningParenthesis.endsWith(')')
    ? withoutOpeningParenthesis.slice(0, -1)
    : withoutOpeningParenthesis;
};

const matchesQuery = (query: string) =>
  query.split(' and ').map(normalizeFeature).every(matchesFeature);

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: matchesQuery(query),
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

afterEach(resetMatchMediaViewport);
