import { PrimaryButton } from "stories/atoms";
import { PlayerIndicator } from "stories/atoms/PlayerIndicator";
import { Robber } from "stories/atoms/Robber";
import { DiceContainer } from "stories/molecules/DiceContainer";
import styled from "styled-components";

import { ButtonContainer, Container } from "./RollerView.style";
import { RollerViewProps } from "./types";

export const RollerView: React.FC<RollerViewProps> = ({
  die1,
  die2,
  showDice,
  showRobber,
  isRollButtonDisabled,
  onRollButtonClick,
  playerIndicatorData,
}) => (
  <Container>
    {playerIndicatorData.showPlayerIndicator && (
      <PlayerIndicator
        currentPlayerName={playerIndicatorData.currentPlayerName!}
        currentPlayerColor={playerIndicatorData.currentPlayerColor!}
        nextPlayerName={playerIndicatorData.nextPlayerName!}
        nextPlayerColor={playerIndicatorData.nextPlayerColor!}
      />
    )}
    <OutputContainer>
      <DiceContainer die1={die1} die2={die2} showDice={showDice} />
      <Robber showRobber={showRobber} />
    </OutputContainer>
    <ButtonContainer>
      <PrimaryButton
        onClick={onRollButtonClick}
        isDisabled={isRollButtonDisabled}
      >
        Roll
      </PrimaryButton>
    </ButtonContainer>
  </Container>
);

const OutputContainer = styled.div`
  flex-grow: 1;
  display: grid;
`;
