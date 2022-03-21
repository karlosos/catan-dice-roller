import React from "react";
import styled from "styled-components";

const DiceStyled = styled.div`
  width: 150px;
  height: 150px;
  background-color: #eee;
  border-radius: 10px;
  border: 2px solid #292829;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
   transform: rotate(12deg);
`;

const Inner = styled.div`
    background-color: white;
    border-radius: 40px;
    width: 100%;
    height: 100%;
`;

export const Dice: React.FC = () => {
  return (
    <DiceStyled>
      <Inner>
          1
      </Inner>
    </DiceStyled>
  );
};
