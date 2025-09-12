import { useChakraContext } from '@chakra-ui/react';

const useToken = (
  scale: string,
  token: string[],
  fallback?: string[],
): string[] => {
  const context = useChakraContext();

  if (!context) {
    throw new Error('useToken must be used within a ChakraProvider');
  }

  const category = context.tokens.getCategoryValues(scale);

  const value = token.map((t, i) => {
    if (category) {
      return category[t] || (fallback ? fallback[i] : t);
    } else if (fallback) {
      return fallback[i];
    } else {
      return t;
    }
  });

  return value;
};

export default useToken;
