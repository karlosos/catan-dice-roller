import { render, screen } from "@testing-library/react";
import { DiceContainer } from "../DiceContainer";
import { testId } from "testUtils/testId";

describe("DiceContainer Component", () => {
  it("WHEN rendered with showDice set to true THEN two dice and their pips are visible", () => {
    // GIVEN
    const [die1, die2] = [1, 6];

    // WHEN
    render(<DiceContainer die1={die1} die2={die2} showDice={true} />);

    // THEN
    const pips = screen.getAllByTestId(testId.pip);
    expect(pips).toHaveLength(die1 + die2);
  });

  it("WHEN rendered with showDice set to false THEN dice are still visible", () => {
    // Explanation: That's because showDice doesn't actually hide the dice.
    // It moves the dice below the screen.

    // GIVEN
    const [die1, die2] = [3, 5];

    // WHEN
    render(<DiceContainer die1={die1} die2={die2} showDice={false} />);

    // THEN
    const pips = screen.getAllByTestId(testId.pip);
    expect(pips).toHaveLength(die1 + die2);
  });
});
