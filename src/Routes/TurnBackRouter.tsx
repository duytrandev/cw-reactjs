import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const TurnBackRouter = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('access_token')
  useEffect(() => {
    if(isLoggedIn) {
      navigate(-1);
      return;
    }
  }, [isLoggedIn, navigate]);
  return (
    <Outlet/>
  )
};

export default TurnBackRouter