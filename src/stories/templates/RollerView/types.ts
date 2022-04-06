export interface RollerViewProps {
  dice1: number,
  dice2: number,
  showDice: boolean,
  showRobber: boolean,
  onRollButtonClick: () => void,
  isRollButtonDisabled: boolean,
}