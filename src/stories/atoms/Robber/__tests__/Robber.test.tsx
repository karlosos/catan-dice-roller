import React from "react";
import { render, screen } from "@testing-library/react";
import { Robber } from "../Robber";
import { testId } from "testUtils/testId";

describe("Robber Component", () => {
  it('WHEN rendered with showRobber THEN robber is visible', () => {
    // GIVEN, WHEN
    render(<Robber showRobber={true} />)

    // THEN
    expect(screen.getByTestId(testId.robber)).toBeInTheDocument();
  })

  it('WHEN rendered with showRobber set to false THEN robber is visible', () => {
    // Explanation: showRobber is a prop used only for animation.
    // when showRobber=false robber is still rendered by not visible on the screen
    // because it's scalled down. See Robber.style.tsx

    // GIVEN, WHEN
    render(<Robber showRobber={false} />)

    // THEN
    expect(screen.getByTestId(testId.robber)).toBeInTheDocument();
  })
});
