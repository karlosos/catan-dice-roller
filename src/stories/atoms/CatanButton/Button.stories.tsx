import { ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "atoms/CatanButton",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = () => {
  return <Button>Roll</Button>;
};

export const Disabled = () => {
  return <Button isDisabled={true}>Roll</Button>;
};
