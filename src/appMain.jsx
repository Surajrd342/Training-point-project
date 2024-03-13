import { createContext, useEffect, useState } from "react";
import App from "./App";
import { useNavigate } from "react-router";

export const LoginContext = createContext(null);

const AppMain = () => {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("login-token");
    if (token) {
      setLoggedIn(true);
      navigate("/dashboard");
    } else {
      setLoggedIn(false);
      navigate("/login");
    }
  }, []);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <App />
    </LoginContext.Provider>
  );
};

export default AppMain;
