import React from "react";

import { useDispatch } from "react-redux";

import Yup from "yup";

type AuthFormProps = {
  type?: "Sign up" | "Login";
};

const AuthForm: React.FC<AuthFormProps> = ({ type = "Sign up" }) => {
  return (
    <div className="min-w-[300px] bg-zinc-600 p-4 text-left rounded">
      <form>
        <h3 className="text-white mb-4 ">{type} Form</h3>
        <div className="mb-4">
          <input
            className="w-full p-2 rounded"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2 rounded"
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <button className="bg-[#FF946D] px-6 p-2 text-white rounded">
            {type}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
