import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Path";

const Path = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h4>
          <Link to="/">Home </Link>
          {product && <Link to="/products">/ Products </Link>}/ {title}
        </h4>
      </div>
    </Wrapper>
  );
};

export default Path;
