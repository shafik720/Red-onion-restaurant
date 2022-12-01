import { useEffect, useState } from "react";

function useFood(){
    const[food, setFood] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shafik720/rest-api/main/red-onion.json')
            .then(res => res.json())
            .then(data => setFood(data))
    }, []);

    return [food, setFood];
}

export default useFood;