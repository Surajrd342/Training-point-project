import { useFormik } from "formik";
import { object, string } from "yup";
import { apple, facebook, google, loginImage } from "../../assets/img";
import axios from "axios";
import { useNavigate, useRoutes } from "react-router";
import { useContext, useState } from "react";
import { LoginContext } from "../../appMain";
import { toast } from 'react-toastify';

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = object({
  username: string().min(5).required("Please Enter the Username"),
  password: string().min(4).required("Enter your Password"),
});

function Login() {
  const loginContext = useContext(LoginContext);

  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, resetForm) => {
      setLoader(true);
      console.log(values);

      const requestData = {
        username: values.username,
        password: values.password,
      };

      try {
        const response = await axios.post(
          "https://dummyjson.com/auth/login",
          requestData
        );

        if (response?.data?.token) {
          resetForm.resetForm();
          loginContext?.setLoggedIn(true);
          toast.success("Logged in successfully")
          localStorage.setItem("login-token", response?.data?.token);
          navigate("/dashboard");
        }
        setLoader(false);
      } catch (error) {
        toast.error("Invalid username or password")
        setLoader(false);
      }
    },
  });

  return (
    <div className="h-screen">
      <form onSubmit={formik.handleSubmit}>
        <section className="flex justify-center items-center mt-20 ">
          <div className="flex max-w-[1086px] p-5 gap-40 w-full ">
            <div className="flex-1 p-3 relative">
              <div className=" mt-24">
                <div className="flex mt-5 mb-7 ">
                  <h1 className="flex text-5xl font-bold">Sign in to </h1>
                </div>

                <div className="flex mb-8">
                  <h1 className="text-4xl font-semibold">
                    Lorem Ipsum is simply
                  </h1>
                </div>

                <div className="">
                  <p className="text-base">
                    If you dont have an account register{" "}
                  </p>
                  <p>
                    You can{" "}
                    <span className="text-base text-[#4d47c3] font-semibold">
                      Register here !
                    </span>{" "}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-[-65px] right-[-149px]">
                <img
                  className="loginImage"
                  src={loginImage}
                  alt="login image"
                />
              </div>
            </div>

            <div className="flex-1 p-3">
              <div className="mt-5 mb-7">
                <h3 className="flex text-3xl font-semibold">Sign in</h3>
              </div>

              <div className="">
                <input
                  className="bg-[#f0efff] p-4 mb-4 rounded w-full"
                  type="text"
                  name="username"
                  placeholder="Enter name or username"
                  value={formik.values.username}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
              <small>{formik.errors.username}</small>

              <div>
                <input
                  className="bg-[#f0efff] p-4 mb-4 rounded w-full"
                  type={"text"}
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
              <small>{formik.errors.password}</small>

              <p className="text-[#cccccc] mb-4 text-right">
                Forgot password ?
              </p>

              <div className="flex">
                <button
                  className="bg-[#4d47c3] hover:bg-[#423da3] text-white p-3 mb-4 w-full font-semibold rounded shadow-lg shadow-indigo-500/50"
                  type="submit"
                >
                  {loader ? "Loading..." : "Login"}
                </button>
              </div>

              <p className="text-[#cccccc] text-center">or continue with</p>

              <div className="flex space-x-4 justify-center mt-4 ">
                <img className="w-10" src={apple} alt="apple" />
                <img className="w-10" src={google} alt="google" />
                <img className="w-10" src={facebook} alt="facebook" />
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Login;
