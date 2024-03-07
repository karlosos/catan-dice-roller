import { StoryFn, Meta } from "@storybook/react";

import { Robber, RobberProps } from "./Robber";

export default {
  title: "atoms/Robber",
  component: Robber,
} as Meta<typeof Robber>;

const Template: StoryFn<typeof Robber> = (args: RobberProps) => (
  <Robber {...args} />
);

export const Primary = Template.bind({});

Primary.args = { showRobber: true };
