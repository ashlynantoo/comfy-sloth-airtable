import { useDispatch } from "react-redux";
import { formatPrice } from "../utils";
import { editItem, removeItem } from "../features/cart/cartSlice";
import { AmountButtons } from "../components";
import Wrapper from "../assets/wrappers/CartItem";

const CartItem = ({ cartItem }) => {
  const { id, image, name, price, color, amount } = cartItem;

  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeItem(id));
  };

  const handleAmount = (fnName) => {
    dispatch(editItem({ id, fnName }));
  };

  return (
    <Wrapper>
      <div className="item-container">
        <img src={image} alt={name} className="img" />
        <div className="name-container">
          <h5 className="name">{name}</h5>
          <p className="color-container">
            color:{" "}
            <span className="color" style={{ backgroundColor: color }}></span>
          </p>
        </div>
      </div>
      <div className="amount-container">
        <p>quantity</p>
        <AmountButtons
          increaseAmount={() => {
            handleAmount("inc");
          }}
          decreaseAmount={() => {
            handleAmount("dec");
          }}
          amount={amount}
        />
        <button className="remove-btn" onClick={removeItemFromCart}>
          remove
        </button>
      </div>
      <p className="price">{formatPrice(price * amount)}</p>
    </Wrapper>
  );
};

export default CartItem;
