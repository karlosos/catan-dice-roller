import styled, { keyframes } from "styled-components";

export const scaleDown = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
    opacity: 0;
  }
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
