import React, { useState } from "react";
import { Button, Input } from "../../Component";
import { useInput } from "../../Hooks";
import { loggedinUsers } from "../../Utils/Constant/indes";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../../Utils/CommonMethod";
import { toast } from "react-toastify";

function Login() {
  const userEmail = useInput("");
  const password = useInput("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const validation = validateForm(userEmail.value, password.value);
    console.log(validation, 4444);
    if (validation) {
      const user = loggedinUsers.find(
        (user) =>
          user.email === userEmail.value && user.password === password.value
      );
      if (user) {
        localStorage.setItem("isLoggedin", true);
        navigate("/dashboard");
        // toast.success("Login Successfull");
      } else {
       toast.info('User not found')
      }
    }
  };

  return (
    <div className="login-container">
      <div className="col-8 d-flex bg-white login-inner-container">
        <div className=" col-6 d-flex justify-content-center align-items-center color-border p-5">
          <h1 className="fw-bolder text-white">Hello, Welcome!</h1>
        </div>

        <div className="col-6 d-flex justify-content-center align-items-center ">
          <div className="py-5 d-flex flex-column justify-content-between align-items-center col-8">
            <p className="fw-bold fs-2 text-center mb-4">Login</p>
            <Input
              value={userEmail.value}
              type={"email"}
              onChange={userEmail.onChange}
              className={"mb-4"}
              placeholder={"User email"}
            />
            <Input
              value={password.value}
              onChange={password.onChange}
              placeholder={"Password"}
              className={"mb-4"}
            />
            <Button text={"Login"} block onClick={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}
export { Login };
