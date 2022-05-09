import styled, { css, Keyframes } from "styled-components";
import { testId } from "testUtils/testId";
import robberSrc from "../../assets/robber.png";
import { RobberContainer, scaleDown, scaleUp } from "./Robber.style";

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
  showRobber,
}) => {
  const animationName = showRobber ? scaleUp : scaleDown;
  return (
    <RobberContainer>
      <RobberStyled
        src={robberSrc}
        alt="robber"
        animationName={animationName}
        data-testid={testId.robber}
      />
    </RobberContainer>
  );
};
