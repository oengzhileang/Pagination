import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { fn } from "@storybook/test";
const meta: Meta<typeof Button> = {
  title: "components/atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    // backgrounds: {
    //   values: [
    //     { name: "green", value: "#008000" },
    //     { name: "pink", value: " #FFC0CB" },
    //   ],
    // },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select", option: ["small", "medium", "large"] },
    },
  },
  args: { onClick: fn() },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Outline: Story = {
  args: {
    children: "Button Outline",
    variant: "outline",
    size: "large",
  },
};
export const Text: Story = {
  args: {
    children: "Button Text",
    variant: "text",
    size: "large",
  },
};
export const DisabledButton : Story = {
  args:{
    children: 'Disabled Button',
    variant:'contain',
    size: "large",
    disabled: true
  }
}