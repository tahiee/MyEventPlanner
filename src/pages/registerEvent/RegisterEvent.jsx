/* eslint-disable no-unused-vars */
import React from "react";
import img from '../../images/original.avif'
import MainNavbar from "../../components/Navbar/MainNavbar.jsx";

const RegisterEvent = () => {
  return (
    <>
    <MainNavbar/>
      <div className="bg-white min-h-screen mt-8">
        <div className="bg-[#f8f9f9] w-90 mx-2 sm:w-3/5 sm:mx-auto rounded-xl p-2 mb-2 sm:mb-4">
          <img
            alt="Event Image"
            className="object-cover h-3/6 w-full rounded"
            src={img}
          />
          <div className="w-3/4 p-5">
            <h1 className="text-black font-bold text-xl sm:text-4xl">
              Test Event
            </h1>
            <p className="text-gray-800 py-2 text-md sm:text-lg">
              Hosted by Aditya
            </p>
            <div className="flex flex-col sm:flex-row justify-between w-full py-1">
              <div className="flex flex-row pb-2">
                <div>
                  <h3 className="text-gray-800 font-bold text-md sm:text-lg">
                    2024-01-01
                  </h3>
                </div>
              </div>
              <div className="flex flex-row pb-2">
                <div>
                  <h3 className="text-black font-bold text-md sm:text-lg">
                    Dehradun
                  </h3>
                  <span className="text-gray-700">Dehradun, Uttarakhand</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4"></div>
        </div>
        <div className="w-full sm:w-3/5 mx-auto flex flex-col sm:flex-row gap-2 sm:gap-4">
          <div className="w-90 mx-2 sm:w-2/3 sm:mx-0">
            <div className="bg-[#f8f9f9] mx-auto rounded-xl p-2 mb-2 sm:mb-4">
              <h4 className="text-black px-3 pb-3 pt-1 font-bold text-md sm:text-lg">
                Registration
              </h4>
              <hr />
              <p className="text-grey-800 py-4 px-3 text-md sm:text-lg">
                Hello! To joint the event, please register below.
              </p>
              <button className="bg-[#f02e65] text-white w-full rounded-lg p-1 text-md sm:text-lg hover:bg-[#990e3c] flex justify-center">
                Registered
              </button>
            </div>
            <div className="bg-[#f8f9f9] mx-auto rounded-xl p-2">
              <h4 className="text-black px-3 pb-3 pt-1 font-bold text-md sm:text-lg">
                About Event
              </h4>
              <hr />
              <div className="px-3 py-5">
                <p>Test Description Hi</p>
              
                <div className="flex flex-col text-md sm:text-lg py-5">
                  <p className="text-black text-xl font-bold flex justify-center py">
                    Follow us on
                  </p>
                  <span className="flex justify-center py-5">
                    <a href="https://oberai.dev/" target="_blank">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fontSize="50"
                        className="px-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
                        <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
                        <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path>
                        <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
                        <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
                        <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path>
                        <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                        <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                        <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                      </svg>
                    </a>
                    {/* <a href="https://twitter.com/adityaoberai1" target="_blank">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        fontSize="50"
                        className="px-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                      </svg>
                    </a> */}
                    {/* <a
                      href="https://linkedin.com/in/adityaoberai1"
                      target="_blank"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        fontSize="50"
                        className="px-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                      </svg>
                    </a> */}
                    <a
                      href="https://instagram.com/adityaoberai1"
                      target="_blank"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        fontSize="50"
                        className="px-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-90 mx-2 sm:w-1/3 sm:mx-0">
            <div className="bg-[#f8f9f9] mx-auto rounded-xl p-2 mb-2 sm:mb-4">
              <h3 className="text-black px-3 pb-3 pt-1 font-bold text-md sm:text-lg">
                Location
              </h3>
              <hr />
              {/* <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="index_1.html"
                    scrolling="no"
                  ></iframe>
                </div>
              </div> */}
              <div>
                <p className="text-gray-700 font-bold p-2 text-md sm:text-lg">
                  Dehradun
                </p>
                <p className="text-black-700 p-2 text-md sm:text-lg">
                  Dehradun, Uttarakhand, IN - 248001
                </p>
              </div>
            </div>
            <div className="bg-[#f8f9f9] mx-auto rounded-xl p-2 mb-2 sm:mb-4 divide-black">
              <h3 className="text-gray-700 px-3 pb-3 pt-1 font-bold text-md sm:text-lg">
                Agenda
              </h3>
              <hr className="divide-black" />
              <p className="text-black-700 p-2 text-md sm:text-lg">.NET</p>
            </div>
            <div className="bg-[#f8f9f9] mx-auto rounded-xl p-2 mb-2 sm:mb-4 divide-black">
              <h3 className="text-gray-700 px-3 pb-3 pt-1 font-bold text-md sm:text-lg">
                Hosts
              </h3>
              <hr className="divide-black" />
              <p className="font-bold text-gray-600 p-2 text-md sm:text-lg">
                Aditya
              </p>
              <button className="w-full bg-[#f02e65] p-1 text-gray-200 hover:bg-[#990e3c] flex justify-center rounded-lg text-md sm:text-lg">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterEvent;
