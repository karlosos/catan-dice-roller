import styled, { css, Keyframes, keyframes } from "styled-components";

export const slideTop1 = keyframes`
  0% {
    transform: translateY(300px) rotate(0deg);
  }
  100% {
    transform: translateY(0px) rotate(-5deg);
  }
`;

export const slideTop2 = keyframes`
  0% {
    transform: translateY(300px) rotate(0deg);
  }
  100% {
    transform: translateY(-35px) rotate(25deg);
  }
`;

export const scaleDown1 = keyframes`
  0% {
    transform: translateY(0px) rotate(-5deg);
  }
    100% {
        transform: scale(0.5) rotate(-5deg);
        opacity: 0;
    }
`;

export const scaleDown2 = keyframes`
    0% {
        transform: translateY(-35px) rotate(25deg);
    }
    100% {
        transform: translateY(-35px) scale(0.5) rotate(25deg);
        opacity: 0;
    }
`;

export const DiceContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 50px;

    @media only screen and (max-width: 600px) {
      transform: scale(0.7);
  }
`;

export const Dice1Styled = styled.div<{ animationName: Keyframes }>`
  animation-name: ${(props) => props.animationName};
  ${(props) => {
    if (props.animationName === scaleDown1) {
      return css`
        animation-duration: 0.2s;
        animation-iteration-count: 1;
        animation-timing-function: linear;
        animation-fill-mode: both;
      `;
    } else {
      return css`
        animation-duration: 1.5s;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0, 0.4, 0.085, 1);
        animation-fill-mode: both;
      `;
    }
  }}
`;

export const Dice2Styled = styled.div<{ animationName: Keyframes }>`
  animation-name: ${(props) => props.animationName};
  ${(props) => {
    if (props.animationName === scaleDown2) {
      return css`
        animation-duration: 0.2s;
        animation-iteration-count: 1;
        animation-timing-function: linear;
        animation-fill-mode: both;
      `;
    } else {
      return css`
        animation-duration: 1.5s;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0, 0.53, 0.09, 1);
        animation-fill-mode: both;
      `;
    }
  }}
`;