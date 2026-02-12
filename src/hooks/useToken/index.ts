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

  const { tokenMap } = context.tokens;

  const value = token.map((t, i) => {
    const tokenValue = tokenMap.get(`${scale}.${t}`);
    if (tokenValue !== undefined) {
      return tokenValue['originalValue'];
    }
    if (fallback?.[i] !== undefined) {
      return fallback[i];
    }
    return t;
  });

  return value;
};

export default useToken;
