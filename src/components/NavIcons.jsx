import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import Wrapper from "../assets/wrappers/NavIcons";
import { closeSidebar } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

const NavIcons = () => {
  const { loginWithRedirect, logout } = useAuth0();
  const { user } = useSelector((store) => {
    return store.userState;
  });
  const { total_items } = useSelector((store) => {
    return store.cartState;
  });
  const dispatch = useDispatch();

  return (
    <Wrapper className="cart-btn-wrapper">
      <NavLink
        to="/cart"
        className="cart-btn"
        onClick={() => {
          dispatch(closeSidebar());
        }}
      >
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </NavLink>
      {user ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            logout({ logoutParams: { returnTo: window.location.origin } });
            dispatch(clearCart());
          }}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

export default NavIcons;
