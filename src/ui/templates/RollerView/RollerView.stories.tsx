import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RollerView } from "./RollerView";
import styled from "styled-components";

export default {
  title: "templates/RollerView",
  component: RollerView,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof RollerView>;

const StoryWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const Template: ComponentStory<typeof RollerView> = (args) => {
  return (
    <StoryWrapper>
      <RollerView {...args} />
    </StoryWrapper>
  );
};

export const WithDices = Template.bind({});

WithDices.args = {
  die1: 2,
  die2: 3,
  showDice: true,
  showRobber: false,
};

export const WithRobber = Template.bind({});

WithRobber.args = {
  showDice: false,
  showRobber: true,
};