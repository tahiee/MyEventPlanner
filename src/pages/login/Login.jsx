import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/Myeventplanner__1_-removebg-preview.png";
import axios from "axios";
import { baseURL } from '../../constent';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ show: false, message: "", type: "" }); // State for alert
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/api/auth/login`, {
        email,
        password,
      });

      const data = response.data;
      if (response.status === 200) {
        localStorage.setItem('token', data.token);
        setAlert({ show: true, message: "Login successful!", type: "success" });
        setTimeout(() => navigate("/landing"), 1000);
      } else {
        setAlert({ show: true, message: data.message, type: "error" });
      }
    } catch (error) {
      setAlert({
        show: true,
        message: error.response ? error.response.data.message : "An error occurred during login.",
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      {alert.show && (
        <div className={`alert ${alert.type === "error" ? "bg-red-500" : "bg-green-500"} text-white p-4 rounded-md`}>
          {alert.message}
          <span className="closebtn ml-2 cursor-pointer" onClick={() => setAlert({ ...alert, show: false })}>
            &times;
          </span>
        </div>
      )}
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md d-flex justify-center items-center">
        <div>
          <img src={logo} alt="Logo" className="mb-2" />
        </div>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form className="justify-center items-center text-center" onSubmit={handleLogin}>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>
                      <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="mb-4 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                  <span className="">don't have an account? Signup below</span>
                </div>
                <Link to='/signup'>
                  <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </form>
          <div className="p-5">
            <div className="grid grid-cols-2 gap-1">
              <button
                type="button"
                className="gap-2 transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal flex align-items-center"
              >
                <div className="flex align-items-center gap-1 justify-center mx-auto">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                    enableBackground="new 0 0 48 48"
                    className="text-xl my-auto"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                      c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                      c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                      C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                      c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                      c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238c-0.438,0.383,6.729-4.917,6.729-14.89
                      C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  Google
                </div>
              </button>
              <button
                type="button"
                className="gap-2 transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal flex align-items-center"
              >
                <div className="flex align-items-center gap-1 justify-center mx-auto">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-xl my-auto"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c-5.468 0-9.837 4.368-9.837 9.837 0 4.839 3.676 8.838 8.403 9.649-.116-.817-.22-2.073.047-2.966.235-.815 1.515-5.184 1.515-5.184s-.384-.768-.384-1.902c0-1.784 1.035-3.116 2.325-3.116 1.096 0 1.626.822 1.626 1.807 0 1.101-.701 2.742-1.062 4.263-.301 1.276.635 2.315 1.879 2.315 2.255 0 3.994-2.378 3.994-5.801 0-3.028-2.179-5.144-5.296-5.144-3.606 0-5.714 2.704-5.714 5.491 0 1.004.386 2.084.87 2.672.097.117.11.219.082.336-.09.366-.294 1.276-.334 1.451-.053.221-.173.268-.402.162-1.503-.7-2.442-2.889-2.442-4.655 0-3.78 2.746-7.261 7.916-7.261 4.152 0 7.382 2.963 7.382 6.927 0 4.121-2.598 7.436-6.207 7.436-1.21 0-2.346-.63-2.735-1.379 0 0-.653 2.605-.814 3.168-.242.89-.717 1.784-1.15 2.475.955.295 1.96.456 3.01.456 5.468 0 9.837-4.369 9.837-9.837S17.468 2.163 12 2.163z"></path>
                  </svg>
                  Github
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
