import React from "react";
import styled from "styled-components";

const DiceStyled = styled.div`
  width: 150px;
  height: 150px;
  background-color: #D5D3D8;
  border-radius: 10px;
  border: 2px solid #272527;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const Inner = styled.div`
  background-color: #FFFDFE;
  border-radius: 40px;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-areas:
    "a . c"
    "e g f"
    "d . b";

  flex: 0 0 auto;
`;

const Pip = styled.div`
  display: block;
  align-self: center;
  justify-self: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #272527;
  box-shadow: inset 0 3px #111, inset 0 -3px #555;

  &:nth-child(2) {
    grid-area: b;
  }

  &:nth-child(3) {
    grid-area: c;
  }

  &:nth-child(4) {
    grid-area: d;
  }

  &:nth-child(5) {
    grid-area: e;
  }

  &:nth-child(6) {
    grid-area: f;
  }

  &:nth-child(odd):last-child {
    grid-area: g;
  }
`;

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
