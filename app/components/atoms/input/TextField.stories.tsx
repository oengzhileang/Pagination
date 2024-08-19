import type {Meta, StoryObj} from "@storybook/react"
import TextField from "./TextField"
import { fn } from "@storybook/test";
const meta : Meta <typeof TextField> ={
    title: "components/atoms/TextField",
    component: TextField,
    args:{
        onChange: fn(),
    }
}

export default meta;
type Story = StoryObj <typeof TextField>;

export const Default : Story = {
    args:{
        type : "text",
        label: "Label",
        placeholder: "input text",
        name: 'default',
    },
};
export const PasswordField : Story = {
    args:{
        label:"Password field",
        type: "password",
        value:"ikkdankdwd",
        name:"password",
    },
};
export const NumberField : Story = {
    args:{
        label :"Number field",
        type:"number",
        value:"123",
        name:"number"
    }
}
export const ErrorField : Story = {
    args:{
        label:"Error field",
        type:"text",
        name:"error",
        error:"This field is required",
    },
};

export const WithInteraction : Story ={
    args:{
        ...Default.args,
    },
    // play: async({args, canvasElement , step} =>{

    // })
}