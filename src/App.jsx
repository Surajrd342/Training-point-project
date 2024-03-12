// import {Colors} from "/assets/img"
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import Dashboard from "./layout/private/dashboard";
import RouteNotFound from "./layout/public/404";
import PublicLayout from "./layout/public/publicLayout";

function App() {
  const navigate = useNavigate();

  //control this tate the useContext
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
    <Routes>
      {loggedIn ? (
        <>
          <Route exact path="/dashboard" Component={Dashboard} />
          <Route exact path="/about" Component={Dashboard} />
        </>
      ) : (
        <>
          <Route path="/login" Component={PublicLayout} />
          <Route path="/register" Component={PublicLayout} />
        </>
      )}

      <Route path="*" Component={RouteNotFound} />
    </Routes>
  );
}

export default App;
