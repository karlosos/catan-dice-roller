import styled, { css, keyframes } from "styled-components";

export const scaleDown = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
    opacity: 0;
  }
`;

export const animationOut = css`
  animation-name: ${scaleDown};
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-fill-mode: both;
`;

export const scaleUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const animationIn = css`
  animation-name: ${scaleUp};
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0, 0.4, 0.085, 1);
  animation-fill-mode: both;
`;

export const RobberContainer = styled.div`
  grid-area: 1 / 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  @media only screen and (max-width: 600px) {
    transform: scale(0.7);
  }
`;

export const RobberStyled = styled.img<{ animationDirection: "in" | "out" }>`
  ${(props) => {
    if (props.animationDirection === "in") {
      return animationIn;
    } else {
      return animationOut;
    }
  }}
`;
