import { useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/Error";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <Wrapper className="error-element-page">
      <h4>An error occurred. Please try again later.</h4>
    </Wrapper>
  );
};

export default ErrorElement;
