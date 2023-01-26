import { useKeyPress } from "hooks/useKeyPress";
import { useState } from "react";
import { RollerView } from "stories/templates/RollerView";
import clickSfx from "stories/assets/click.ogg";
import rollSfx from "stories/assets/dice_roll.ogg";
import robberSfx from "stories/assets/robber_normalized.ogg";
import useSound from "use-sound";
import { DIE_FACES } from "utils/consts";
import { randomValueFromArray } from "utils/random";
import { PlayerColor } from "stories/atoms/PlayerColor";


function App() {
  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(1);
  const [showDice, setShowDice] = useState(false);
  const [showRobber, setShowRobber] = useState(false);
  const [isRollButtonDisabled, setIsRollButtonDisabled] = useState(false);
  const [playRollSfx] = useSound(rollSfx);
  const [playClickSfx] = useSound(clickSfx, { volume: 0.3 });
  const [playRobberSfx] = useSound(robberSfx)

  const [playersList, setPlayersList] = useState<{ id: number; name: string; color: PlayerColor }[]>([]);
  const [showPlayersListModal, setShowPlayersListModal] = useState(false);

  const [currentPlayerIndex, setCurrentPlayerId] = useState(0);
  const [isFirstMove, setIsFirstMove] = useState(true);

  const handleRoll = () => {
    if (isRollButtonDisabled) {
      return;
    }

    setIsRollButtonDisabled(true);
    setShowDice(false);
    setShowRobber(false);
    if (playersList.length && !isFirstMove) {
      setCurrentPlayerId((currentPlayerIndex + 1) % playersList.length);
    }
    setIsFirstMove(false);

    setTimeout(() => {
      playRollSfx();
      const die1Value = randomValueFromArray(DIE_FACES)
      const die2Value = randomValueFromArray(DIE_FACES)
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
      }, 1500)

      // Enable button again after cooldown
      setTimeout(() => {
        setIsRollButtonDisabled(false);
      }, 3000);
    }, 500);
  };

  const handlePlayersListSave = (players:  {id: number; name: string; color: PlayerColor}[] ) => {
    setPlayersList(players);
    setCurrentPlayerId(0);
    setIsFirstMove(true);
  }

  useKeyPress(() => {
    if (!isRollButtonDisabled && !showPlayersListModal) {
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
      playerIndicatorData={{
        isFirstMove: isFirstMove,
        showPlayerIndicator: playersList.length > 0,
        currentPlayerName: playersList.length ? playersList[currentPlayerIndex].name : undefined,
        currentPlayerColor: playersList.length ? playersList[currentPlayerIndex].color : undefined,
        nextPlayerName: playersList.length ? playersList[(currentPlayerIndex + 1) % playersList.length].name : undefined,
        nextPlayerColor: playersList.length ? playersList[(currentPlayerIndex + 1) % playersList.length].color : undefined,
      }}
      showPlayersListModal={showPlayersListModal}
      onModalClose={() => setShowPlayersListModal(false)}
      onModalOpen={() => setShowPlayersListModal(true)}
      playersList={playersList}
      onPlayersListSave={(players) => handlePlayersListSave(players)}
    />
  );
}

export default App;
