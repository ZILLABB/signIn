import { useFormik } from "formik";
import React from "react";
import { SignInSchema } from "./Schemas";

const onSubmit = () => {
  console.log("submitted");
};

const SignIn = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <div className="text-black text-center pb-[100px] bg-zinc-400">
      <div className=" text-center mb-[]  ">
        <h1>Sign In </h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="email">
            <input
              value={values.email}
              onChange={handleChange}
              className="w-[405.27px] h-[50.37px] mt-[20px] rounded-[15.3407px] border-2 text-black "
              type="text"
              placeholder="Enter email"
              name="email"
              required
            />
          </label>
          <label htmlFor="password">
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-[405.27px] mt-5 h-[50.37px] rounded-[15.3407px] border-2 text-black "
              type="text"
              placeholder="Enter password"
              name="password"
              required
            />
          </label>
        </form>
        <button className="h-[40px] w-[100px] bg-slate-800 rounded-3xl text-white mt-6 ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignIn;
