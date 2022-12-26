import React from "react";

type AuthFormProps = {
  type?: "Sign up" | "Login";
};

const AuthForm: React.FC<AuthFormProps> = ({ type = "Sign up" }) => {
  return (
    <div className="max-w-[500px] bg-zinc-600 p-4">
      <form>
        <h3>{type} Form</h3>
        <div>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <button>{type}</button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
