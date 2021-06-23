import React, {useState, useEffect} from 'react';

function useFetch(url) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([])
    const [isMounted, setIsMounted] = useState(false)

    // const fetchData = async () => {

    //         const response = await fetch(url);
    //         const gifData = await response.json()
    //         const data = gifData['data']; 
    //         setData(data);
    //         setIsLoaded(true)
    //         return 
    // }

    const fetchData = () => {
        if(!isMounted) {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data['data']);
                setIsLoaded(true);
            })
        };
        return
    }
    

    useEffect(() => {
        fetchData();
    }, [])


    return [data, isLoaded]
}

export default useFetch
