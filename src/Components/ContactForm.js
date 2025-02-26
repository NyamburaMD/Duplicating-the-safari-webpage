//user interactivity, store values, handle submission
// state
import React, { useState } from "react";
import {destinations} from "./Destinations";
import {agencies} from "./Agency";

const ContactForm = () => {
    const [formData, setFormData] =  useState({
        name: "",
        email: "",
        message: "",
        travelAgency: "",
        destination: ""
    }); 
    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormData({...formData, [name]: value});
    };

const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted successfully:", formData)
    alert("Message sent");
    setFormData({name:"", email:"", message:""});
    
};

return (
    <form onSubmit={handleSubmit}
    className="contact-form">
    <label>
      Destinations:
      <select 
      name="destination"
      value={formData.destination}
      onChange={handleChange}
      required
      >
        <option value="">Choose a destination</option>
        {destinations.map((destination) => (
            <option key={destination.id} value={destination.title}>{destination.title}</option>
        ))}
        </select>  
    </label>

    <label>
        Travel Agency:
        <select 
        name="travelAgency"
        value={formData.travelAgency}
        onChange={handleChange}
        required>
            <option value="">Select Travel Agency</option>
            {agencies.map((agency, index) => (
                <option key={index} value={agency.name}>{agency.name}</option>
            ))}
            </select>
    </label>

    <label>
       <input 
        type="text" 
        name="name"
        placeholder="Your Name" 
        value={formData.name}
        onChange={handleChange}
        />
    </label>

    <label>
       <input 
        type="email" 
        name="name"
        placeholder="Your Email" 
        value={formData.email}
        onChange={handleChange} 
        required
        />
    </label>

    <label>
        <textarea placeholder="Your Message" required></textarea>
    </label>
    
        <button type="submit">Submit</button>
    </form>
);
}
export default ContactForm;

