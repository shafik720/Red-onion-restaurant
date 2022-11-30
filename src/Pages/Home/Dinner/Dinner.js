import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Dinner.css';

const Dinner = () => {
    const [dinner, setDinner] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shafik720/rest-api/main/red-onion.json')
            .then(res => res.json())
            .then(data => setDinner(data))
    }, [])
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