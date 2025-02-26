//user interactivity, store values, handle submission
// state
import React, { useState } from "react";
import Destinations from "./Destinations";

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
        setFormData({formData,[name]:value});
    };

const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted successfully!")
};

return (
    <form onSubmit={handleSubmit}
    className="contact-form">
    <label>
      Destinations:
      <select required>Select Safari Destination</select>  
    </label>

    <label>
        Travel Agency:
        <select required>Select Travel Agency</select>
    </label>
    
        <button type="submit">Submit</button>
    </form>
);
}
export default ContactForm;

