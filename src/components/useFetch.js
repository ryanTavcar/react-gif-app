import React, {useState, useEffect} from 'react';

function useFetch(url) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch(url);
        const gifData = await response.json()
        const data = gifData['data'];
        setData(data);
        setIsLoaded(true)
    }

    useEffect(() => {
        fetchData();
        // console.log(data)
        }, [])


    return [data, isLoaded]
}

export default useFetch
