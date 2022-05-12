import React from "react";
import { render, screen } from "@testing-library/react";
import { RollerView } from "../RollerView";
import { testId } from "testUtils/testId";
import userEvent from "@testing-library/user-event";

describe("RollerView Component", () => {
  it("WHEN clicked on button THEN handler is called", () => {
    // GIVEN
    const onButtonClick = jest.fn();
    render(
      <RollerView
        die1={1}
        die2={2}
        showDice={true}
        showRobber={false}
        onRollButtonClick={onButtonClick}
        isRollButtonDisabled={false}
      />
    );

    // WHEN
    userEvent.click(screen.getByTestId(testId.primaryButton));

    // THEN
    expect(onButtonClick).toBeCalled();
  });

  it("GIVEN roll button disabled WHEN clicked on button THEN handler is not called", () => {
    // GIVEN
    const onButtonClick = jest.fn();
    render(
      <RollerView
        die1={1}
        die2={2}
        showDice={true}
        showRobber={false}
        onRollButtonClick={onButtonClick}
        isRollButtonDisabled={true}
      />
    );

    // WHEN
    userEvent.click(screen.getByTestId(testId.primaryButton));

    // THEN
    expect(onButtonClick).not.toBeCalled();
  })
});
