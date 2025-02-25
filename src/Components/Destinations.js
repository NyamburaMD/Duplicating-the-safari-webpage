//fetches destinations from backend
//state and effect
import React, { useState, useEffect } from "react";
import SafariCard from "./SafariCard";
const destinations = [

    {
    id: 1,
    title: "Maasai Mara National Reserve",
    image: "https://maxm-imggenurl.web.val.run/maasai-mara-safari-landscape-with-lions-and-acacia-trees",
    description: "Famous for the Great Migration and Abundant Wildlife"
    },

    {
    id: 2,
    title: "Amboseli National Park",
    image: "https://maxm-imggenurl.web.val.run/amboseli-national-park-elephants-with-kilimanjaro-background",
    description: "Known for large elephant herds with backddrop of Mount Kilimanjaro"
    },

    {
    id: 3,
    title: "Tsavo National Park",
    image: "https://maxm-imggenurl.web.val.run/tsavo-national-park-red-elephants-and-savanna-landscape",
    description: "Largest National Park in Kenya, divided into east and west"
    }
]

const Destinations = () => {
    return (
      <section class="destinations">
        <h2>Our Safari Destinations</h2>
        <div className="destination-grid">
            {destinations.map((destination) => (
                <SafariCard key={destination.id} destination={destination}/>
            ))}
        </div>

      </section>
    )
}

export default Destinations;