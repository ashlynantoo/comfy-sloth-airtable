import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { formatPrice } from "../utils";
import Wrapper from "../assets/wrappers/CartTotals";

const CartTotals = () => {
  const { loginWithRedirect } = useAuth0();
  const { total_amount, shipping_fee } = useSelector((store) => {
    return store.cartState;
  });
  const { user } = useSelector((store) => {
    return store.userState;
  });

  return (
    <Wrapper>
      <article>
        <h4>Order Summary</h4>
        <h5>
          <span>Subtotal</span>
          <span>{formatPrice(total_amount)}</span>
        </h5>
        <h5>
          <span>Shipping</span>
          <span>{formatPrice(shipping_fee)}</span>
        </h5>
        <h5 className="total">
          <span>Order Total</span>
          <span>{formatPrice(total_amount + shipping_fee)}</span>
        </h5>
      </article>
      <div className="btn-container">
        {user ? (
          <Link to="/checkout" className="btn">
            proceed to checkout
          </Link>
        ) : (
          <button
            type="button"
            className="btn"
            onClick={() => {
              loginWithRedirect();
            }}
          >
            please login
          </button>
        )}
      </div>
    </Wrapper>
  );
};

export default CartTotals;
