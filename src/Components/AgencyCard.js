import React from "react";

const AgencyCard=({agency}) => {
    return (
        <div className="agency-card">
            <div>
                <h2>Travel Agencies</h2>
            </div>
            <h3>{agency.name}</h3>
            <p>{agency.description}</p>
        </div>
    );
}

export default AgencyCard;