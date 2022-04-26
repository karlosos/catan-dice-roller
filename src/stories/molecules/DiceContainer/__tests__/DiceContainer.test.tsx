import React from "react";
import { render, screen } from "@testing-library/react";
import { DiceContainer } from "../DiceContainer";
import { testId } from "testUtils/testId";

describe("DiceContainer Component", () => {
  it('WHEN rendered with showDice set to true THEN two dice and their pips are visible', () => {
    // GIVEN
    const [dice1, dice2] = [1, 6];

    // WHEN
    render(<DiceContainer dice1={dice1} dice2={dice2} showDice={true} />)

    // THEN
    const pips = screen.getAllByTestId(testId.pip);
    expect(pips).toHaveLength(dice1 + dice2);
  })

  it('WHEN rendered with showDice set to false THEN dice are still visible', () => {
    // Explanation: That's because showDice doesn't actually hide the dice.
    // It moves the dice below the screen.

    // GIVEN
    const [dice1, dice2] = [3, 5];

    // WHEN
    render(<DiceContainer dice1={dice1} dice2={dice2} showDice={true} />)

    // THEN
    const pips = screen.getAllByTestId(testId.pip);
    expect(pips).toHaveLength(dice1 + dice2);
  })
});
