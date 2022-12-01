import React, { useEffect, useState } from 'react';
import useFood from '../../../utilities/hooks/useFood';
import Food from '../Food/Food';
import './Lunch.css';

const Lunch = () => {
    const [lunch, setLunch] = useFood();
    return (
        <div className="my-5">
            <div className="container ">
            <div className=' row food-showcase-section'>
                        {
                            lunch.map(index => index.catagory == 'lunch' && <Food
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