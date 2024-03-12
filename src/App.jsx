// import {Colors} from "/assets/img"
import Login from "./login"
import Register from "./register";
import { logo } from "/assets/img";


function App() {

  return (

    <div className="h-screen">

      <header className="pt-8">
        <div className="flex justify-between mx-40 ">
          <img src={logo} alt="logo" />
          <div className="flex flex-row justify-between">
            <ul className="flex items-center font-semibold gap-2 text-black">
              <li className="hover:text-violet-700">Sign In</li>
              <li className="hover:text-violet-700">Sign Up</li>
            </ul>
          </div>
        </div>
      </header>
      <Login />
      <Register />
    </div>
  )
}

export default App
