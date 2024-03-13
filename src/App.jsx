// import {Colors} from "/assets/img"
import { Route, Routes } from "react-router";
import Dashboard from "./layout/private/dashboard";
import RouteNotFound from "./layout/public/404";
import PublicLayout from "./layout/public/publicLayout";
import { useContext } from "react";
import { LoginContext } from "./appMain";

function App() {
  const loginContext = useContext(LoginContext);

  return (
    <Routes>
      {loginContext?.loggedIn ? (
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
