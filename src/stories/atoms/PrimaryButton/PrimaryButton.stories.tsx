import { ComponentMeta } from "@storybook/react";

import { PrimaryButton } from "./PrimaryButton";

export default {
  title: "atoms/PrimaryButton",
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

export const Default = () => {
  return <PrimaryButton>Roll</PrimaryButton>;
};

export const Disabled = () => {
  return <PrimaryButton isDisabled={true}>Roll</PrimaryButton>;
};
