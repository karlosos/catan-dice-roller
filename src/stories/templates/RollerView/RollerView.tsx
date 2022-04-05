import { useKeyPress } from "hooks/useKeyPress";
import { useRef, useState } from "react";
import { CatanButton } from "stories/atoms";
import { Robber } from "stories/atoms/Robber";
import { DiceContainer } from "stories/molecules/DiceContainer";
import styled from "styled-components";
import useSound from "use-sound";
import { DICE_FACES } from "utils/consts";
import { randomValueFromArray } from "utils/random";

import clickSfx from "../../assets/click.ogg";
import rollSfx from "../../assets/dice_roll.ogg";
import robberSfx from "../../assets/robber_normalized.ogg";
import { ButtonContainer, Container } from "./RollerView.style";

export const RollerView: React.VFC = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [showDice, setShowDice] = useState(false);
  const [showRobber, setShowRobber] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const isButtonDisabledRef = useRef<boolean>();
  isButtonDisabledRef.current = isButtonDisabled;
  const [playRollSfx] = useSound(rollSfx);
  const [playClickSfx] = useSound(clickSfx, { volume: 0.3 });
  const [playRobberSfx] = useSound(robberSfx)

  const handleRoll = () => {
    if (isButtonDisabled) {
      return;
    }

    setIsButtonDisabled(true);
    setShowDice(false);
    setShowRobber(false);

    setTimeout(() => {
      playRollSfx();
      const dice1Value = randomValueFromArray(DICE_FACES)
      const dice2Value = randomValueFromArray(DICE_FACES)
      setDice1(dice1Value);
      setDice2(dice2Value);
      setShowDice(true);

      // Show robber icon
      setTimeout(() => {
        if (dice1Value + dice2Value === 7) {
          setShowDice(false);
          playRobberSfx();
          setShowRobber(true);
        }
      }, 1500)

      // Enable button again after cooldown
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 3000);
    }, 500);
  };

  useKeyPress(() => {
    if (!isButtonDisabled) {
      playClickSfx();
      handleRoll();
    }
  }, ["Enter", " "]);

  return (
    <Container>
      <OutputContainer>
        <DiceContainer dice1={dice1} dice2={dice2} showDice={showDice} />
        <Robber showRobber={showRobber} />
      </OutputContainer>
      <ButtonContainer>
        <CatanButton onClick={handleRoll} isDisabled={isButtonDisabled}>
          Roll
        </CatanButton>
      </ButtonContainer>
    </Container>
  );
};

const OutputContainer = styled.div`
  flex-grow: 1;
  display: grid;
`