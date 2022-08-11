import React, { FC, PropsWithChildren, ReactNode, useRef } from 'react';
import {
  Avatar,
  Badge,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';

import DummyCollapsibleSection from './dummyCollapsibleSection';
import Link from '../link';

// eslint-disable-next-line import/no-internal-modules
import BaseGrid from '../layout/BaseGrid';
import logo from '../../assets/images/autoScout24Logo.webp';

const DesktopOnly = ({ children }: { children: ReactNode }) => {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

  if (!isLargerThan1024) return null;

  return <>{children}</>;
};

const Navigation: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO: handle this propers
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  const accordionsEnabled = !isLargerThan1024;
  const btnRef = useRef();

  const menuHeight = '60px';

  return (
    <>
      <Box
        width="full"
        height={menuHeight}
        background="gray.100"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px="2rem"
        zIndex="menu"
        position="absolute"
      >
        <img width="144px" height="34px" src={logo} />
        <Box
          ref={btnRef}
          variant="secondary"
          onClick={!isOpen ? onOpen : onClose}
          cursor="pointer"
          color="blue.700"
        >
          Open
        </Box>
        <DesktopOnly>
          <Link href="#">Demo</Link>
          <Link href="#">Demo</Link>
          <Link href="#">Demo</Link>
          <Link href="#">
            Demo<Badge>New</Badge>
          </Link>
          <Link href="#">Demo</Link>
        </DesktopOnly>
        <HStack spacing="1rem">
          <Avatar color="grey.400" />
          <span>Login</span>
        </HStack>
        <DesktopOnly>
          <Menu>
            <MenuButton>Language</MenuButton>
            <MenuList>
              <MenuItem as="a" href="/de">
                DE
              </MenuItem>
              <MenuItem as="a" href="/fr">
                FR
              </MenuItem>
              <MenuItem as="a" href="/it">
                IT
              </MenuItem>
              <MenuItem as="a" href="/en">
                EN
              </MenuItem>
            </MenuList>
          </Menu>
        </DesktopOnly>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent marginTop={menuHeight}>
          <DrawerBody py="2xl" px="0">
            <BaseGrid height="full">
              <DummyCollapsibleSection
                count={12}
                accordionsEnabled={accordionsEnabled}
              />
              <DummyCollapsibleSection
                count={2}
                accordionsEnabled={accordionsEnabled}
              />
              <DummyCollapsibleSection
                count={6}
                accordionsEnabled={accordionsEnabled}
              />
              <DummyCollapsibleSection
                count={7}
                accordionsEnabled={accordionsEnabled}
              />
              <DummyCollapsibleSection
                count={3}
                accordionsEnabled={accordionsEnabled}
              />
              <DummyCollapsibleSection
                count={15}
                accordionsEnabled={accordionsEnabled}
              />
              <DummyCollapsibleSection
                count={7}
                accordionsEnabled={accordionsEnabled}
              />
            </BaseGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Navigation;
export { PropsWithChildren as FullHeightProps };
