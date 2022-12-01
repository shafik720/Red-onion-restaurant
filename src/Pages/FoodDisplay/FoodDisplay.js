import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFood from '../../utilities/hooks/useFood';
import './FoodDisplay.css';
import FoodDisplayTwo from './FoodDisplayTwo/FoodDisplayTwo';

const FoodDisplay = () => {
    let param = useParams();
    let foodId = param.display;

    const[food, setFood] = useFood();
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