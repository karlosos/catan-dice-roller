import { useState } from "react";
import { CatanButton } from "stories/atoms";
import styled, { css, keyframes } from "styled-components";
import { DiceContainer } from "./DiceContainer";
import useSound from "use-sound";

import rollSfx from "../../assets/dice_roll.ogg";
import clickSfx from "../../assets/click.ogg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ede2ab;
  height: 100%;
  width: 100%;
  position: absolute;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

const ButtonContainer = styled.div<{ isButtonDisabled: boolean }>`
  margin-bottom: 50px;
  ${(props) =>
    props.isButtonDisabled &&
    css`
      cursor: not-allowed;
      filter: grayscale(80%);
    `}

  transition: filter 0.5s ease;
  transition-delay: 1s;

  @media only screen and (max-width: 600px) {
    transform: scale(0.5);
  }
`;

export const RollerView: React.VFC = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [showDice, setShowDice] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [playRollSfx] = useSound(rollSfx);
  const [playClickSfx] = useSound(clickSfx);

  const handleRoll = () => {
    if (isButtonDisabled) {
      return;
    }

    setIsButtonDisabled(true);
    setShowDice(false);
    playClickSfx();
    setTimeout(() => {
      playRollSfx();
      setDice1(((dice1 + 1) % 6) + 1);
      setDice2(((dice2 + 2) % 6) + 1);
      setShowDice(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 3000);
    }, 500);
  };

  return (
    <Container>
      <DiceContainer dice1={dice1} dice2={dice2} showDice={showDice} />
      <ButtonContainer onClick={handleRoll} isButtonDisabled={isButtonDisabled}>
        <CatanButton>Roll</CatanButton>
      </ButtonContainer>
    </Container>
  );
};
