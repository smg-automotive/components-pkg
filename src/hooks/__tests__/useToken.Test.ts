import { renderHook } from 'jest-utils';

import useToken from '../useToken';

describe('useToken', () => {
  const mockContext = {
    tokens: {
      tokenMap: new Map([
        ['colors.brand.100', { originalValue: '#F5F200' }],
        ['colors.brand.500', { originalValue: '#908800' }],
        ['colors.brand.700', { originalValue: '#665E00' }],
      ]),
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should throw an error if used outside of ChakraProvider', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(undefined);

    expect(() => renderHook(() => useToken('colors', ['brand.100']))).toThrow(
      'useToken must be used within a ChakraProvider',
    );
  });

  it('should return the correct token values from the theme', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(mockContext);

    const { result } = renderHook(() =>
      useToken('colors', ['brand.100', 'brand.500', 'brand.700']),
    );
    expect(result.current).toEqual(['#F5F200', '#908800', '#665E00']);
  });

  it('should return the token itself if not found and no fallback is provided', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(mockContext);

    const { result } = renderHook(() =>
      useToken('colors', ['nonexistent.token']),
    );
    expect(result.current).toEqual(['nonexistent.token']);
  });

  it('should return fallback values if tokens are not found in the theme', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(mockContext);

    const { result } = renderHook(() =>
      useToken('colors', ['nonexistent.token'], ['#000']),
    );
    expect(result.current).toEqual(['#000']);
  });

  it('should handle mixed cases with some tokens found and some not, without fallbacks', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(mockContext);

    const { result } = renderHook(() =>
      useToken('colors', ['nonexistent.token', 'brand.700']),
    );
    expect(result.current).toEqual(['nonexistent.token', '#665E00']);
  });

  it('should handle mixed cases with some tokens found and some not, with fallbacks', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(mockContext);

    const { result } = renderHook(() =>
      useToken('colors', ['nonexistent.token', 'brand.100'], ['#000', '#666']),
    );
    expect(result.current).toEqual(['#000', '#F5F200']);
  });

  it('should return token itself when scale does not exist in the theme and no fallback is provided', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(mockContext);

    const { result } = renderHook(() =>
      useToken('nonexistent.scale', ['nonexistent.token']),
    );
    expect(result.current).toEqual(['nonexistent.token']);
  });

  it('should return fallback values when scale does not exist in the theme', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(mockContext);

    const { result } = renderHook(() =>
      useToken('nonexistent.scale', ['nonexistent.token'], ['#000']),
    );
    expect(result.current).toEqual(['#000']);
  });
});
