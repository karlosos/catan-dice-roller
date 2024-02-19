import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Die } from "./Die";

export default {
  title: "atoms/Die",
  component: Die,
} as ComponentMeta<typeof Die>;

const Template: ComponentStory<typeof Die> = (args) => <Die {...args} />;

export const Primary = Template.bind({});

Primary.args = { value: 3 };
