import type { Preview } from "@storybook/react";
import "../src/styles/globals.scss";
import React from "react";
import { NewsGothic } from "../src/app/layout";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (

      <div className={NewsGothic.className}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    )


  ]
};

export default preview;
