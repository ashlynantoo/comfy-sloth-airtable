import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import Wrapper from "../assets/wrappers/ProductRating";

const ProductRating = ({ stars, reviews }) => {
  const rating = Array.from({ length: 5 }, (_, index) => {
    const fullLimit = index + 0.75;
    const halfLimit = index + 0.25;

    return (
      <span key={index}>
        {stars >= fullLimit ? (
          <BsStarFill />
        ) : stars >= halfLimit ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="stars">{rating}</div>
      <p>({reviews} customer reviews)</p>
    </Wrapper>
  );
};

export default ProductRating;
