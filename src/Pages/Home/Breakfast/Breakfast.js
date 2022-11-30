import React, { useEffect, useState } from 'react';
import './Breakfast.css'

const Breakfast = () => {
    const[breakfast, setBreakfast] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shafik720/rest-api/main/red-onion.json')
        .then(res=>res.json())
        .then(data=>setBreakfast(data))
    },[])
    return (
        <div>
            <h2>Break Fast Section Here </h2>
        </div>
    );
};

export default Breakfast;