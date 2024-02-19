import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NumberToken } from "./NumberToken";

export default {
  title: "atoms/NumberToken",
  component: NumberToken,
} as ComponentMeta<typeof NumberToken>;

const Template: ComponentStory<typeof NumberToken> = (args) => <NumberToken {...args} />;

export const Primary = Template.bind({});

Primary.args = { value: 3 };
