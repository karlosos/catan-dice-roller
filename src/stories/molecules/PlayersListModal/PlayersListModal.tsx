import { useEffect } from "@storybook/addons";
import { useState } from "react";
import { PlayerColor } from "stories/atoms/PlayerColor";
import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  top: 16px;
  right: 20px;
  left: 20px;
  bottom: 16px;

  background: linear-gradient(
    180deg,
    rgba(109, 6, 0, 0.98) 0%,
    rgba(15, 7, 2, 0.98) 100%
  );
  color: white;
  border: 2px solid black;
  border-radius: 4px;
  font-family: Roboto;
  overflow: auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  & > h3 {
    flex-grow: 1;
    text-align: center;
  }
`;

const HeaderDivider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 50.87%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  padding: 16px;
`;

const CloseButton = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 200px;
  padding: 4px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const PlaceholderHeader = styled.div`
  width: 32px;
  height: 32px;
`;

const PlayerColorStyled = styled.div<{ color: PlayerColor }>`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.color};
  border-radius: 4px;
  margin-right: 8px;
`;

const PlayerList = styled.div`
  margin-top: 16px;
`;

const PlayerRow = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 8px;
`;

const PlayerName = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const RowLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ActionButtons = styled.div`
  margin-left: auto;
`;

const Button = styled.button`
  font-size: 22px;
  padding: 8px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const NewPlayerForm = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const PlayerNameInput = styled.input`
  padding: 8px;
  font-size: 22px;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 22px;
`;

export const PlayersListModal: React.FC<{
  onModalClose: () => void;
  onPlayersListSave: (
    players: { id: number; name: string; color: PlayerColor }[]
  ) => void;
  playersList: { id: number; name: string; color: PlayerColor }[];
}> = ({ onModalClose, onPlayersListSave, playersList }) => {
  const [playerName, setPlayerName] = useState<string>("");
  const usedPlayerColors = playersList.map((player) => player.color);
  const [playerColor, setPlayerColor] = useState<PlayerColor | undefined>();

  const handleAddPlayer = () => {
    if (playerName === "" || playerColor === undefined) {
      return;
    }

    const newPlayers = [
      ...playersList,
      {
        id: Date.now(),
        name: playerName,
        color: playerColor,
      },
    ];
    onPlayersListSave(newPlayers);
    setPlayerName("");
    setPlayerColor(undefined);
  };

  const handleRemovePlayer = (id: number) => {
    const newPlayers = playersList.filter((player) => player.id !== id);
    onPlayersListSave(newPlayers);
  };

  const handleMoveUp = (idx: number) => {
    if (idx === 0) return;

    const currentPlayer = playersList[idx];
    const playerAbove = playersList[idx - 1];

    const newPlayers = [...playersList];
    newPlayers[idx] = playerAbove;
    newPlayers[idx - 1] = currentPlayer;

    onPlayersListSave(newPlayers);
  };

  const handleMoveDown = (idx: number) => {
    if (idx === playersList.length - 1) return;

    const player1 = playersList[idx];
    const player2 = playersList[idx + 1];

    const newPlayers = [...playersList];
    newPlayers[idx] = player2;
    newPlayers[idx + 1] = player1;

    onPlayersListSave(newPlayers);
  };

  const handleMakeFirst = (idx: number) => {
    const firstHalf = playersList.slice(idx, undefined);
    const secondHalf = playersList.slice(0, idx)
    const newPlayers = [...firstHalf, ...secondHalf];
    onPlayersListSave(newPlayers);
  }

  return (
    <Modal>
      <Container>
        <Content>
          <Header>
            <PlaceholderHeader />
            <h3>Players List</h3>
            <CloseButton onClick={onModalClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </CloseButton>
          </Header>
          <HeaderDivider />
          <PlayerList>
            {playersList.map((player, idx) => (
              <PlayerRow>
                <RowLeft>
                  <PlayerColorStyled color={player.color} />
                  <PlayerName>{player.name}</PlayerName>
                </RowLeft>
                <ActionButtons>
                  <Button onClick={() => handleRemovePlayer(player.id)}>
                    🗑️
                  </Button>
                  <Button onClick={() => handleMoveUp(idx)}>🔼</Button>
                  <Button onClick={() => handleMoveDown(idx)}>🔽</Button>
                  <Button onClick={() => handleMakeFirst(idx)}>1️⃣</Button>
                </ActionButtons>
              </PlayerRow>
            ))}
          </PlayerList>

          {playersList.length < 6 && (
            <NewPlayerForm>
              <FormRow>
                <label htmlFor="playerName">Player Name</label>
                <PlayerNameInput
                  id="playerName"
                  type="text"
                  value={playerName}
                  onChange={(event) => setPlayerName(event.target.value)}
                />
              </FormRow>
              <FormRow>
                <label htmlFor="playerColor">Color</label>
                <SelectPlayerColor
                  id="playerColor"
                  key={playerColor}
                  value={playerColor}
                  usedPlayerColors={usedPlayerColors}
                  onChange={(playerColor: PlayerColor) =>
                    setPlayerColor(playerColor)
                  }
                />
              </FormRow>
              <Button
                onClick={handleAddPlayer}
                disabled={playerColor === undefined || playerName === ""}
              >
                Add Player
              </Button>
            </NewPlayerForm>
          )}
        </Content>
      </Container>
    </Modal>
  );
};

const SelectPlayerColor: React.FC<{
  value: PlayerColor | undefined;
  onChange: (value: PlayerColor) => void;
  id: string;
  usedPlayerColors: PlayerColor[];
}> = ({ value, onChange, id, usedPlayerColors }) => {
  const availableColors = playerColors.filter(
    (color) => !usedPlayerColors.includes(color.color)
  );

  return (
    <Select
      id={id}
      value={value}
      onChange={(event) => onChange(event.target.value as PlayerColor)}
    >
      <option disabled selected style={{ display: "none" }}></option>
      {availableColors.map((color) => (
        <option value={color.color}>{color.label}</option>
      ))}
    </Select>
  );
};

const playerColors = [
  {
    color: PlayerColor.BLUE,
    label: "Blue",
  },
  {
    color: PlayerColor.BROWN,
    label: "Brown",
  },
  {
    color: PlayerColor.GREEN,
    label: "Green",
  },
  {
    color: PlayerColor.WHITE,
    label: "White",
  },
  {
    color: PlayerColor.RED,
    label: "Red",
  },
  {
    color: PlayerColor.ORANGE,
    label: "Orange",
  },
];
