import React from "react";
import "../styles/App.css";

const SafariCard = ({ image, title, description, highlights, bestTime}) => {
    return (
        <div className="safari-card">
            <img src={image} alt={title} className="destination-image"/>
            <div className="destination-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <p><strong>Highlights:</strong></p>
                <ul>
                    {highlights.map((item, index) =>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p><strong>Best Time to Visit:</strong></p>
                <p>{bestTime}</p>
                
            </div>
        </div>
    );
}
export default SafariCard;