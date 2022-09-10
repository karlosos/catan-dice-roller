import { PlayerColor } from "stories/atoms/PlayerColor";

export interface RollerViewProps {
  die1: number,
  die2: number,
  showDice: boolean,
  showRobber: boolean,
  playerIndicatorData: {
    showPlayerIndicator: boolean,
    currentPlayerName?: string,
    currentPlayerColor?: PlayerColor,
    nextPlayerName?: string,
    nextPlayerColor?: PlayerColor,
  },
  onRollButtonClick: () => void,
  isRollButtonDisabled: boolean,
}