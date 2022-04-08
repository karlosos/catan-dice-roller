import React from "react";
import { DiceStyled, Inner, Pip } from "./Dice.style";

export const Dice: React.FC<{ value: number }> = ({ value }) => {
  let pips = Number.isInteger(value)
    ? Array(value)
        .fill(0)
        .map((_, i) => <Pip key={i} />)
    : null;

  return (
    <DiceStyled>
      <Inner>{pips}</Inner>
    </DiceStyled>
  );
};
