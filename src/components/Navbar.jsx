import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaBars } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Navbar";
import logo from "../assets/images/logo.svg";
import { NavIcons, NavLinks } from "../components";
import { openSidebar } from "../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="section-center">
        <div className="nav-header">
          <NavLink to="/">
            <img src={logo} alt="comfy sloth logo" />
          </NavLink>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => {
              dispatch(openSidebar());
            }}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <NavLinks />
        </ul>
        <NavIcons />
      </div>
    </Wrapper>
  );
};

export default Navbar;
