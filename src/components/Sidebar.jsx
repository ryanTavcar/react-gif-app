import React, {useState} from 'react';
import Navbar from './NavbarLinks';
import '../styles/Navbar.css';
import profilePic from '../empty-pfp.jpg';

const links = {
    trending: 'Trending',
    all: 'All',
    random: 'Random'
};

function Sidebar ({ onChangeHandler, userInput, submitHandler}) {

    // const [userInput, setUserInput] = useState("");

    // const onChangeHandler = (e) => {
    //     setUserInput(e.target.value)
    // }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(userInput)
    // }

    // useEffect(() => {
    //     console.log(userInput)
    // }, [userInput])

    return (
        <div className="sidebar-wrapper">
            <div className="user-details">
                <img className="profile-img" src={profilePic} alt="user-pfp"></img>
                <p>username</p>
            </div>
            <form className="form-control" onSubmit={submitHandler}>
                <input className="search-field" 
                type="text" 
                value={userInput} 
                onChange={onChangeHandler}
                placeholder="comment here...">
                </input>
                <button type="submit">Search</button>
            </form>
            
            <Navbar 
            links={links}/>
        </div>
    )
}

export default Sidebar
