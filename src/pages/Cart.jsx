import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Path, CartItemsList, CartTotals } from "../components";
import Wrapper from "../assets/wrappers/Cart";

const Cart = () => {
  const { total_items } = useSelector((store) => {
    return store.cartState;
  });

  if (total_items === 0) {
    return (
      <Wrapper>
        <Path title="cart" />
        <div className="section section-center page empty-cart">
          <h4>Your cart is empty</h4>
          <Link to="/products" className="btn">
            shop now
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Path title="cart" />
      <div className="section section-center page cart-container">
        <CartItemsList />
        <CartTotals />
      </div>
    </Wrapper>
  );
};

export default Cart;
