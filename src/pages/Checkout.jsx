import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartTotals, Path, StripeCheckout } from "../components";
import Wrapper from "../assets/wrappers/Checkout";

const Checkout = () => {
  const { total_items } = useSelector((store) => {
    return store.cartState;
  });

  if (total_items === 0) {
    return (
      <Wrapper>
        <Path title="checkout" />
        <div className="section section-center page empty-checkout">
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
      <Path title="checkout" />
      <div className="section section-center page checkout">
        <CartTotals />
        <StripeCheckout />
      </div>
    </Wrapper>
  );
};

export default Checkout;
