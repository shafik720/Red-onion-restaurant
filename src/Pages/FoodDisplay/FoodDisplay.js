import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FoodDisplay.css';
import FoodDisplayTwo from './FoodDisplayTwo/FoodDisplayTwo';

const FoodDisplay = () => {
    let param = useParams();
    let foodId = param.display;

    const[food, setFood] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shafik720/rest-api/main/red-onion.json')
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
    return (
        <div>
            {
                food.map(index=> index.id == foodId && <FoodDisplayTwo
                    index = {index}
                    key = {index.id}
                ></FoodDisplayTwo>)
            }
        </div>
    );
};

export default FoodDisplay;