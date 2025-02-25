//hover effects and toggles
//state 
import React, { useState } from "react";

const SafariCard = ({ image, title, description}) => {
    return (
        <div className="safari-card">
            <img src="https://maxm-imggenurl.web.val.run/maasai-mara-safari-landscape-with-lions-and-acacia-trees" alt="Maasai Mara NationalReserve" className="destination-image"/>
            <div className="destination-content">
                <h3>Maasai Mara National Reserve</h3>
                <p>Famous for the Great Migration and abundant wildlife</p>
            </div>
        </div>
    );
}