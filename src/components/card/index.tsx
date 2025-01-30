import { Card as ChakraCard } from '@chakra-ui/react';

export type {
    CardBodyProps,
    CardFooterProps,
    CardHeaderProps,
} from '@chakra-ui/react';

const {
    Root,
    Header,
    Body,
    Footer,
} = ChakraCard;

Root.displayName = 'Card.Root';
Header.displayName = 'Card.Header';
Body.displayName = 'Card.Body';
Footer.displayName = 'Footer.Body';

export const Card = {
    Root,
    Body,
    Header,
    Footer,
};

/**
 * @deprecated since version 3.0
 */
export {
    Root as CardRoot,
    Body as CardBody,
    Header as CardHeader,
    Footer as CardFooter,
};
