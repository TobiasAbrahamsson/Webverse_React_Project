import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectSidebar() {
   return (
      <div className="projectSidebar">
         Project sidbar
         <br />
         <Link to={"overview"}>Översikt</Link>
         <Link to={"services"}>Tjänster</Link>
      </div>
   )
}