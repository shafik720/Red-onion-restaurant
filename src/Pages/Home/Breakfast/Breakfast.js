import React, { useEffect, useState } from 'react';
import useFood from '../../../utilities/hooks/useFood';
import Food from '../Food/Food';
import './Breakfast.css'

const Breakfast = () => {
    const [breakfast, setBreakfast] = useFood();
    return (
        <div className="my-5">
            <div className="container ">
            <div className=' row food-showcase-section'>
                        {
                            breakfast.map(index => index.catagory == 'breakfast' && <Food
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