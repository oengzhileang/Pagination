import type { Meta, StoryObj } from '@storybook/react';

import RegisterForm from './RegisterForm';
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof RegisterForm> = {
  title:"app/auth/register",
  component: RegisterForm,
};

export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};