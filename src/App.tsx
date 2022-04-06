import { useKeyPress } from "hooks/useKeyPress";
import { useState } from "react";
import { RollerView } from "stories/templates/RollerView";
import clickSfx from "stories/assets/click.ogg";
import rollSfx from "stories/assets/dice_roll.ogg";
import robberSfx from "stories/assets/robber_normalized.ogg";
import useSound from "use-sound";
import { DICE_FACES } from "utils/consts";
import { randomValueFromArray } from "utils/random";


function App() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [showDice, setShowDice] = useState(false);
  const [showRobber, setShowRobber] = useState(false);
  const [isRollButtonDisabled, setIsRollButtonDisabled] = useState(false);
  const [playRollSfx] = useSound(rollSfx);
  const [playClickSfx] = useSound(clickSfx, { volume: 0.3 });
  const [playRobberSfx] = useSound(robberSfx)

  const handleRoll = () => {
    if (isRollButtonDisabled) {
      return;
    }

    setIsRollButtonDisabled(true);
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
        setIsRollButtonDisabled(false);
      }, 3000);
    }, 500);
  };

  useKeyPress(() => {
    if (!isRollButtonDisabled) {
      playClickSfx();
      handleRoll();
    }
  }, ["Enter", " "]);

  return (
    <RollerView
      dice1={dice1}
      dice2={dice2}
      showDice={showDice}
      showRobber={showRobber}
      isRollButtonDisabled={isRollButtonDisabled}
      onRollButtonClick={handleRoll}
    />
  );
}

export default App;
