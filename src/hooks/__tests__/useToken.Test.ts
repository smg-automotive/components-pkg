import useToken from '../useToken';

describe('useToken', () => {
  const mockGetCategoryValues = jest.fn().mockImplementation((scale) => {
    if (scale === 'colors') {
      return {
        'brand.100': '#F5F200',
        'brand.500': '#908800',
        'brand.700': '#665E00',
      };
    }
    return null;
  });

  const mockContext = {
    tokens: {
      getCategoryValues: mockGetCategoryValues,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should throw an error if used outside of ChakraProvider', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(undefined);

    expect(() => useToken('colors', ['brand.100'])).toThrow(
      'useToken must be used within a ChakraProvider',
    );
  });

  it('should return the correct token values from the theme', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(mockContext);

    const result = useToken('colors', ['brand.100', 'brand.500', 'brand.700']);
    expect(result).toEqual(['#F5F200', '#908800', '#665E00']);
  });

  it('should return the token itself if not found and no fallback is provided', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(mockContext);

    const result = useToken('colors', ['nonexistent.token']);
    expect(result).toEqual(['nonexistent.token']);
  });

  it('should return fallback values if tokens are not found in the theme', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(mockContext);

    const result = useToken('colors', ['nonexistent.token'], ['#000']);
    expect(result).toEqual(['#000']);
  });

  it('should handle mixed cases with some tokens found and some not, without fallbacks', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(mockContext);

    const result = useToken('colors', ['nonexistent.token', 'brand.700']);
    expect(result).toEqual(['nonexistent.token', '#665E00']);
  });

  it('should handle mixed cases with some tokens found and some not, with fallbacks', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(mockContext);

    const result = useToken(
      'colors',
      ['nonexistent.token', 'brand.100'],
      ['#000', '#666'],
    );
    expect(result).toEqual(['#000', '#F5F200']);
  });

  it('should return token itself when scale does not exist in the theme and no fallback is provided', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(mockContext);

    const result = useToken('nonexistent.scale', ['nonexistent.token']);
    expect(result).toEqual(['nonexistent.token']);
  });

  it('should return fallback values when scale does not exist in the theme', () => {
    jest
      .spyOn(require('@chakra-ui/react'), 'useChakraContext')
      .mockReturnValue(mockContext);

    const result = useToken(
      'nonexistent.scale',
      ['nonexistent.token'],
      ['#000'],
    );
    expect(result).toEqual(['#000']);
  });
});
