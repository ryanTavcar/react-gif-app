import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import { FaHamburger } from 'react-icons/fa';

//Stylesheet
import '../styles/Navbar.css';

function MobileNavbarLinks({ links }) {

    const [useNavbar, setNavbar] = useState({'display': 'none'})
    const [useToggle, setToggle] = useState(false)

    const handleNavbarActive = () => {
        setNavbar({'display': 'block'})
        setToggle(true);
        return
    };

    const handleNavbarInactive = () => {
        setNavbar({'display': 'none'})
        setToggle(false);
        return
    }

    return (
        <>
            <div className="mobile-navbar-wrapper">
                    <button onClick={useToggle? handleNavbarInactive : handleNavbarActive} >
                        <FaHamburger size={20}/>
                    </button>
            </div>

            <nav className="navbar-mobile" style={useNavbar} >
                <ul className="navbar-ul-mobile">
                    <li className="navbar-li" >
                        <NavLink to="/" className="navbar-link-mobile" exact activeStyle={{textDecoration: 'underline'}} >{links.all}</NavLink>
                    </li>
                    <li className="navbar-li" >
                        <NavLink to="/trending" className="navbar-link-mobile" exact activeStyle={{textDecoration: 'underline'}} >{links.trending}</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default MobileNavbarLinks
