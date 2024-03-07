import { StoryFn, Meta } from "@storybook/react";

import { NumberToken, NumberTokenProps } from "./NumberToken";

export default {
  title: "atoms/NumberToken",
  component: NumberToken,
} as Meta<typeof NumberToken>;

const Template: StoryFn<typeof NumberToken> = (args: NumberTokenProps) => (
  <NumberToken {...args} />
);

export const Primary = Template.bind({});

Primary.args = { value: 3 };
