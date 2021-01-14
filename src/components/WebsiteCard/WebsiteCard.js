import React from "react";
import { Link } from "react-router-dom";

export default function WebsiteCard(props) {
   const statusColor = [
      { background: "green" },
      { background: "orange" },
      { background: "red" }
   ]

   return (
      <div>
         <div className="websitesCard">
            <h2>{props.title}</h2>
            <p>{props.url}</p>
            <p>{props.status}</p>
            <div className="websiteStatus" style={statusColor[props.status]}></div>
            <Link to={`${props.id}/overview`}>Hantera</Link>
         </div>
      </div>
   )
}