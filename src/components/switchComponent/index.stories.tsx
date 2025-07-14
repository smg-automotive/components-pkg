import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SwitchComponent from '.';

const meta: Meta<typeof SwitchComponent> = {
    title: 'Components/Forms/Switch',
    component: SwitchComponent,

    args: {
        checked: false,
        onCheckedChange: action('onChange'),
        label: 'Label',
        disabled: false,
        id: '1',
    },
};
export default meta;

type StoryType = StoryObj<typeof SwitchComponent>;
export const Overview: StoryType = {};
