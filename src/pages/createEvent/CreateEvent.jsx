/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainNavbar from "../../components/Navbar/MainNavbar";
import { baseURL } from "../../constent";

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventdate, setEventDate] = useState('');
  const [description, setDescription] = useState('');
  const [banner, setBanner] = useState(null);
  const [audience, setAudience] = useState('');
  const [eventType, setEventType] = useState('');
  const [price, setPrice] = useState('');
  const [tech, setTech] = useState('');
  const [agenda, setAgenda] = useState('');
  const [hostname, setHostname] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [instagram, setInstagram] = useState('');

  const handleFileChange = (e) => {
    setBanner(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('eventname', eventName);
    formData.append('description', description);
    formData.append('banner', banner);
    formData.append('type', eventType);
    formData.append('price', price);
    formData.append('tech', tech);
    formData.append('agenda', agenda);
    formData.append('hostname', hostname);
    formData.append('eventdate', eventdate);
    formData.append('audience', audience);
    formData.append('email', email);
    formData.append('country', country);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('website', website);
    formData.append('instagram', instagram);

    fetch(`${baseURL}/createevent`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <MainNavbar />
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl text-[#f02e65] font-bold mb-4 my-5">
          Create New Event
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="eventname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Event Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="eventname"
                      autoComplete="off"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      type="text"
                      value={eventName}
                      name="eventname"
                      onChange={(e) => setEventName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    // for="eventdate"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Event Date
                  </label>
                  <div className="mt-2">
                    <input
                      id="eventdate"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      type="date"
                      value={eventdate}
                      name="eventdate"
                      onChange={(e) => setEventDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    // for="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      rows="3"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about your event.
                  </p>
                </div>
                <div className="col-span-full">
                  <label
                    // for="banner"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Banner photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="mx-auto h-12 w-12 text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <div className="col-span-2">
                        <label className="text-gray-700 font-semibold">
                          Banner of Event:
                        </label>
                        <input
                          id="banner"
                          accept="image/*"
                          onChange={handleFileChange}
                          pattern="/(\.jpg|\.jpeg|\.png|\.gif)$/i"
                          className="border-2 rounded-md w-full px-3 py-2 mt-1"
                          type="file"

                        />
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Event Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Give some specific information about your awesome event
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    // for="audience"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Target Audience
                  </label>
                  <div className="mt-2">
                    <input
                      id="audience"
                      value={audience}
                      name="audience"
                      placeholder="Ex: Developers, Designers"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      type="text"
                      onChange={(e) => setAudience(e.target.value)}

                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    // for="type"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Event Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="type"
                      name="type"
                      value={eventType}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      onChange={(e) => setEventType(e.target.value)}
                    >
                      <option selected="selected">In Person</option>
                      <option>Virtual</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    // for="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Ticket Price (Enter 0 if free)
                  </label>
                  <div className="mt-2">
                    <input
                      id="price"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      type="number"
                      value={price}
                      name="price"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    // for="tech"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Wifi Available
                  </label>
                  <div className="mt-2">
                    <select
                      id="tech"
                      name="tech"
                      value={tech}
                      onChange={(e) => setTech(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option selected="selected">Yes</option>
                      <option>No</option>
                      <option>Not sure</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    // for="agenda"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Agenda
                  </label>
                  <div className="mt-2">
                    <input
                      id="agenda"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      type="text"
                      value={agenda}
                      name="agenda"
                      onChange={(e) => setAgenda(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Event Contact
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Give some contact information about your awesome event
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    // for="hostname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Host Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="hostname"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      type="text"
                      value={hostname}
                      name="hostname"
                      onChange={(e) => setHostname(e.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    // for="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contact Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      autoComplete="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      type="email"
                      value={email}
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    // for="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <input
                      id="country"
                      autoComplete="country"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      type="text"
                      value={country}
                      name="country"
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3 ">
                  <label
                    // for="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      type="text"
                      value={city}
                      name="city"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    // for="address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      id="address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      type="text"
                      value={address}
                      name="address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                {/* <div className="sm:col-span-2">
                  <label
                    // for="state"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      id="state"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      type="text"
                      value={state}
                      name="state"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </div> */}
                {/* <div className="sm:col-span-2">
                  <label
                    // for="postal"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      id="postal"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      type="text"
                      value={postal}
                      name="postal"
                      onChange={(e) => setPostal(e.target.value)}
                    />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Social Links
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Help your attendees connect with you (Please enter proper full
                URLs along with https://)
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    // for="websitel"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Website link
                  </label>
                  <div className="mt-2">
                    <input
                      id="website"
                      placeholder="https://coolwebsite.com/"
                      pattern="https://.*"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      type="text"
                      value={website}
                      name="website"
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    // for="instagraml"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Instagram link
                  </label>
                  <div className="mt-2">
                    <input
                      id="instagram"
                      placeholder="https://www.instagram.com/"
                      pattern="https://.*"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      type="text"
                      value={instagram}
                      name="instagram"
                      onChange={(e) => setInstagram(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Requires Approval
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Will participants need approval from your side to attend
                    event after registration?
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="yes"
                        className="h-4 w-4 border-gray-300 text-[#f02e65] focus:ring-[#f02e65]"
                        type="radio"
                        value="Yes"
                        name="approval"
                      />
                      <label
                        // for="yes"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="no"
                        className="h-4 w-4 border-gray-300 text-[#f02e65] focus:ring-[#f02e65]"
                        type="radio"
                        value="No"
                        name="approval"
                      />
                      <label
                        // for="no"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div> */}
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6 py-5">
            <button
              type="submit"
              className="rounded-md bg-[#f02e65] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#f02e65] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f02e65]"
            >
              Save
            </button>
            <Link to="/landing">
              <button
                type="submit"
                className="rounded-md bg-[#f02e65] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#f02e65] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f02e65]"
              >
                Go Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateEvent;

