import React from "react";
import AgencyCard from "./AgencyCard";
 const Agency = () => {
   const agencies = [
    {
        name: ["Kenya Expeditions", "⭐ 4.5/5"],
        description: "Experienced safari operator specializing in budget-friendly group adventures across Kenya's national parks.",
        specialties: ["Specialties", "Maasai Mara, Budget Safaris, Group Tours"],
        tel: "📞 +254 720 123 456",
        email: "✉️ bookings@kenyaexpeditions.com"
   },

   {
    name: ["Safari Seekers", "⭐ 4.8/5"],
    description: "Premium safari experiences with expert guides and exclusive wildlife photography opportunities.",
    specialties: ["Specialties:", "Luxury Safaries, Private Tours, Photography Expeditions"],
    tel:"📞 +254 733 987 654",
    email: "✉️ info@safariseekers.com"
    },

    {
        name: ["Wild Horizons Tours", "⭐ 4.6/5"],
        description: "Sustainable safari experiences focusing on wildlife conservation and family-friendly adventures.",
        specialties: ["Specialties:", "Family Safaris, Conservation Tours, Eco-Friendlt Trips"],
        tel: "📞 +254 710 456 789",
        email: "✉️ contact@wildhorizonstours.com"
   },

   {
    name: ["African Wildlife Adventures", "⭐ 4.4/5"],
    description: "Immersive safari experiences that combine wildlife viewing with authentic cultural interactions.",
    specialties: ["Specialties:", "Camping Safaris, Bird Watching, Cultural Experiences"],
    tel: "📞 +254 722 345 678",
    email: "✉️ bookings@africanwildlife.com"
    },

    {
        name: ["Serengeti Explorers", "⭐ 4.7/5"],
        description: "Specialized tours tracking the Great Migration with top-tier accommodation and expert guides.",
        specialties: ["Specialties:", "Migration Safaris, Luxury Camping, Photographic Safaris"],
        tel: "📞 +254 740 234 567",
        email: "✉️ tours@serengetiexplorers.com"
   }
] ;

   return (
    <div className="agency-card">
        {agencies.map((agency, index) => (
            <AgencyCard key={index}
            agency={agency} />
        ))}
    </div>
   );
 };

 export default Agency;