import { Dice } from "stories/atoms";
import {
  Dice1Styled,
  Dice2Styled,
  DiceContainerStyled,
  scaleDown1,
  scaleDown2,
  slideTop1,
  slideTop2,
} from "./DiceContainer.style";

export const DiceContainer: React.FC<{
  dice1: number;
  dice2: number;
  showDice: boolean;
}> = ({ dice1, dice2, showDice }) => {
  return (
    <DiceContainerStyled>
      <Dice1Styled animationName={showDice ? slideTop1 : scaleDown1}>
        <Dice value={dice1} />
      </Dice1Styled>
      <Dice2Styled animationName={showDice ? slideTop2 : scaleDown2}>
        <Dice value={dice2} />
      </Dice2Styled>
    </DiceContainerStyled>
  );
};
