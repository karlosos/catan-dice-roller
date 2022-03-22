import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dice } from "./Dice";

export default {
  title: "atoms/Dice",
  component: Dice,
  argTypes: {
    value: { control: "number", min: 1, max: 6 },
  },
} as ComponentMeta<typeof Dice>;

const Template: ComponentStory<typeof Dice> = (args) => <Dice {...args} />;

export const Primary = Template.bind({});

Primary.args = { value: 3 };
