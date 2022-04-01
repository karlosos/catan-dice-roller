import { Dice } from "stories/atoms";
import styled, { keyframes } from "styled-components";

const slideTop1 = keyframes`
  0% {
    transform: translateY(300px) rotate(0deg);
  }
  100% {
    transform: translateY(0px) rotate(-5deg);
  }
`;

const slideTop2 = keyframes`
  0% {
    transform: translateY(300px) rotate(0deg);
  }
  100% {
    transform: translateY(-35px) rotate(25deg);
  }
`;

const DiceContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 50px;
`;

const Dice1Styled = styled.div`
  animation-name: ${slideTop1};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0, 0.4, 0.085, 1);
  animation-fill-mode: both;
`;

const Dice2Styled = styled.div`
  animation-name: ${slideTop2};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0, 0.53, 0.09, 1);
  animation-fill-mode: both;
`;

export const DiceContainer: React.FC<{ dice1: number; dice2: number }> = ({
  dice1,
  dice2,
}) => {
  return (
    <DiceContainerStyled>
      <Dice1Styled>
        <Dice value={dice1} />
      </Dice1Styled>
      <Dice2Styled>
        <Dice value={dice2} />
      </Dice2Styled>
    </DiceContainerStyled>
  );
};
