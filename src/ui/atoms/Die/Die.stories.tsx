import { StoryFn, Meta } from "@storybook/react";

import { Die, DieProps } from "./Die";

export default {
  title: "atoms/Die",
  component: Die,
} as Meta<typeof Die>;

const Template: StoryFn<typeof Die> = (args: DieProps) => <Die {...args} />;

export const Primary = Template.bind({});

Primary.args = { value: 3 };
