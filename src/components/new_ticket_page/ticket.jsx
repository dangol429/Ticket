import React, { useState } from 'react';
import './ticket.css';

const NewTicket = () => {
  const [leadSource, setLeadSource] = useState('');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleRegNumber, setVehicleRegNumber] = useState('');
  const [breakdownIssue, setBreakdownIssue] = useState('');
  const [location, setLocation] = useState('');
  const [serviceFee, setServiceFee] = useState('');
  const [assistanceTime, setAssistanceTime] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate mandatory fields
    if (!leadSource || !name || !contactNumber || !email || !vehicleMake || !vehicleRegNumber || !breakdownIssue || !location) {
      alert('Please fill in all mandatory fields.');
      return;
    }

    // Validate email address
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate vehicle registration number
    const vehicleRegNumberRegex = /^[A-Z0-9]+$/;
    if (!vehicleRegNumberRegex.test(vehicleRegNumber)) {
      alert('Please enter a valid vehicle registration number (all caps, no spaces).');
      return;
    }

    // Perform form submission logic here
    // Access the entered form values in the state variables
    console.log('Form submitted:', {
      leadSource,
      name,
      contactNumber,
      email,
      vehicleMake,
      vehicleRegNumber,
      breakdownIssue,
      location,
      serviceFee,
      assistanceTime,
      comments,
    });
    // Show the "New Task Created Successfully" pop-up screen
    alert('New Task Created Successfully');
  };

  const getCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    return currentTime;
  };

  return (
    <div className='ticket-container'>
      <h2>New Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="leadSource">Lead Source:</label>
        <select
          id="leadSource"
          value={leadSource}
          onChange={(e) => setLeadSource(e.target.value)}
          required
        >
          <option value="">Select Lead Source</option>
          <option value="Web">Web</option>
          <option value="Chat">Chat</option>
          <option value="Call">Call</option>
        </select>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="text"
          id="contactNumber"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="vehicleMake">Vehicle Make:</label>
        <input
          type="text"
          id="vehicleMake"
          value={vehicleMake}
          onChange={(e) => setVehicleMake(e.target.value)}
          required
        />

        <label htmlFor="vehicleRegNumber">Vehicle Registration Number:</label>
        <input
          type="text"
          id="vehicleRegNumber"
          value={vehicleRegNumber}
          onChange={(e) => setVehicleRegNumber(e.target.value.toUpperCase())}
          required
        />

        <label htmlFor="breakdownIssue">Breakdown Issue:</label>
        <input
          type="text"
          id="breakdownIssue"
          value={breakdownIssue}
          onChange={(e) => setBreakdownIssue(e.target.value)}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <label htmlFor="serviceFee">Service Fee:</label>
        <input
          type="text"
          id="serviceFee"
          value={serviceFee}
          onChange={(e) => setServiceFee(e.target.value)}
        />

        <label htmlFor="assistanceTime">Assistance Time:</label>
        <input
          type="text"
          id="assistanceTime"
          value={assistanceTime || getCurrentTime()}
          readOnly
        />

        <label htmlFor="comments">Comments:</label>
        <textarea
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewTicket;
