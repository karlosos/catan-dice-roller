import styled, { css } from "styled-components";

import backgroundSprite from "./button-large.png";

const buttonBackground = css`
  background-size: 100% 282px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: url(${backgroundSprite});
`;

export const ButtonStyled = styled.div<{ isDisabled?: boolean }>`
  user-select: none;
  position: relative;
  width: 380px;
  height: 141px;
  display: block;
  max-width: 100%;
  ${buttonBackground};
  background-position: top center;

  text-align: center;

  ${(props) =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
      filter: grayscale(80%);
    `}

  transition: filter 0.5s ease;
  transition-delay: 0.1s;
`;

export const BackgroundHover = styled.div<{ isDisabled?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  ${buttonBackground};
  background-position: bottom center;
  transition: opacity 0.5s ease;
  opacity: 0;

  ${(props) =>
    !props.isDisabled &&
    css`
      &:hover {
        opacity: 1;
        transition: opacity 0.3s ease;
        cursor: pointer;
      }
      &:active {
        filter: saturate(1.4);
        transition: filter 0.1s ease;
      }
    `}
`;

export const ContentStyled = styled.span`
  color: #fcf2cd;
  z-index: 1;
  display: block;
  font-size: 4.75rem;
  text-align: center;
  line-height: 151px;
  font-family: var(--font-family-tertiary);
  text-shadow: 0 2px 0 rgb(149 50 9 / 58%), 0 3px 4px rgb(129 41 8 / 20%),
    0 0 6px rgb(92 26 4 / 51%);
  letter-spacing: -2px;
  text-transform: uppercase;
  transition: color ease-in-out 1000ms;
`;
