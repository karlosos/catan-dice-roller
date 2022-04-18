import React from "react";
import { testId } from "testUtils/testId";
import { DiceStyled, Inner, Pip } from "./Dice.style";

export const Dice: React.FC<{ value: number }> = ({ value }) => {
  let pips = Number.isInteger(value) && value > 0 && value < 7
    ? Array(value)
        .fill(0)
        .map((_, i) => <Pip key={i} data-testid={testId.pip} />)
    : null;

  return (
    <DiceStyled>
      <Inner>{pips}</Inner>
    </DiceStyled>
  );
};
