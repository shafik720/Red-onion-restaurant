import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Lunch.css';

const Lunch = () => {
    const [lunch, setLunch] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shafik720/rest-api/main/red-onion.json')
            .then(res => res.json())
            .then(data => setLunch(data))
    }, [])
    return (
        <div className="my-5">
            <div className="container ">
            <div className=' row food-showcase-section'>
                        {
                            lunch.map(index => <Food
                                index={index}
                                key={index.id}
                            ></Food>)
                        }
                    </div>
            </div>
        </div>
    );
};

export default Lunch;