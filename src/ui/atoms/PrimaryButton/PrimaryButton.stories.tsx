import { Meta } from "@storybook/react";

import { PrimaryButton } from "./PrimaryButton";

export default {
  title: "atoms/PrimaryButton",
  component: PrimaryButton,
} as Meta<typeof PrimaryButton>;

export const Default = () => {
  return <PrimaryButton>Roll</PrimaryButton>;
};

export const Disabled = () => {
  return <PrimaryButton isDisabled={true}>Roll</PrimaryButton>;
};
