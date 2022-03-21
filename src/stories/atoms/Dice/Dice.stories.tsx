import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Dice } from "./Dice";

export default {
  title: "atoms/Dice",
  component: Dice,
} as ComponentMeta<typeof Dice>;

export const Primary = () => {
  return (
    <>
      <Dice />
    </>
  );
};
