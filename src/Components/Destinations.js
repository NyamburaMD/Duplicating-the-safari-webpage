//fetches destinations from backend
//state and effect
import React, { useState, useEffect } from "react";
import SafariCard from "./SafariCard";
const destinations = [

    {
    id: 1,
    title: "Maasai Mara National Reserve",
    image: "https://maxm-imggenurl.web.val.run/maasai-mara-safari-landscape-with-lions-and-acacia-trees",
    description: "Famous for the Great Migration and Abundant Wildlife",
    highlights: ["Lion prides", "Wildebeest migration", "Hot air balloon safaris"],
    bestTime: "July to October"
    },

    {
    id: 2,
    title: "Amboseli National Park",
    image: "https://maxm-imggenurl.web.val.run/amboseli-national-park-elephants-with-kilimanjaro-background",
    description: "Known for large elephant herds with backddrop of Mount Kilimanjaro",
    highlights: ["Elephant herds", "Mountain views", "Bird watching"],
    bestTime: "June to October"
    },

    {
    id: 3,
    title: "Tsavo National Park",
    image: "https://maxm-imggenurl.web.val.run/tsavo-national-park-red-elephants-and-savanna-landscape",
    description: "Largest National Park in Kenya, divided into east and west",
    highlights: ["Red elephants", "Diverse landscapes", "Less crowded"],
    bestTime: "June to October and January to February"
    }
];
export {destinations};

const Destinations = () => {
    return (
      <section class="destinations">
        <h2>Our Safari Destinations</h2>
        <div className="destination-grid">
            {destinations.map((destination) => (
                <SafariCard 
                key={destination.id}
                image={destination.image} 
                title={destination.title}
                description={destination.description}
                highlights={destination.highlights}
                bestTime={destination.bestTime}
                
                />
            ))}
        </div>

      </section>
    )
}

export default Destinations;