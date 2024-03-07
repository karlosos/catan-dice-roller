import { StoryFn, Meta } from "@storybook/react";
import styled from "styled-components";

import { DiceContainer, DiceContainerProps } from "./DiceContainer";

export default {
  title: "molecules/DiceContainer",
  component: DiceContainer,
} as Meta<typeof DiceContainer>;

const Wrapper = styled.div`
  margin-top: 100px;
`;

const Template: StoryFn<typeof DiceContainer> = (args: DiceContainerProps) => (
  <Wrapper>
    <DiceContainer {...args} />
  </Wrapper>
);

export const Primary = Template.bind({});

Primary.args = {
  die1: 2,
  die2: 5,
  showDice: true,
};
