import { Die } from "stories/atoms";
import {
  Die1Styled,
  Die2Styled,
  DiceContainerStyled,
  scaleDown1,
  scaleDown2,
  slideTop1,
  slideTop2,
  NumberTokenContainer,
  slideTopNumberToken,
  scaleDownNumberToken,
} from "./DiceContainer.style";
import { NumberToken } from "stories/atoms/NumberToken";

export const DiceContainer: React.FC<{
  die1: number;
  die2: number;
  showDice: boolean;
}> = ({ die1, die2, showDice }) => {
  return (
    <>
      <DiceContainerStyled>
        <Die1Styled animationName={showDice ? slideTop1 : scaleDown1}>
          <Die value={die1} />
        </Die1Styled>
        <Die2Styled animationName={showDice ? slideTop2 : scaleDown2}>
          <Die value={die2} />
        </Die2Styled>

        <NumberTokenContainer
          animationName={showDice ? slideTopNumberToken : scaleDownNumberToken}
        >
          <NumberToken value={die1 + die2} />
        </NumberTokenContainer>
      </DiceContainerStyled>
    </>
  );
};
