import type { Meta, StoryObj } from "@storybook/react";

import RegisterForm from "./RegisterForm";
import { userEvent, within } from "@storybook/test";
import { fn } from "@storybook/test";
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof RegisterForm> = {
  title: "app/auth/register",
  component: RegisterForm,
  args:{
    onsubmit: fn()
  }
};

export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {};

export const LoginSuccess : Story = {
  play : async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const emailInput = canvas.getByPlaceholderText("Enter your email")
    await userEvent.type(emailInput,"oengzhileang.dev@gmail.com",{
      delay:100
    });
    const passwordInput = canvas.getByPlaceholderText("Enter your password")
    await userEvent.type(passwordInput,"1234567890",{
      delay: 100
    });
    const cfpasswordInput = canvas.getByPlaceholderText("Enter your comfirm password")
    await userEvent.type(cfpasswordInput,"1234567890" ,{
      delay: 100
    });
    const submitButton = canvas.getByRole("button")
    await userEvent.click(submitButton)
  }
}