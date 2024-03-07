import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useKeyPress } from "hooks/useKeyPress";
import { vi } from "vitest";

describe("useKeyPress hook", () => {
  it("WHEN given key pressed THEN handler is called", async () => {
    // GIVEN
    const { onKeyPress } = renderTestComponent({ keyCodes: ["Enter"] });

    // WHEN
    await userEvent.type(screen.getByText("TestComponent"), "{enter}");

    // THEN
    expect(onKeyPress).toHaveBeenCalled();
  });

  it("WHEN other key pressed THEN handler is not called", async () => {
    // GIVEN
    const { onKeyPress } = renderTestComponent({ keyCodes: ["Enter"] });

    // WHEN
    await userEvent.type(screen.getByText("TestComponent"), "{space}");

    // THEN
    expect(onKeyPress).not.toHaveBeenCalled();
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
    const onKeyPress = vi.fn();

    render(<TestComponent onKeyPress={onKeyPress} keyCodes={keyCodes} />);

    return {
      onKeyPress,
    };
  };
});
