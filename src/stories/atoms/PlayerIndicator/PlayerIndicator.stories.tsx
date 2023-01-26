import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PlayerColor } from "../PlayerColor";

import { PlayerIndicator } from "./PlayerIndicator";

export default {
  title: "atoms/PlayerIndicator",
  component: PlayerIndicator,
  argTypes: {
    currentPlayerName: { control: "string" },
    currentPlayerColor: { control: "string" },
    nextPlayerName: { control: "string" },
    nextPlayerColor: { control: "string" },
  },
} as ComponentMeta<typeof PlayerIndicator>;

const Template: ComponentStory<typeof PlayerIndicator> = (args) => <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}><PlayerIndicator {...args} /></div>;

export const Primary = Template.bind({});

Primary.args = { currentPlayerName: "Karol", currentPlayerColor: PlayerColor.BLUE, nextPlayerName: "Szymon", nextPlayerColor: PlayerColor.BROWN };