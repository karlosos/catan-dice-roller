import { useState } from "react"
import { CatanButton, Dice } from "stories/atoms"
import styled from "styled-components"
import { DiceContainer } from "./DiceContainer"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ede2ab;
    height: 100%;
    width: 100%;
    position: absolute;
`

const ButtonContainer = styled.div`
    margin-bottom: 10px;
`

export const RollerView: React.VFC = () => {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);

    const handleRoll = () => {
        console.log('>> handleRoll')
        setDice1(((dice1 + 1) % 6) + 1)
        setDice2(((dice2 + 2) % 6) + 1)
    }

    return (
        <Container>
            <DiceContainer dice1={dice1} dice2={dice2} />
            <ButtonContainer onClick={handleRoll}>
                <CatanButton>Roll</CatanButton>
            </ButtonContainer>
        </Container>
    )
}