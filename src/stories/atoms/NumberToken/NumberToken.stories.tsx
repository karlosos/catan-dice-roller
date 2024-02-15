import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NumberToken } from "./NumberToken";

export default {
  title: "atoms/NumberToken",
  component: NumberToken,
  argTypes: {
    value: { control: "number", min: 2, max: 12 },
  },
} as ComponentMeta<typeof NumberToken>;

const Template: ComponentStory<typeof NumberToken> = (args) => <NumberToken {...args} />;

export const Primary = Template.bind({});

Primary.args = { value: 3 };
