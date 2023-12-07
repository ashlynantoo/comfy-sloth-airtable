import { Outlet, useNavigation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import { Footer, Loading, Navbar, Sidebar } from "../components";
import {
  addUser,
  clearIsAuthenticated,
  removeUser,
  setIsAuthenticated,
} from "../features/user/userSlice";

const Home = () => {
  const { isLoading, error, isAuthenticated, user } = useAuth0();
  const navigation = useNavigation();
  const isDataLoading = navigation.state === "loading";
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    toast.error(error.message);
  }

  if (!isAuthenticated) {
    dispatch(clearIsAuthenticated());
    dispatch(removeUser());
  } else {
    if (user) {
      dispatch(setIsAuthenticated());
      dispatch(addUser(user));
    } else {
      dispatch(clearIsAuthenticated());
      dispatch(removeUser());
    }
  }

  return (
    <main>
      <Navbar />
      <Sidebar />
      <section>{isDataLoading ? <Loading /> : <Outlet />}</section>
      <Footer />
    </main>
  );
};

export default Home;
