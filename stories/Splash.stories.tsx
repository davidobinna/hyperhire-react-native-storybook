// stories/GetStartedPage.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import Splash from './Splash';


const meta: Meta<typeof Splash> = {
  title: 'Example/SplashScreen',
  component: Splash,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
