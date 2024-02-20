import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Robber } from "./Robber";

export default {
  title: "atoms/Robber",
  component: Robber,
} as ComponentMeta<typeof Robber>;

const Template: ComponentStory<typeof Robber> = (args) => <Robber {...args} />;

export const Primary = Template.bind({});

Primary.args = { showRobber: true };
