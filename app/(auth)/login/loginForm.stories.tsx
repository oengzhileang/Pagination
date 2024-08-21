import type { Meta, StoryObj } from "@storybook/react";

import LoginForm from "./loginForm";
import { expect, userEvent, within } from "@storybook/test";
import { fn } from "@storybook/test";
const meta: Meta<typeof LoginForm> = {
  title: "app/auth/login",
  component: LoginForm,
  args: {
    onSubmit: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};

export const RequireFields: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole("button");
    await userEvent.click(submitButton);
  },
};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const usernameInput = canvas.getByPlaceholderText("Enter your username");
    await userEvent.type(usernameInput, "Leang", {
      delay: 100,
    });
    const passwordInput = canvas.getByPlaceholderText("Enter your password");
    await userEvent.type(passwordInput, "1234567890", {
      delay: 100,
    });
    const submitButton = canvas.getByRole("button");
    await userEvent.click(submitButton);
  },
};
