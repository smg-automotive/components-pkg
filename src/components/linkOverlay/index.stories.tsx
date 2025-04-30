import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Link from '../link';
import { H2 } from '../heading';

import { LinkBox, LinkOverlay, LinkOverlayProps } from './index';

const meta: Meta<typeof LinkOverlay> = {
  title: 'Components/Utils/LinkOverlay',
  component: LinkOverlay,
};
export default meta;

export const Overview: StoryObj<typeof LinkOverlay> = {
  render: (args: LinkOverlayProps) => (
    <LinkBox
      as="article"
      border="1px"
      borderRadius="sm"
      borderColor="gray.500"
      p="md"
    >
      <H2>
        <LinkOverlay {...args} href="#">
          Some link
        </LinkOverlay>
      </H2>
      <p>
        As a side note, using quotation marks around an attribute value is
        required only if this value is not a valid identifier.
      </p>
      <Link href="#inner-link">Some inner link</Link>
    </LinkBox>
  ),
};
