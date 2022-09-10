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

const CurrentPlayerColor = styled.div<{ color: PlayerColor}>`
  width: 32px;
  height: 32px;
  background-color: ${props => props.color};
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

const NextPlayerColor = styled.div<{ color: PlayerColor}>`
  margin-left: 4px;
  background-color: ${props => props.color};
  width: 12px;
  height: 12px;
  border-radius: 2px;
`;

export const PlayerIndicator: React.FC<{
  currentPlayerName: string;
  currentPlayerColor: PlayerColor;
  nextPlayerName: string;
  nextPlayerColor: PlayerColor;
}> = ({
  currentPlayerName,
  currentPlayerColor,
  nextPlayerName,
  nextPlayerColor,
}) => {
  return (
    <Container>
      <CurrentPlayerColor color={currentPlayerColor}/>
      <RightSection>
        <CurrentPlayerName>{currentPlayerName}</CurrentPlayerName>
        <NextPlayerContainer>
          <NextPlayerLabel>Next player:</NextPlayerLabel>
          <NextPlayerName>{nextPlayerName}</NextPlayerName>
          <NextPlayerColor color={nextPlayerColor}/>
        </NextPlayerContainer>
      </RightSection>
    </Container>
  );
};
