import { PlayerColor } from "stories/atoms/PlayerColor";

export interface RollerViewProps {
  die1: number,
  die2: number,
  showDice: boolean,
  showRobber: boolean,
  playerIndicatorData: {
    isFirstMove?: boolean,
    showPlayerIndicator: boolean,
    currentPlayerName?: string,
    currentPlayerColor?: PlayerColor,
    nextPlayerName?: string,
    nextPlayerColor?: PlayerColor,
  },
  showPlayersListModal: boolean,
  onRollButtonClick: () => void,
  isRollButtonDisabled: boolean,
  onModalOpen: () => void,
  onModalClose: () => void,
  onPlayersListSave: (players: { id: number; name: string; color: PlayerColor }[]) => void
  playersList: { id: number; name: string; color: PlayerColor }[];
}
