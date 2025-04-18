import { Robber } from "ui/atoms/Robber";
import { DiceContainer } from "ui/molecules/DiceContainer";
import styled from "styled-components";

import { BottomContainer, Container } from "./RollerView.style";
import { RollerViewProps } from "./types";
import { PrimaryButton } from "ui/atoms";

export const RollerView: React.FC<RollerViewProps> = ({
  die1,
  die2,
  showDice,
  showRobber,
  isRollButtonDisabled,
  onRollButtonClick,
}) => (
  <Container>
    <OutputContainer>
      <DiceContainer die1={die1} die2={die2} showDice={showDice} />
      <Robber showRobber={showRobber} />
    </OutputContainer>
    <BottomContainer>
      <PrimaryButton
        onClick={onRollButtonClick}
        isDisabled={isRollButtonDisabled}
      >
        Roll
      </PrimaryButton>
    </BottomContainer>
  </Container>
);

const OutputContainer = styled.div`
  flex-grow: 1;
  display: grid;
`;
