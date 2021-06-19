import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

//Stylesheet
import './styles/App.css';

//Componenents
import MobileNavbarLinks from './components/MobileNavbarLinks';
import NavbarLinks from './components/NavbarLinks';
import Trending from './components/Trending';
import AllGifs from './components/AllGifs';


const links = {
    trending: 'Trending',
    all: 'All'
}

function App() {
    const isSmallScreen = useMediaQuery({ minWidth: 200, maxWidth: 800 });
    const isLargeScreen = useMediaQuery({ minWidth: 801, maxWidth: 3840 });

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

                    </Switch> 
                        
                </Router>
            </>
        }

        {isLargeScreen &&
            <>
                <Router>

                    <NavbarLinks
                    links={links} 
                    />

                    <Switch>
                        <Route exact path="/">
                            <AllGifs />
                        </Route>
                        <Route exact path="/trending">
                            <Trending />
                        </Route>
                    </Switch> 
                    
                </Router>
            </>
        
        }
        </div>
    )
}

export default App;
