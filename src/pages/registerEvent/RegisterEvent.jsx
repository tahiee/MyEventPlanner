/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import img from "../../images/original.avif";
import MainNavbar from "../../components/Navbar/MainNavbar";
import { baseURL } from "../../constent";

function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

const RegisterEvent = () => {
  const { id } = useParams(); // Get the event ID from URL params
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`${baseURL}/api/events/register/${id}`); // Fixed URL
        if (!response.ok) {
          throw new Error("Event not found");
        }
        const data = await response.json();
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!event) return <p>No event found</p>;

  return (
    <>
      <MainNavbar />
      <div className="bg-white min-h-screen mt-8">
        <div className="bg-[#f8f9f9] w-90 mx-2 sm:w-3/5 sm:mx-auto rounded-xl p-2 mb-2 sm:mb-4">
          {/* <img
            alt="Event Image"
            className="object-cover h-3/6 w-full rounded"
            src={img} // This should be dynamic if you have a URL for the banner image
          /> */}
          <img
            className="object-cover object-center rounded"
            alt={event.eventname}
            src={
              event.banner
                ? `data:${
                    event.banner.contentType
                  };base64,${arrayBufferToBase64(event.banner.data.data)}`
                : img
            }
          />
          <div className="w-3/4 p-5">
            <h1 className="text-black font-bold text-xl sm:text-4xl">
              {event.eventname}
            </h1>
            <p className="text-gray-800 py-2 text-md sm:text-lg">
              Hosted by {event.hostname}
            </p>
            <div className="flex flex-col sm:flex-row justify-between w-full py-1">
              <div className="flex flex-row pb-2">
                <div>
                  <h3 className="text-gray-800 font-bold text-md sm:text-lg">
                    {new Date(event.eventdate).toLocaleDateString()}{" "}
                    {/* Format date */}
                  </h3>
                </div>
              </div>
              <div className="flex flex-row pb-2">
                <div>
                  <h3 className="text-black font-bold text-md sm:text-lg">
                    {event.hostname}
                  </h3>
                  <span className="text-gray-700">
                    {event.city}, {event.country}
                  </span>
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
                Hello! To join the event, please register below.
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
                <p>{event.description || "Test Description Hi"}</p>
                <div className="flex flex-col text-md sm:text-lg py-5">
                  <p className="text-black text-xl font-bold flex justify-center py">
                    Follow us on
                  </p>
                  <span className="flex justify-center py-5">
                    {event.socialLinks?.website && (
                      <a
                        href={event.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
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
                          <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                        </svg>
                      </a>
                    )}
                    {event.socialLinks?.instagram && (
                      <a
                        href={event.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
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
                          <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                        </svg>
                      </a>
                    )}
                    {/* Add other social links here */}
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
              <div>
                <p className="text-gray-700 font-bold p-2 text-md sm:text-lg">
                  {event.city}, {event.country}
                </p>
                <p className="text-black-700 p-2 text-md sm:text-lg">
                  {event.address}
                </p>
              </div>
            </div>
            <div className="bg-[#f8f9f9] mx-auto rounded-xl p-2 mb-2 sm:mb-4 divide-black">
              <h3 className="text-gray-700 px-3 pb-3 pt-1 font-bold text-md sm:text-lg">
                Agenda
              </h3>
              <hr className="divide-black" />
              <p className="text-black-700 p-2 text-md sm:text-lg">
                {event.agenda}
              </p>
            </div>
            <div className="bg-[#f8f9f9] mx-auto rounded-xl p-2 mb-2 sm:mb-4 divide-black">
              <h3 className="text-gray-700 px-3 pb-3 pt-1 font-bold text-md sm:text-lg">
                Contact
              </h3>
              <hr className="divide-black" />
              <p className="text-black-700 p-2 text-md sm:text-lg">
                {event.email}
              </p>{" "}
              {/* Assuming contact info is the email */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterEvent;
