import React from "react";
import { testId } from "testUtils/testId";
import { DieStyled, Inner, Pip } from "./Die.style";

export const Die: React.FC<{ value: number }> = ({ value }) => {
  const pips =
    Number.isInteger(value) && value > 0 && value < 7
      ? Array(value)
          .fill(0)
          .map((_, i) => <Pip key={i} data-testid={testId.pip} />)
      : null;

  return (
    <DieStyled>
      <Inner>{pips}</Inner>
    </DieStyled>
  );
};
