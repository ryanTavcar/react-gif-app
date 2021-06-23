import React from 'react';
import useFetch from './useFetch';
import '../styles/Gif.css';
import GifCard from './GifCard';

const API_KEY = process.env.REACT_APP_API_KEY;
let key = 0;

function Trending() {

    const [data, isLoaded] = useFetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=r`)

    if (isLoaded === false){
        return <p>Loading...</p>
    }

    return (
        <div className="trending-wrapper">
            <ul className="gif-list" >
                {data.map( gif => (
                    <li className="gif-item" key={key++} >
                        <GifCard 
                        gif={gif.images.original.url}
                        />
                    </li>
                ))}
            </ul>  
        </div>
    )

};

export default Trending
