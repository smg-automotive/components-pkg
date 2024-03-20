import SimpleHeader from '../simpleHeader';
import Input from '../input';
import FormControl from '../formControl';
import Button from '../button';
import LayoutWithVehicleReference from './WithVehicleReference.tsx';

const Template = (args) => <LayoutWithVehicleReference {...args} />;

export default {
  title: 'Layout/Pages/Layout with vehicle reference',
  component: LayoutWithVehicleReference,

  args: {
    vehicle: {
      vehicleTitle: 'AUDI A5 Sportback 3.0 TDI quattro S-tronic (Limousine)',
      price: `CHF 23'900.–`,
      sellerName: `Auto-Center Grenchen AG 2540 Grenchen (SO)`,
      sellerAddress: `2540 Grenchen (SO)`,
      image: <img src="/dummyImage.jpeg" alt="vehicle reference image" />,
      callToAction: (
        <Button variant="secondary" onClick={() => ({})} width="full">
          View vehicle
        </Button>
      ),
    },

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
  },

  parameters: {
    layout: 'fullscreen',
  },
};

export const WithTitle = {
  render: Template.bind({}),
  name: 'With title',

  args: {
    title: 'Nachricht an den Verkäufer',
    header: (
      <SimpleHeader
        title="I am a simple header!"
        url="https://www.autoscout24.ch/de"
      />
    ),
  },
};

export const WithBackLink = {
  render: Template.bind({}),
  name: 'With back link',

  args: {
    backLink: {
      text: 'Back',
      url: 'https://www.autoscout24.ch/de',
    },

    header: (
      <SimpleHeader
        title="I am a simple header!"
        url="https://www.autoscout24.ch/de"
      />
    ),
  },
};

export const WithoutBackLinkAndTitle = {
  render: Template.bind({}),
  name: 'Without back link and title',

  args: {
    header: (
      <SimpleHeader
        title="I am a simple header!"
        url="https://www.autoscout24.ch/de"
      />
    ),
  },
};

export const WithoutHeader = {
  render: Template.bind({}),
  name: 'Without header',

  args: {
    title: 'Nachricht an den Verkäufer',
    maxContentWidth: 'xl',
  },
};
