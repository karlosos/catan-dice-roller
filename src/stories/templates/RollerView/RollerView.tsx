import { useState } from "react"
import { CatanButton, Dice } from "stories/atoms"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ede2ab;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const DiceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
            <DiceContainer>
                <Dice value={dice1} />
                <Dice value={dice2} />
            </DiceContainer>
            <div onClick={handleRoll}>
                <CatanButton>Roll</CatanButton>
            </div>
        </Container>
    )
}