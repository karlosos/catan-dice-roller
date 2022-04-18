import React from "react";
import { render, screen } from "@testing-library/react";
import { Dice } from "../Dice";
import { testId } from "testUtils/testId";

describe("Dice Component", () => {
  test.each([1, 2, 3, 4, 5, 6])(
    "GIVEN %p as value argument THEN pips are visible",
    (value) => {
      // GIVEN
      render(<Dice value={value} />);

      // THEN
      const pips = screen.getAllByTestId(testId.pip);
      expect(pips).toHaveLength(value);
    }
  );

  test.each([0, 7, 999, -100])(
    "GIVEN %p as value argument THEN pips are hidden",
    (value) => {
      // GIVEN, THEN 
      render(<Dice value={value} />);

      // THEN
      const pips = screen.queryByTestId(testId.pip);
      expect(pips).not.toBeInTheDocument();
    }
  );
});
