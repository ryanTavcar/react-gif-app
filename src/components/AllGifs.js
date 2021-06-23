import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
import '../styles/Gif.css'
import GifCard from './GifCard';

const API_KEY = process.env.REACT_APP_API_KEY;
let key = 0;

function AllGifs({ query }) {

    const cats = 'cats'

    // const [data, isLoaded] = useFetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query || cats}&limit=25&offset=&rating=r&lang=en`)

    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([])
    

    useEffect(() => {
        
        const fetchData = () => {
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query || cats}&limit=25&offset=&rating=r&lang=en`)
                .then(res => res.json())
                .then(data => {
                    setData(data.data);
                    setIsLoaded(true);
                })
            }
        fetchData();
        
    }, [query])

    if (isLoaded === false){
        return <p>Loading...</p>
    }
    return (
        <div className="trending-wrapper">
            <ul>
                {data.map( gif => (
                    <li className="gif-list" key={key++} >
                        <GifCard 
                        gif={gif.images.original.url}
                        />

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllGifs
