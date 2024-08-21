import type { Meta, StoryObj } from "@storybook/react";

import RegisterForm from "./RegisterForm";
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof RegisterForm> = {
  title: "app/auth/register",
  component: RegisterForm,
};

export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {};
