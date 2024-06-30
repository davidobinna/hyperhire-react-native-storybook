import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';

const meta: Meta<typeof Form> = {
  title: 'Example/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log(data),
  },
};

export const WithPrefilledName: Story = {
  args: {
    onSubmit: (data) => console.log(data),
    name: 'Dave Obi', // Assuming the form component takes a `name` prop for initial value
  },
};
