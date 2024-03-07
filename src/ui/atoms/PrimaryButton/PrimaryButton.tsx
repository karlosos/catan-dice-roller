import React from "react";
import { testId } from "testUtils/testId";
import useSound from "use-sound";

import clickSfx from "../../assets/click.ogg";
import {
  BackgroundHover,
  ButtonStyled,
  ContentStyled,
} from "./PrimaryButton.style";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"div"> {
  isDisabled?: boolean;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  isDisabled,
}) => {
  // Source: https://www.royal-wow.com/
  const [playClickSfx] = useSound(clickSfx, { volume: 0.3 });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled) {
      return;
    }

    playClickSfx();
    onClick?.(event);
  };

  return (
    <ButtonStyled
      onClick={handleClick}
      $isDisabled={isDisabled}
      data-testid={testId.primaryButton}
    >
      <BackgroundHover $isDisabled={isDisabled}>
        <ContentStyled>{children}</ContentStyled>
      </BackgroundHover>
      <ContentStyled>{children}</ContentStyled>
    </ButtonStyled>
  );
};
