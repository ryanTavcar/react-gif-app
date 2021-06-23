import React from 'react'
import { NavLink } from "react-router-dom";

//Stylesheet
import '../styles/Navbar.css'

const Navbar = ({links}) => {
    return (
        <nav className="navbar-wrapper">
            <ul className="navbar-ul">
                <li className="navbar-li" >
                    <NavLink to="/" className="navbar-link" exact activeStyle={{textDecoration: 'underline'}} >{links.all}</NavLink>
                </li>
                <li className="navbar-li" >
                    <NavLink to="/trending" className="navbar-link" exact activeStyle={{textDecoration: 'underline'}}>{links.trending}</NavLink>
                </li>
                <li className="navbar-li" >
                    <NavLink to="/random" className="navbar-link" exact activeStyle={{textDecoration: 'underline'}}>{links.random}</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
