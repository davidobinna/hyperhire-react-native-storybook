
import type { Meta, StoryObj } from '@storybook/react';
import Register from './Register';



const meta: Meta<typeof Register> = {
  title: 'Example/Register',
  component: Register,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};