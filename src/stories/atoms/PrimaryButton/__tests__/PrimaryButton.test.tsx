import React from "react";
import { render, screen } from "@testing-library/react";
import { PrimaryButton } from "../PrimaryButton";
import userEvent from "@testing-library/user-event";
import { testId } from "testUtils/testId";

describe("PrimaryButton", () => {
  test('WHEN button clicked THEN handler is triggered', () => {
    // GIVEN
    const handleButtonClick = jest.fn();
    render(<PrimaryButton onClick={handleButtonClick} isDisabled={false}>Button</PrimaryButton>)

    // WHEN
    userEvent.click(screen.getByTestId(testId.primaryButton))

    // THEN
    expect(handleButtonClick).toBeCalledTimes(1);
  })

  test('GIVEN button is disabled WHEN button clicked THEN handler is not triggered', () => {
    // GIVEN
    const handleButtonClick = jest.fn();
    render(<PrimaryButton onClick={handleButtonClick} isDisabled={true}>Button</PrimaryButton>)

    // WHEN
    userEvent.click(screen.getByTestId(testId.primaryButton))

    // THEN
    expect(handleButtonClick).toBeCalledTimes(0);
  })
});
