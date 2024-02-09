import { Die } from "stories/atoms";
import {
  Die1Styled,
  Die2Styled,
  DiceContainerStyled,
  scaleDown1,
  scaleDown2,
  slideTop1,
  slideTop2,
  TokenContainer,
  slideTopNumericalValue,
  scaleDownNumericalValue,
  Token,
  Pip,
  Pips,
  TokenValue,
} from "./DiceContainer.style";

export const DiceContainer: React.FC<{
  die1: number;
  die2: number;
  showDice: boolean;
}> = ({ die1, die2, showDice }) => {
  const sum = die1 + die2;
  const isRed = sum === 8 || sum === 6;

  return (
    <>
      <DiceContainerStyled>
        <Die1Styled animationName={showDice ? slideTop1 : scaleDown1}>
          <Die value={die1} />
        </Die1Styled>
        <Die2Styled animationName={showDice ? slideTop2 : scaleDown2}>
          <Die value={die2} />
        </Die2Styled>
      </DiceContainerStyled>
      <TokenContainer
        animationName={
          showDice ? slideTopNumericalValue : scaleDownNumericalValue
        }
      >
        <Token>
          <TokenValue isRed={isRed}>{sum}</TokenValue>
          <Pips>
            {[...Array(valueToPips(sum))].map((_, idx) => (
              <Pip isRed={isRed} key={idx} />
            ))}
          </Pips>
        </Token>
      </TokenContainer>
    </>
  );
};

const valueToPips = (value: number): number => {
  switch (value) {
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
      return 3;
    case 5:
      return 4;
    case 6:
      return 5;
    case 8:
      return 5;
    case 9:
      return 4;
    case 10:
      return 3;
    case 11:
      return 2;
    case 12:
      return 1;
    default:
      return 0;
  }
};
