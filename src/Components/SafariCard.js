//hover effects and toggles
//state 
import React from "react";

const SafariCard = ({ image, title, description}) => {
    return (
        <div className="safari-card">
            <img src={image} alt={title} className="destination-image"/>
            <div className="destination-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
export default SafariCard;