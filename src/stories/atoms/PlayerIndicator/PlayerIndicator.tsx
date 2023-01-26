import React from "react";
import styled from "styled-components";
import { PlayerColor } from "../PlayerColor";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #242425, #313330);
  color: white;
  margin-top: 24px;
  border: 2px solid black;
  border-radius: 4px;
  font-family: Roboto;
`;

const CurrentPlayerColor = styled.div<{ color: PlayerColor }>`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.color};
  border-radius: 4px;
  margin-left: 8px;
`;

const RightSection = styled.div`
  margin-left: 8px;
  padding-left: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  border-left: 2px solid black;
  border-right: 2px solid black;
`;

const SettingsButtonSection = styled.div`
  padding-left: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  font-size: 22px;
  &:hover {
    backdrop-filter: brightness(1.25);
  }
`;

const CurrentPlayerName = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const NextPlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NextPlayerLabel = styled.span`
  color: rgba(255, 255, 255, 0.4);
`;

const NextPlayerName = styled.span`
  margin-left: 4px;
`;

const NextPlayerColor = styled.div<{ color: PlayerColor }>`
  margin-left: 4px;
  background-color: ${(props) => props.color};
  width: 12px;
  height: 12px;
  border-radius: 2px;
`;

export const PlayerIndicator: React.FC<{
  showPlayerIndicator: boolean;
  isFirstMove?: boolean;
  currentPlayerName?: string;
  currentPlayerColor?: PlayerColor;
  nextPlayerName?: string;
  nextPlayerColor?: PlayerColor;
  handleOpenModal: () => void;
}> = ({
  showPlayerIndicator,
  isFirstMove,
  currentPlayerName,
  currentPlayerColor,
  nextPlayerName,
  nextPlayerColor,
  handleOpenModal,
}) => {
  return (
    <Container>
      {showPlayerIndicator && (
        <>
          <CurrentPlayerColor color={currentPlayerColor!} />
          <RightSection>
            {!isFirstMove && <CurrentPlayerName>{currentPlayerName}</CurrentPlayerName>}
            <NextPlayerContainer>
              <NextPlayerLabel>{isFirstMove ? 'First move:' : 'Next roll:'}</NextPlayerLabel>
              <NextPlayerName>{isFirstMove ? currentPlayerName : nextPlayerName}</NextPlayerName>
              <NextPlayerColor color={isFirstMove ? currentPlayerColor! : nextPlayerColor!} />
            </NextPlayerContainer>
          </RightSection>
        </>
      )}
      <SettingsButtonSection onClick={handleOpenModal}>{showPlayerIndicator ? "⚙️" : "Configure Players 👨"}</SettingsButtonSection>
    </Container>
  );
};
