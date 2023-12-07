import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import Wrapper from "../assets/wrappers/CartItemsList";
import { clearCart } from "../features/cart/cartSlice";

const CartItemsList = () => {
  const { cart } = useSelector((store) => {
    return store.cartState;
  });
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <div className="link-container">
        <Link to="/products" className="btn btn-outline link">
          continue shopping
        </Link>
        <button
          type="button"
          className="btn btn-danger link"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          clear shopping cart
        </button>
      </div>
    </Wrapper>
  );
};

export default CartItemsList;
