import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateEvent = () => {
    const navigate = useNavigate();
    const [event, setEvent] = useState({
        eventName: '',
        eventDate: '',
        eventTime: '',
        location: '',
        description: '',
        contactPerson: '',
        contactEmail: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({ ...event, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(event);
        // Handle form submission here
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Add Event</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">Event Name</label>
                    <input
                        type="text"
                        id="eventName"
                        name="eventName"
                        value={event.eventName}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        placeholder="Enter event name"
                    />
                </div>
                <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">Event Date</label>
                    <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={event.eventDate}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <label htmlFor="eventTime" className="block text-sm font-medium text-gray-700">Event Time</label>
                    <input
                        type="time"
                        id="eventTime"
                        name="eventTime"
                        value={event.eventTime}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={event.location}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        placeholder="Enter location"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={event.description}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        placeholder="Enter event description"
                        rows="4"
                    />
                </div>
                <div>
                    <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">Contact Person</label>
                    <input
                        type="text"
                        id="contactPerson"
                        name="contactPerson"
                        value={event.contactPerson}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        placeholder="Enter contact person name"
                    />
                </div>
                <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Contact Email</label>
                    <input
                        type="email"
                        id="contactEmail"
                        name="contactEmail"
                        value={event.contactEmail}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        placeholder="Enter contact email"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateEvent;
