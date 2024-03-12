import React from 'react'
import { useFormik, Formik, Form, Field } from "formik";
import { loginImage, apple, google, facebook } from "/assets/img";
import { object, string } from "yup";

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = object({
  username: string().min(5).required("Please Enter the Username"),
  password: string().min(4).required("Enter your Password"),
  email: string().email("Enter Valid mail").required("Enter a mail"),
  username: string().min(4).required("Please enter a Username"),
  

})


function Register() {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, resetForm) => {
      console.log(values);
      resetForm.resetForm();
    }

  })
  return (
    <div className="h-screen">
      <form onSubmit={formik.handleSubmit}>
        <section className="flex justify-center items-center mt-20 ">
          <div className="flex max-w-[1086px] p-5 gap-40 w-full ">

            <div className="flex-1 p-3 relative">
              <div className=" mt-48">
                <div className="flex mt-5 mb-7 ">
                  <h1 className="flex text-5xl font-bold">Sign Up to </h1>
                </div>

                <div className="flex mb-8">
                  <h1 className="text-4xl font-semibold">Lorem Ipsum is simply</h1>
                </div>

                <div className="">
                  <p className="text-base">If you dont have an account register  </p>
                  <p>You can  <span className="text-base text-[#4d47c3] font-semibold">Login here !</span> </p>
                </div>
              </div>

              <div className="absolute bottom-[-65px] right-[-149px]">
                <img className="loginImage" src={loginImage} alt="login image" />
              </div>
            </div>



            <div className="flex-1 p-3">
              <div className="mt-5 mb-7">
                <h3 className="flex text-3xl font-semibold">Sign Up</h3>
              </div>

              <div className="">
                <input className="bg-[#f0efff] p-4 mb-4 rounded w-full"
                  type="text" name="email"
                  placeholder="Enter Email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
              <small>{formik.errors.email}</small>

              <div>
                <input className="bg-[#f0efff] p-4 mb-4 rounded w-full"
                  type="text"
                  name="username"
                  placeholder="Create User Name"
                  value={formik.values.username}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
              <small>{formik.errors.username}</small>

              <div>
                <input className="bg-[#f0efff] p-4 mb-4 rounded w-full"
                  type="text"
                  name="number"
                  placeholder="Contact Number"
                  value={formik.values.number}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
              <small>{formik.errors.number}</small>

              <div>
                <input className="bg-[#f0efff] p-4 mb-4 rounded w-full"
                  type="text"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
              <small>{formik.errors.password}</small>


              <div>
                <input className="bg-[#f0efff] p-4 mb-4 rounded w-full"
                  type="text"
                  name="password"
                  placeholder="Confirm Password"
                  value={formik.values.confirmpassword}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
              <small>{formik.errors.confirmpassword}</small>


              <div className="flex">
                <button className="bg-[#4d47c3] hover:bg-[#423da3]
                               text-white p-3 mb-4 w-full font-semibold rounded shadow-lg
                               shadow-indigo-500/50" type="submit">Register
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
  )
}

export default Register;