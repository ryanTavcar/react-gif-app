import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

//Stylesheet
import './styles/App.css';

//Componenents
import Sidebar from './components/Sidebar';
import MobileNavbarLinks from './components/MobileNavbarLinks';
import Trending from './components/Trending';
import AllGifs from './components/AllGifs';
import Random from './components/Random';


const links = {
    trending: 'Trending',
    all: 'All',
    random: 'Random'
}

function App() {

    const isSmallScreen = useMediaQuery({ minWidth: 200, maxWidth: 800 });
    const isLargeScreen = useMediaQuery({ minWidth: 801, maxWidth: 3840 });
    const [userInput, setUserInput] = useState("");
    const [searchInput, setSearchInput] = useState("");



    const onChangeHandler = (e) => {
        setUserInput(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setSearchInput(e.target[0].value)
        const clearFields = () => {
            setUserInput(e.target[0].value = '');
        };
        clearFields();
    }

    return (
        <div className="app-container">
        
        {isSmallScreen && 
            <>
                <Router>

                    <MobileNavbarLinks 
                    links={links} />

                    <Switch>
                        <Route exact path="/">
                            <AllGifs />
                        </Route>
                        <Route exact path="/trending">
                            <Trending />
                        </Route>
                        <Route exact path="/random">
                            <Random />
                        </Route>

                    </Switch> 
                        
                </Router>
            </>
        }

        {isLargeScreen &&
            <>
                    <Router>

                        <Sidebar
                        userInput={userInput}
                        onChangeHandler={onChangeHandler}
                        submitHandler={submitHandler}
                        />

                        <Switch>
                            <Route exact path="/">
                                <AllGifs 
                                query={searchInput}
                                />
                            </Route>
                            <Route exact path="/trending">
                                <Trending />
                            </Route>
                            <Route exact path="/random">
                                <Random />
                            </Route>
                        </Switch> 
                        
                    </Router>
            </>
        
        }
        </div>
    )
}

export default App;
