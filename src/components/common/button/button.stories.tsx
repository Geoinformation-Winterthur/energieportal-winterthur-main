import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: "Components / Button",
  component: Button,
  args: {
    children: "Beratung starten"
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
