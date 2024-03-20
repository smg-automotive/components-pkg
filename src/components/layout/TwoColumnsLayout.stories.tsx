import Text from '../text';
import SimpleHeader from '../simpleHeader';
import Section from '../section';
import TwoColumnsLayout from './TwoColumnsLayout.tsx';

const Template = ({
  rightContent,
  leftContent,
  rightContentColumns,
  leftContentColumns,
  ...args
}) => (
  <TwoColumnsLayout
    {...args}
    right={{ content: rightContent, columns: rightContentColumns }}
    left={{ content: leftContent, columns: leftContentColumns }}
  />
);

export default {
  title: 'Layout/Pages/Layout with two columns',
  component: TwoColumnsLayout,

  args: {
    header: (
      <SimpleHeader
        title="I am a simple header!"
        url="https://www.autoscout24.ch/de"
      />
    ),

    leftContent: (
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel lectus tellus. In auctor libero convallis metus mattis mattis. In
        quis nisl lorem. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </Text>
    ),

    leftContentColumns: 6,
    rightContent: <img src="/dummyImage.jpeg" alt="vehicle reference image" />,
    rightContentColumns: 6,
  },

  argTypes: {
    header: {
      table: {
        disable: true,
      },
    },

    leftContent: {
      table: {
        disable: true,
      },
    },

    leftContentColumns: {
      control: {
        type: 'number',
        min: 1,
        max: 11,
        step: 1,
      },
    },

    rightContent: {
      table: {
        disable: true,
      },
    },

    rightContentColumns: {
      control: {
        type: 'number',
        min: 1,
        max: 11,
        step: 1,
      },
    },

    title: {
      control: {
        type: 'text',
      },
    },

    backLink: {
      table: {
        disable: true,
      },
    },

    left: {
      table: {
        disable: true,
      },
    },

    right: {
      table: {
        disable: true,
      },
    },
  },

  parameters: {
    layout: 'fullscreen',
  },
};

export const WithRightContent = {
  render: Template.bind({}),
  name: 'With right content',

  args: {
    rightContent: <img src="/dummyImage.jpeg" alt="vehicle reference image" />,
  },
};

export const WithCustomTitle = {
  render: Template.bind({}),
  name: 'With custom title',

  args: {
    title: (
      <Section
        title="This is a custom title element"
        text="And some text that still belongs to the custom element"
      />
    ),
  },

  argTypes: {
    title: {
      table: {
        disable: true,
      },
    },
  },
};

export const WithCustomColumnWidths = {
  render: Template.bind({}),
  name: 'With custom column widths',

  args: {
    rightContentColumns: 4,
    leftContentColumns: 8,
  },
};
