import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Food.css';

const Food = (props) => {
    const{foodName, shortDesc, price, catagory, img, id} = props.index ; 

    let navigate = useNavigate();
    function foodCardClick(element){
        let url = `/food/${element}`;
        navigate(url);
    }
    return (
        <div onClick={()=>foodCardClick(id)} className='col-lg-4 col-md-6   g-4'>
            <div className="food-card h-100">
            <img src={img} alt="" />
            <h2>{foodName} </h2>
            <p> {shortDesc} </p>
            <p className='price'>$ {price} </p>
            </div>
        </div>
    );
};

export default Food;