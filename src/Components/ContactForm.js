//user interactivity, store values, handle submission
// state
import React, { useState } from "react";

const ContactForm() => {
    const [formData, setFormData] =  useState({
        name: "",
        email: "",
        message: ""
    }); 
    const handleChange(event) => {
        const {name.value} = event.target;
        setFormData({formData.[name];
            value});
    };

const handleSubmit() => {}

return (
    <form>
        <button type="submit">Submit</button>
    </form>
)
}
export default ContactForm;

