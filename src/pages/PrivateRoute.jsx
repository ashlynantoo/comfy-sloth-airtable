import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((store) => {
    return store.userState;
  });

  if (!user) {
    toast.warn("Please log in to checkout");
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
