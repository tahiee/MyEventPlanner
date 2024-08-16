import React, { useState, useEffect } from "react";
import axios from "axios";
import MainNavbar from "../../components/Navbar/MainNavbar";
import img from "../../images/Myeventplanner__1_-removebg-preview.png";
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
const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem("token"); // Adjust this based on where you store your token
  const userId = localStorage.getItem("userId"); // Or wherever you store your user ID
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/events/myevents`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEvents(response.data);
        setloading(false);
        console.log(response.data, "data received");
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    if (token) {
      fetchEvents();
    }
  }, [token]);

  const handleDelete = async (eventId) => {
    try {
      await axios.delete(`${baseURL}/api/events/deleteevent/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });
      setEvents(events.filter((event) => event._id !== eventId)); // Update the events state to remove the deleted event
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <>
      <MainNavbar />
      <div className="max-w-7xl mx-auto">
        <p className="text-3xl font-bold mb-2 text-center mx-auto py-5">
          My Active Events
        </p>
        <div className="py-10">
          {loading ? ( // Check if data is being loaded
            <div className="text-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : events.length === 0 ? (
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
                            ? `data:${
                                event.banner.contentType
                              };base64,${arrayBufferToBase64(
                                event.banner.data.data
                              )}`
                            : img
                        }
                      />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {event.eventname}
                      </h1>
                      <p className="mb-8 leading-relaxed">
                        {event.description}
                      </p>
                      <div className="flex items-center mb-2">
                        <p className="mb-8 leading-relaxed mx-2">
                          Type: {event.type}
                        </p>
                      </div>
                      <div className="flex items-center mb-2">
                        <p className="mb-8 leading-relaxed mx-2">
                          Audience: {event.audience}
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <button className="inline-flex text-white bg-[#f02e65] border-0 py-2 px-6 focus:outline-none hover:bg-[#b51349] rounded text-lg">
                          Register
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                          View Registrations
                        </button>
                        <button
                          onClick={() => handleDelete(event._id)}
                          className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                        >
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
