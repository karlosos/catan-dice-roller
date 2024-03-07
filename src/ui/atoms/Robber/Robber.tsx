import { testId } from "testUtils/testId";
import robberSrc from "../../assets/robber.png";
import { RobberContainer, RobberStyled } from "./Robber.style";

export const Robber: React.FC<{ showRobber?: boolean }> = ({ showRobber }) => {
  const animationDirection = showRobber ? "in" : "out";
  return (
    <RobberContainer>
      <RobberStyled
        src={robberSrc}
        alt="robber"
        $animationDirection={animationDirection}
        data-testid={testId.robber}
      />
    </RobberContainer>
  );
};
