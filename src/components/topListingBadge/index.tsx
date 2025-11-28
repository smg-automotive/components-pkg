import React, { FC, PropsWithChildren } from 'react';
import { Badge, Box } from '@chakra-ui/react';

import { Grid, GridItem } from '../grid';

type Props = {
    aspectRatio?: number;
};

const TopListingBadge: FC<PropsWithChildren<Props>> = ({
                                                           children,
                                                           aspectRatio,
                                                       }) => {
    return (
        <Grid>
            <GridItem gridColumn={1} gridRow={1}>
                {aspectRatio ? (
                    <Box css={{ aspectRatio }}>{children}</Box>
                ) : (
                    children
                )}
            </GridItem>

            <GridItem
                gridColumn={1}
                gridRow={1}
                zIndex="docked"
                overflow="hidden"
                position="relative"
                pointerEvents="none"
                css={{ touchAction: 'none' }}
            >
                <Badge
                    transform="rotate(-45deg) translateX(-50%) translateY(9px)"
                    transformOrigin="top left"
                    width="5xl"
                    textAlign="center"
                    paddingLeft="sm"
                    color="gray.900"
                >
                    Top
                </Badge>
            </GridItem>
        </Grid>
    );
};

export default TopListingBadge;
