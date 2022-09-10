import { useState } from "react";
import { PlayerColor } from "stories/atoms/PlayerColor";
import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  top: 16px;
  right: 20px;
  left: 20px;
  bottom: 16px;

  background-image: linear-gradient(to right, #242425, #313330);
  color: white;
  border: 2px solid black;
  border-radius: 4px;
  font-family: Roboto;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  padding: 16px;
  padding-right: 50px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 32px;
  width: 32px;
  background-color: gray;
  border-radius: 200px;
  padding: 4px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const PlayerColorStyled = styled.div<{ color: PlayerColor }>`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.color};
  border-radius: 4px;
  margin-right: 8px;
`;

const PlayerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  width: 480px;
`;

const PlayerName = styled.div`
  width: 150px;
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
`;

const SaveButton = styled(Button)`
  margin-top: 20px;
`;

const PlayerNameInput = styled.input`
  padding: 8px;
  font-size: 22px;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 22px;
  margin-left: 8px;
  margin-right: 8px;
`;

export const PlayersListModal: React.FC<{
  onModalClose: () => void;
  onPlayersListSave: (
    players: { id: number; name: string; color: PlayerColor }[]
  ) => void;
  playersList: { id: number; name: string; color: PlayerColor }[],
}> = ({ onModalClose, onPlayersListSave, playersList }) => {
  const [players, setPlayers] = useState<
    { id: number; name: string; color: PlayerColor }[]
  >(playersList);
  const [playerName, setPlayerName] = useState<string>("");
  const [playerColor, setPlayerColor] = useState<PlayerColor>(PlayerColor.BLUE);

  const handleAddPlayer = () => {
    if (playerName === "") {
      return;
    }

    setPlayers((state) => [
      ...state,
      {
        id: Date.now(),
        name: playerName,
        color: playerColor,
      },
    ]);
    setPlayerName("");
  };

  const handleRemovePlayer = (id: number) => {
    setPlayers((state) => state.filter((player) => player.id !== id));
  };

  const handleMoveUp = (idx: number) => {
    if (idx === 0) return;

    const currentPlayer = players[idx];
    const playerAbove = players[idx - 1];

    const newPlayers = [...players];
    newPlayers[idx] = playerAbove;
    newPlayers[idx - 1] = currentPlayer;

    setPlayers(newPlayers);
  };

  const handleMoveDown = (idx: number) => {
    if (idx === players.length - 1) return;

    const player1 = players[idx];
    const player2 = players[idx + 1];

    const newPlayers = [...players];
    newPlayers[idx] = player2;
    newPlayers[idx + 1] = player1;

    setPlayers(newPlayers);
  };

  return (
    <Modal>
      <Container>
        <Content>
          <h3>Players List</h3>
          {players.map((player, idx) => (
            <PlayerRow>
              <RowLeft>
                <PlayerColorStyled color={player.color} />
                <PlayerName>{player.name}</PlayerName>
              </RowLeft>
              <ActionButtons>
                <Button onClick={() => handleRemovePlayer(player.id)}>
                  Remove
                </Button>
                <Button onClick={() => handleMoveUp(idx)}>↑</Button>
                <Button onClick={() => handleMoveDown(idx)}>↓</Button>
              </ActionButtons>
            </PlayerRow>
          ))}

          <div>
            <PlayerNameInput
              type="text"
              placeholder="Player Name"
              value={playerName}
              onChange={(event) => setPlayerName(event.target.value)}
            />
            <SelectPlayerColor
              value={playerColor}
              onChange={(playerColor: PlayerColor) =>
                setPlayerColor(playerColor)
              }
            />
            <Button onClick={handleAddPlayer}>Add Player</Button>
          </div>
          <SaveButton onClick={() => { onPlayersListSave(players); onModalClose() }}>
            Save
          </SaveButton>
        </Content>

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
      </Container>
    </Modal>
  );
};

const SelectPlayerColor: React.FC<{
  value: PlayerColor;
  onChange: (value: PlayerColor) => void;
}> = ({ value, onChange }) => {
  return (
    <Select
      value={value}
      onChange={(event) => onChange(event.target.value as PlayerColor)}
    >
      <option value={PlayerColor.BLUE}>Blue</option>
      <option value={PlayerColor.BROWN}>Brown</option>
      <option value={PlayerColor.GREEN}>Green</option>
      <option value={PlayerColor.WHITE}>White</option>
      <option value={PlayerColor.RED}>Red</option>
      <option value={PlayerColor.ORANGE}>Blue</option>
    </Select>
  );
};
