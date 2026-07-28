import React, { useState } from 'react'
import {BsSun} from "react-icons/bs"
import {FiBell,FiChevronDown} from "react-icons/fi"
import "../styles/navbar.css";
import profile from "../assets/doctorimage.jpg";
const Navbar = () => {
    // const[name,setName]=useState("Ishita")
  return (
    <div className="navbar">
        <div className="Left-Navbar">
            {/* <h1>Welcome Back 👋 </h1>
            <p>Practice your diagnostic skills with AI generated patients</p> */}
        </div>
        {/* <div className="Right-Navbar">
            <BsSun className="nav-icon"/>
            <FiBell className="nav-icon"/>
            <div className= "Profile">
                <img src={profile} alt="profile" />
            </div>
            <div className="profile-text">
                <h4>Dr. {name}</h4>
                <p> Medical student </p>
            </div>
        </div> */}
      
    </div>
  )
}

export default Navbar
