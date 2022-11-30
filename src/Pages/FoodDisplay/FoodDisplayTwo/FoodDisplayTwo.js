import React from 'react';
import './FoodDisplayTwo.css';

const FoodDisplayTwo = (props) => {
    const{foodName, shortDesc, price, catagory, img, id} = props.index ; 
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6">
                    <div className="">
                        <h1>{foodName}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minima asperiores sequi odit eligendi veniam? Porro voluptatibus blanditiis facere. Quod, esse numquam. Temporibus tempore fugit modi illo ipsa eum dignissimos. Lorem ipsum, dolor sit </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDisplayTwo;