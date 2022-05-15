export interface RollerViewProps {
  die1: number;
  die2: number;
  showDice: boolean;
  showRobber: boolean;
  onRollButtonClick: () => void;
  isRollButtonDisabled: boolean;
}
