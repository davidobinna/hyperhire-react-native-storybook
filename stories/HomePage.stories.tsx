// stories/Splash.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import HomePage from './HomePage';


const meta: Meta<typeof HomePage> = {
  title: 'Example/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
