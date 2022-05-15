import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useKeyPress } from "hooks/useKeyPress";
import React from "react";

describe("useKeyPress hook", () => {
  it("WHEN given key pressed THEN handler is called", () => {
    // GIVEN
    const { onKeyPress } = renderTestComponent({ keyCodes: ["Enter"] });

    // WHEN
    userEvent.type(screen.getByText("TestComponent"), "{enter}");

    // THEN
    expect(onKeyPress).toBeCalled();
  });

  it("WHEN other key pressed THEN handler is not called", () => {
    // GIVEN
    const { onKeyPress } = renderTestComponent({ keyCodes: ["Enter"] });

    // WHEN
    userEvent.type(screen.getByText("TestComponent"), "{space}");

    // THEN
    expect(onKeyPress).not.toBeCalled();
  });

  const TestComponent = ({
    keyCodes,
    onKeyPress,
  }: {
    keyCodes: string[];
    onKeyPress: () => void;
  }) => {
    useKeyPress(onKeyPress, keyCodes);

    return <div>TestComponent</div>;
  };

  const renderTestComponent = ({ keyCodes }: { keyCodes: string[] }) => {
    const onKeyPress = jest.fn();

    render(<TestComponent onKeyPress={onKeyPress} keyCodes={keyCodes} />);

    return {
      onKeyPress,
    };
  };
});
