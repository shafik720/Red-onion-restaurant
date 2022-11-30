import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Breakfast.css'

const Breakfast = () => {
    const [breakfast, setBreakfast] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shafik720/rest-api/main/red-onion.json')
            .then(res => res.json())
            .then(data => setBreakfast(data))
    }, [])
    return (
        <div className="my-5">
            <div className="container ">
            <div className=' row food-showcase-section'>
                        {
                            breakfast.map(index => <Food
                                index={index}
                                key={index.id}
                            ></Food>)
                        }
                    </div>
            </div>
        </div>
    );
};

export default Breakfast;