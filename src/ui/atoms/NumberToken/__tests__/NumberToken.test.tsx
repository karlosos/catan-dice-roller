import { render, screen } from "@testing-library/react";
import { NumberToken } from "../NumberToken";
import { testId } from "testUtils/testId";

describe("NumberToken Component", () => {
  test.each([2, 3, 4, 5, 6, 8, 9, 10, 11, 12])(
    "GIVEN %p as value argument THEN pips are visible",
    (value) => {
      // GIVEN
      render(<NumberToken value={value} />);

      // THEN
      const pips = screen.getAllByTestId(testId.numberTokenPip);
      expect(pips.length).toBeGreaterThan(0);
      expect(pips.length).toBeLessThan(6);
    }
  );

  test.each([0, 1, 7, 13, 999, -100])(
    "GIVEN %p as value argument THEN pips are hidden",
    (value) => {
      // GIVEN, THEN
      render(<NumberToken value={value} />);

      // THEN
      const pips = screen.queryByTestId(testId.numberTokenPip);
      expect(pips).not.toBeInTheDocument();
    }
  );
});
