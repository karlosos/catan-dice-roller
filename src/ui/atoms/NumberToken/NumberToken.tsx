import { testId } from "testUtils/testId";
import { Pip, Pips, Token, TextValue } from "./NumberToken.style";

export const NumberToken = ({ value }: { value: number }) => {
  const isRed = value === 8 || value === 6;

  return (
    <Token>
      <TextValue $isRed={isRed}>{value}</TextValue>
      <Pips>
        {[...Array(valueToPips(value))].map((_, idx) => (
          <Pip $isRed={isRed} key={idx} data-testid={testId.numberTokenPip} />
        ))}
      </Pips>
    </Token>
  );
};

const valueToPips = (value: number): number => {
  switch (value) {
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
      return 3;
    case 5:
      return 4;
    case 6:
      return 5;
    case 8:
      return 5;
    case 9:
      return 4;
    case 10:
      return 3;
    case 11:
      return 2;
    case 12:
      return 1;
    default:
      return 0;
  }
};
