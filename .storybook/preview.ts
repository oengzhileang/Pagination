import type { Preview } from "@storybook/react";
// import '../app/globals.css'
import '@/app/globals.css'
const preview: Preview = {
  loaders:[

  ],
  parameters: {
    backgrounds:{
      values: [
        { name: 'yellow', value: '#FFFF00' },
        { name: 'red', value: '#FF0000' },
        { name: 'dark', value: '#020403' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags:["autodocs"],
};

export default preview;
