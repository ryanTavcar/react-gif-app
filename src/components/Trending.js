import React from 'react';
import useFetch from './useFetch';
import '../styles/trending.css'

function Trending() {

    const [data, isLoaded] = useFetch("https://api.giphy.com/v1/gifs/trending?api_key=9dnXjdfObyYGrDOuqe9QWXSHnQ19QsaW&limit=25&rating=r")

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

};

export default Trending
