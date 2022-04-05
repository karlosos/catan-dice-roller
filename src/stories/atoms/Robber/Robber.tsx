import styled, { css, Keyframes, keyframes } from "styled-components";
import robberSrc from "../../assets/robber.png";

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

const RobberContainer = styled.div`
  grid-area: 1 / 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

const RobberStyled = styled.img<{ animationName: Keyframes }>`
  animation-name: ${(props) => props.animationName};
  ${(props) => {
    if (props.animationName === scaleDown) {
      return css`
        animation-duration: 0.2s;
        animation-iteration-count: 1;
        animation-timing-function: linear;
        animation-fill-mode: both;
      `;
    } else {
      return css`
        animation-duration: 0.3s;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0, 0.4, 0.085, 1);
        animation-fill-mode: both;
      `;
    }
  }}
`;

export const Robber: React.VFC<{ showRobber?: boolean }> = ({
  showRobber = true,
} = {}) => {
  const animationName = showRobber ? scaleUp : scaleDown;
  return (
    <RobberContainer>
      <RobberStyled
        src={robberSrc}
        alt="robber"
        animationName={animationName}
      />
    </RobberContainer>
  );
};
