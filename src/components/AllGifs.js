import React from 'react';
import useFetch from './useFetch';
import '../styles/trending.css'

const API_KEY = process.env.REACT_APP_API_KEY;

//getting gifs of cats
function AllGifs() {

    const [data, isLoaded] = useFetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=cats&limit=25&offset=&rating=g&lang=en`)

    if (isLoaded === false){
        return <p>Loading...</p>
    }

    return (
        <div className="trending-wrapper">
            <ul className="gif-wrapper" >
                {data.map( gif => (
                    <li className="gif-list" key={gif.id} >
                        <img src={gif.images.original.url} alt="gif"width="300" height="300"></img>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllGifs
