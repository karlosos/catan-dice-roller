import styled, { css } from "styled-components";

import backgroundImageRepeat from "./background-repeat.png";

const backgroundCss = css`
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: url(${backgroundImageRepeat});
  background-position: center;
  background-size: auto 100%;
  background-repeat: repeat-x;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  ${backgroundCss};
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  @media only screen and (max-width: 600px) {
    transform: scale(0.5);
  }
`;
