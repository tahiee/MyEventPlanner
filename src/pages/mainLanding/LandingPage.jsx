import React from "react";
import { GoBroadcast } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import MainNavbar from "../../components/Navbar/MainNavbar";
import ActiveEvents from "../activeEvents/ActiveEvents";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainNavbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Experience hassle free event
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Welcome to our innovative event management application
              MyEventPlanner, where organizing and executing unforgettable
              events becomes effortless. Streamline your planning process and
              create extraordinary experiences with our intuitive platform.
            </p>
          </div>
          <div className="flex items-center justify-center py-2">
            <Link to="/createevent">
              <button
                className="bg-[#f02e65] py-5 px-8 focus:outline-none hover:bg-[#ab073d] rounded-full"
                onClick={() => navigate("")}
              >
                <div className="flex align-items-center gap-1 justify-center mx-auto">
                  <GoBroadcast className="text-xl my-auto text-white" />
                  <p className="text-xl my-1 text-white">Create Event</p>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <ActiveEvents />
    </>
  );
};

export default LandingPage;
