import React from "react";

import { useAppDispatch } from "../hooks/useTypedSelector";
import { authenticate } from "../slices/user";

import { Formik } from "formik";

import * as Yup from "yup";

const AuthSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(5, "Password is too short, should be 4 characters minimum"),
});

type AuthFormProps = {
  type?: "Sign up" | "Login";
};

const AuthForm: React.FC<AuthFormProps> = ({ type = "Sign up" }) => {
  const dispatch = useAppDispatch();
  const onSubmitHandler = (values: { email: string; password: string }) => {
    dispatch(authenticate(values));
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={AuthSchema}
      onSubmit={onSubmitHandler}
    >
      {({ handleBlur, handleChange, handleSubmit, errors, touched }) => {
        return (
          <div className="w-[300px] bg-zinc-700 p-4 text-left rounded">
            <h3 className="text-white mb-4 ">{type} Form</h3>
            <div className="mb-4">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  errors.email && touched.email
                    ? "border-red-500 border-[1px]"
                    : ""
                } w-full p-2 rounded outline-0`}
                name="email"
                type="text"
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <span className="inline-block text-red-500 pt-1">
                  {errors.email}
                </span>
              ) : null}
            </div>
            <div className="mb-4">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  errors.password && touched.password
                    ? "border-red-500 border-[1px]"
                    : ""
                } w-full p-2 rounded outline-0`}
                name="password"
                type="password"
                placeholder="Password"
              />
              {errors.password && touched.password ? (
                <span className="inline-block text-red-500 pt-1">
                  {errors.password}
                </span>
              ) : null}
            </div>
            <div>
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="bg-[#FF946D] px-6 p-2 text-white rounded"
              >
                {type}
              </button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default AuthForm;
