import { useNavigate } from "react-router";

const Dashboard = () => {

    const navigate = useNavigate()
    
  const logout = () => {
    localStorage.removeItem("login-token");
    navigate('/login')
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
