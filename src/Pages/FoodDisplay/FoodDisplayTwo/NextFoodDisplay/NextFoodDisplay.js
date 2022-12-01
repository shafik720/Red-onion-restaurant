import React from 'react';
import { useNavigate } from 'react-router';
import './NextFoodDisplay.css';

const NextFoodDisplay = (props) => {
    const{ foodName, price, img, id} = props.index ; 

    let navigate = useNavigate();
    function foodCardClick(element){
        let url = `/food/${element}`;
        navigate(url);
    }
    return (
        <div className='col-4 next-food-card '>
            <div className="text-center h-100  ">
                <div  onClick={()=>foodCardClick(id)} className="h-100 next-food-single-item ">
                <img src={img} alt="" />
                <p className="fw-bold mt-3">{foodName}</p>
                </div>
            </div>
        </div>
    );
};

export default NextFoodDisplay;