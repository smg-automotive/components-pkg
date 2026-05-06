import { Card as ChakraCard } from '@chakra-ui/react';

export type {
  CardBodyProps,
  CardFooterProps,
  CardHeaderProps,
} from '@chakra-ui/react';

const { Root, Header, Body, Footer } = ChakraCard;

Root.displayName = 'Card.Root';
Header.displayName = 'Card.Header';
Body.displayName = 'Card.Body';
Footer.displayName = 'Card.Footer';

export const CardComponents = {
  Root,
  Body,
  Header,
  Footer,
};

/**
 * @deprecated please use the namespace style import instead
 */
export {
  Root as Card,
  Body as CardBody,
  Header as CardHeader,
  Footer as CardFooter,
};
