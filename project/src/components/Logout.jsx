import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext/UserContext";

const Logout = () => {
  const { context, setContext } = useContext(UserContext);
  const navigate = useNavigate();
  navigate("/");
  setContext(null);
  return <div></div>;
};

export default Logout;
