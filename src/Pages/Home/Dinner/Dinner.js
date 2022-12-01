import React, { useEffect, useState } from 'react';
import useFood from '../../../utilities/hooks/useFood';
import Food from '../Food/Food';
import './Dinner.css';

const Dinner = () => {
    const [dinner, setDinner] = useFood();
    return (
        <div className="my-5">
            <div className="container ">
            <div className=' row food-showcase-section'>
                        {
                            dinner.map(index => index.catagory == 'dinner' && <Food
                                index={index}
                                key={index.id}
                            ></Food>)
                        }
                    </div>
            </div>
        </div>
    );
};

export default Dinner;