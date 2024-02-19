import { useKeyPress } from "hooks/useKeyPress";
import { useState } from "react";
import { RollerView } from "ui/templates/RollerView";
import clickSfx from "./ui/assets/click.ogg";
import rollSfx from "./ui/assets/dice_roll.ogg";
import robberSfx from "./ui/assets/robber_normalized.ogg";
import useSound from "use-sound";
import { DIE_FACES } from "utils/consts";
import { randomValueFromArray } from "utils/random";
import { useWakeLock } from "utils/use-wake-lock";

function App() {
  useWakeLock();

  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(1);
  const [showDice, setShowDice] = useState(false);
  const [showRobber, setShowRobber] = useState(false);
  const [isRollButtonDisabled, setIsRollButtonDisabled] = useState(false);
  const [playRollSfx] = useSound(rollSfx);
  const [playClickSfx] = useSound(clickSfx, { volume: 0.3 });
  const [playRobberSfx] = useSound(robberSfx);

  const handleRoll = () => {
    if (isRollButtonDisabled) {
      return;
    }

    setIsRollButtonDisabled(true);
    setShowDice(false);
    setShowRobber(false);

    setTimeout(() => {
      playRollSfx();
      const die1Value = randomValueFromArray(DIE_FACES);
      const die2Value = randomValueFromArray(DIE_FACES);
      setDie1(die1Value);
      setDie2(die2Value);
      setShowDice(true);

      // Show robber icon
      setTimeout(() => {
        if (die1Value + die2Value === 7) {
          setShowDice(false);
          playRobberSfx();
          setShowRobber(true);
        }
      }, 1500);

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
      die1={die1}
      die2={die2}
      showDice={showDice}
      showRobber={showRobber}
      isRollButtonDisabled={isRollButtonDisabled}
      onRollButtonClick={handleRoll}
    />
  );
}

export default App;
