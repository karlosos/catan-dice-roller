import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { RollerView } from "./RollerView";

export default {
  title: "templates/RollerView",
  component: RollerView,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof RollerView>;

const Template: ComponentStory<typeof RollerView> = (args) => <RollerView {...args} />;

export const Default = Template.bind({});