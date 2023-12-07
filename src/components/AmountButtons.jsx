import { FaPlus, FaMinus } from "react-icons/fa";
import Wrapper from "../assets/wrappers/AmountButtons";

const AmountButtons = ({ increaseAmount, decreaseAmount, amount }) => {
  return (
    <Wrapper>
      <button type="button" className="amount-btn" onClick={decreaseAmount}>
        <FaMinus />
      </button>
      <h5 className="amount">{amount}</h5>
      <button type="button" className="amount-btn" onClick={increaseAmount}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

export default AmountButtons;
