import { render, screen } from "@testing-library/react";
import { Die } from "../Die";
import { testId } from "testUtils/testId";

describe("Die Component", () => {
  test.each([1, 2, 3, 4, 5, 6])(
    "GIVEN %p as value argument THEN pips are visible",
    (value) => {
      // GIVEN
      render(<Die value={value} />);

      // THEN
      const pips = screen.getAllByTestId(testId.pip);
      expect(pips).toHaveLength(value);
    }
  );

  test.each([0, 7, 999, -100])(
    "GIVEN %p as value argument THEN pips are hidden",
    (value) => {
      // GIVEN, THEN
      render(<Die value={value} />);

      // THEN
      const pips = screen.queryByTestId(testId.pip);
      expect(pips).not.toBeInTheDocument();
    }
  );
});
