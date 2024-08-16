import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/Myeventplanner__1_-removebg-preview.png";

const MainNavbar = () => {
  const navigate = useNavigate();
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setAlertVisible(true); // Show the alert
    setTimeout(() => {
      setAlertVisible(false); // Hide the alert after 3 seconds
      navigate("/login");
    }, 1000);
  };

  return (
    <>
    {alertVisible && (
        <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-6 z-50">
          Signed out successfully!
        </div>
      )}
      <header className="text-gray-400 bg-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/landing">
            <img src={logo} height={200} width={200} alt="Product Logo" />
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              className="myEvents mr-5 hover:text-gray-900 text-gray-500"
              to="/myevents"
            >
              My Events
            </Link>
            {/* <Link className="mr-5 hover:text-gray-900 text-gray-500" to="/createevent">
              Create Event
            </Link> */}
          </nav>
          <button
            className="inline-flex items-center bg-[#f02e65] border-0 py-1 px-3 focus:outline-none hover:bg-[#ab073d] rounded-full text-base mt-4 md:mt-0"
            onClick={handleSignOut}
          >
            <p className="text-sm my-1 text-white">Sign Out</p>
          </button>
        </div>
      </header>
    </>
  );
};

export default MainNavbar;
