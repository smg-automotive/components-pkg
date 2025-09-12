import { useChakraContext } from '@chakra-ui/react';

export const useToken = (scale: string, token: string[]): string[] => {
  const context = useChakraContext();

  if (!context) {
    throw new Error('useToken must be used within a ChakraProvider');
  }

  const category = context.tokens.getCategoryValues(scale);
  const value = token.map((t) => (category ? category[t] || t : t));

  return value;
};
