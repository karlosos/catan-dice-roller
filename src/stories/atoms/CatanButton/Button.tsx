import React from "react";
import useSound from "use-sound";

import clickSfx from "../../assets/click.ogg"
import { BackgroundHover, ButtonStyled, ContentStyled } from "./Button.style";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"div"> {
  isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, isDisabled}) => {
  // Source: https://www.royal-wow.com/
  const [playClickSfx] = useSound(clickSfx);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled) {
      return;
    }
    
    playClickSfx();
    onClick?.(event);
  }

  return (
    <ButtonStyled onClick={handleClick} isDisabled={isDisabled}>
      <BackgroundHover isDisabled={isDisabled}>
        <ContentStyled>{children}</ContentStyled>
      </BackgroundHover>
      <ContentStyled>{children}</ContentStyled>
    </ButtonStyled>
  );
};
