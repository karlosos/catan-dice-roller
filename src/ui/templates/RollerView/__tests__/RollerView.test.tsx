import { render, screen } from "@testing-library/react";
import { RollerView } from "../RollerView";
import { testId } from "testUtils/testId";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("RollerView Component", () => {
  it("WHEN clicked on button THEN handler is called", async () => {
    // GIVEN
    const onButtonClick = vi.fn();
    render(
      <RollerView
        die1={1}
        die2={2}
        showDice={true}
        showRobber={false}
        onRollButtonClick={onButtonClick}
        isRollButtonDisabled={false}
      />,
    );

    // WHEN
    await userEvent.click(screen.getByTestId(testId.primaryButton));

    // THEN
    expect(onButtonClick).toHaveBeenCalled();
  });

  it("GIVEN roll button disabled WHEN clicked on button THEN handler is not called", async () => {
    // GIVEN
    const onButtonClick = vi.fn();
    render(
      <RollerView
        die1={1}
        die2={2}
        showDice={true}
        showRobber={false}
        onRollButtonClick={onButtonClick}
        isRollButtonDisabled={true}
      />,
    );

    // WHEN
    await userEvent.click(screen.getByTestId(testId.primaryButton));

    // THEN
    expect(onButtonClick).not.toHaveBeenCalled();
  });
});
