import { Die } from "ui/atoms";
import {
  Die1Styled,
  Die2Styled,
  DiceContainerStyled,
  NumberTokenContainer,
} from "./DiceContainer.style";
import { NumberToken } from "ui/atoms/NumberToken";

export interface DiceContainerProps {
  die1: number;
  die2: number;
  showDice: boolean;
}

export const DiceContainer: React.FC<DiceContainerProps> = ({
  die1,
  die2,
  showDice,
}) => {
  return (
    <>
      <DiceContainerStyled>
        <Die1Styled $animationName={showDice ? "in" : "out"}>
          <Die value={die1} />
        </Die1Styled>
        <Die2Styled $animationName={showDice ? "in" : "out"}>
          <Die value={die2} />
        </Die2Styled>

        <NumberTokenContainer $animationName={showDice ? "in" : "out"}>
          <NumberToken value={die1 + die2} />
        </NumberTokenContainer>
      </DiceContainerStyled>
    </>
  );
};
