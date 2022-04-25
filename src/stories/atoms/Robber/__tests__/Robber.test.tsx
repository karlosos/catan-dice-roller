import React from "react";
import { render, screen } from "@testing-library/react";
import { Robber } from "../Robber";
import { testId } from "testUtils/testId";

describe("Robber Component", () => {
  it('WHEN rendered THEN robber is visible', () => {
    // GIVEN, WHEN
    render(<Robber />)

    // THEN
    expect(screen.getByTestId(testId.robber)).toBeInTheDocument();
  })
});
