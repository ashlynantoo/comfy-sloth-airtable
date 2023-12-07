import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Sidebar";
import logo from "../assets/images/logo.svg";
import { closeSidebar } from "../features/user/userSlice";
import { NavIcons, NavLinks } from "../components";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => {
    return store.userState;
  });
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="comfy sloth logo" />
          <button
            className="close-btn"
            onClick={() => {
              dispatch(closeSidebar());
            }}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          <NavLinks />
        </ul>
        <NavIcons />
      </aside>
    </Wrapper>
  );
};

export default Sidebar;
