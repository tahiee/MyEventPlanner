import React, { useState, useEffect } from "react";
import axios from "axios";
import MainNavbar from "../../components/Navbar/MainNavbar";
import img from '../../images/Myeventplanner__1_-removebg-preview.png';
import { baseURL } from "../../constent/index";
const MyEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch event data from server
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/auth/myevents`); // Replace with your API endpoint
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <MainNavbar />
      <div className="max-w-7xl mx-auto">
        <p className="text-3xl font-bold mb-2 text-center mx-auto py-5">
          My Active Events
        </p>
        <div className="py-10">
          {events.length === 0 ? (
            <p>No events found</p>
          ) : (
            events.map((event) => (
              <div key={event._id} className="py-10">
                <section className="text-gray-600 body-font">
                  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                      <img
                        className="object-cover object-center rounded"
                        alt={event.eventname}
                        src={
                          event.banner
                            ? URL.createObjectURL(
                              new Blob([event.banner.data.buffer], { type: event.banner.contentType })
                            )
                            : img
                        }
                      />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {event.eventname}
                      </h1>
                      <p className="mb-8 leading-relaxed">{event.description}</p>
                      <div className="flex items-center mb-2">
                        <p className="mb-8 leading-relaxed mx-2">Type: {event.type}</p>
                      </div>
                      <div className="flex items-center mb-2">
                        <p className="mb-8 leading-relaxed mx-2">Audience: {event.audience}</p>
                      </div>
                      <div className="flex justify-center">
                        <button className="inline-flex text-white bg-[#f02e65] border-0 py-2 px-6 focus:outline-none hover:bg-[#b51349] rounded text-lg">
                          Register
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                          View Registrations
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                          Delete Event
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default MyEvents;
