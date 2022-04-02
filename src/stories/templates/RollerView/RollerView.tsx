import { useState } from "react";
import { CatanButton } from "stories/atoms";
import { DiceContainer } from "stories/molecules/DiceContainer";
import useSound from "use-sound";
import { DICE_FACES } from "utils/consts";
import { randomValueFromArray } from "utils/random";

import rollSfx from "../../assets/dice_roll.ogg";
import { ButtonContainer, Container } from "./RollerView.style";

export const RollerView: React.VFC = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [showDice, setShowDice] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [playRollSfx] = useSound(rollSfx);

  const handleRoll = () => {
    if (isButtonDisabled) {
      return;
    }

    setIsButtonDisabled(true);
    setShowDice(false);

    setTimeout(() => {
      playRollSfx();
      setDice1(randomValueFromArray(DICE_FACES));
      setDice2(randomValueFromArray(DICE_FACES));
      setShowDice(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 3000);
    }, 500);
  };

  return (
    <Container>
      <DiceContainer dice1={dice1} dice2={dice2} showDice={showDice} />
      <ButtonContainer>
        <CatanButton onClick={handleRoll} isDisabled={isButtonDisabled}>Roll</CatanButton>
      </ButtonContainer>
    </Container>
  );
};
