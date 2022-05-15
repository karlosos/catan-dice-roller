import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

import { DiceContainer } from "./DiceContainer";

export default {
  title: "molecules/DiceContainer",
  component: DiceContainer,
  argTypes: {
    die1: { control: "number", min: 1, max: 6 },
    die2: { control: "number", min: 1, max: 6 },
    showDice: Boolean,
  },
} as ComponentMeta<typeof DiceContainer>;

const Wrapper = styled.div`
  margin-top: 100px;
`;

const Template: ComponentStory<typeof DiceContainer> = (args) => (
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
