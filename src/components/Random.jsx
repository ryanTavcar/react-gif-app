import React, {useState, useEffect} from 'react';
import useFetch from './useFetch';
import '../styles/Gif.css'
import GifCard from './GifCard';


const API_KEY = process.env.REACT_APP_API_KEY;
let key = 0;

function Random() {

    // const [data, isLoaded] = useFetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=tree&rating=r`)
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([])
    

    useEffect(() => {
        
        const fetchData = () => {
            fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=r`)
                .then(res => res.json())
                .then(data => {
                    setData(data.data.images.downsized.url);
                    setIsLoaded(true);
                })
            }
        fetchData();
    }, [])

    if (isLoaded === false){
        return <p>Loading...</p>
    }

    return (
        <div className="trending-wrapper">
            <ul>
                <li className="gif-list" key={key++} >
                    <GifCard 
                    gif={data}
                    />
                </li>
            </ul>
        </div>
    )
}

export default Random
