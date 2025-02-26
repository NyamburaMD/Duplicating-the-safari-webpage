import React from "react";
import "../styles/App.css"

const AgencyCard=({agency}) => {
    return (
        <div className="agency-card">
            <h3>{agency.name}</h3>
            <p>{agency.description}</p>
            <p><strong>Specialties:</strong> {agency.specialties}</p>
            <p>{agency.tel}</p>
            <p>{agency.email}</p>
        </div>
    );
};

export default AgencyCard;