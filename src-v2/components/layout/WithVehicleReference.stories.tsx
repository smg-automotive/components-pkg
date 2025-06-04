import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { sizes } from 'src/themes/shared/sizes';

import SimpleHeader from '../simpleHeader';
import Input from '../input';
import FormControl from '../formControl';
import Button from '../button';
import LayoutWithVehicleReference from './WithVehicleReference';

const meta: Meta<typeof LayoutWithVehicleReference> = {
  title: 'Layout/Pages/Layout with vehicle reference',
  component: LayoutWithVehicleReference,

  args: {
    vehicle: {
      vehicleTitle: 'AUDI A5 Sportback 3.0 TDI quattro S-tronic (Limousine)',
      price: `CHF 23'900.–`,
      sellerName: `Auto-Center Grenchen AG 2540 Grenchen (SO)`,
      sellerAddress: `2540 Grenchen (SO)`,
      image: (
        <img
          src="https://picsum.photos/400/300"
          alt="vehicle reference image"
        />
      ),
      callToAction: (
        <Button variant="secondary" onClick={() => ({})} width="full">
          View vehicle
        </Button>
      ),
    },

    header: <SimpleHeader title="I am a simple header!" url="#header" />,

    children: (
      <>
        <FormControl id="name" label="Name">
          <Input name="name" size="lg" />
        </FormControl>
        <FormControl id="email" label="E-Mail address">
          <Input name="email" size="lg" />
        </FormControl>
        <FormControl id="phone" label="Phone number">
          <Input name="phone" size="lg" />
        </FormControl>
      </>
    ),

    maxContentWidth: 'lg',

    rightColumnSize: 4,

    leftColumnSize: 8,
  },

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },

    header: {
      table: {
        disable: true,
      },
    },

    maxContentWidth: {
      options: Object.keys(sizes.container),

      control: {
        type: 'select',
      },
    },

    rightColumnSize: {
      control: {
        type: 'number',
        min: 1,
        max: 11,
        step: 1,
      },
    },

    leftColumnSize: {
      control: {
        type: 'number',
        min: 1,
        max: 11,
        step: 1,
      },
    },
  },

  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type StoryType = StoryObj<typeof LayoutWithVehicleReference>;
export const WithTitle: StoryType = {
  name: 'With title',

  args: {
    title: 'Message for the seller',
  },
};

export const WithBackLink: StoryType = {
  name: 'With back link',

  args: {
    backLink: {
      text: 'Back',
      url: '#back',
    },
  },
};

export const WithoutBackLinkAndTitle: StoryType = {
  name: 'Without back link and title',
};

export const WithoutHeader: StoryType = {
  name: 'Without header',

  args: {
    title: 'Message to the seller',
    maxContentWidth: 'xl',
    header: null,
  },
};
