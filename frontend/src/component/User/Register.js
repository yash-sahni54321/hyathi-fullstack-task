import React, { useState, useEffect } from "react";
import { login, clearErrors } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { register } from "../../actions/userAction";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user || {}
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate("/profile");
      alert.success("User Registered");
    }
  }, [dispatch, error, alert, navigate, isAuthenticated]);

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      name: Name,
      email: Email,
      password: Password,
    };
    dispatch(register(userData));
  };
  return (
    <div className="grid h-screen w-screen">
      <div className="hidden sm:block"></div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-4"
          onSubmit={submitHandler}
        >
          <h2 className="text-4xl font-bold text-center py-6">Register </h2>
          <div className="flex flex-col py-2">
            <label>Name</label>
            <input
              className="border p-2"
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input
              className="border p-2"
              type="text"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border p-2"
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white"
            on
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
