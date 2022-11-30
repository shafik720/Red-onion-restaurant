import React from 'react';
import './FoodDisplayTwo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCartShopping } from '@fortawesome/free-solid-svg-icons';


const FoodDisplayTwo = (props) => {
    const{foodName, shortDesc, price, catagory, img, id} = props.index ; 
    return (
        <div className='container'>
            <div className="row g-5">
                <div className="col-lg-6">
                    <div className=" left-food-section">
                        <h1 className='food-name'>{foodName}</h1>
                        <p className='food-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minima asperiores sequi odit eligendi veniam? Porro voluptatibus blanditiis facere. Quod, esse numquam. Temporibus tempore fugit modi illo ipsa eum dignissimos. Lorem ipsum, dolor sit </p>
                        <p className='food-price'>$ {price}</p>
                        <div className="cart-button-div">
                            <div className="left-cart-button">
                                <p className='working-button fw-bold fw-bolder'><FontAwesomeIcon className='working-button '  icon={faPlus}></FontAwesomeIcon></p>
                                <p>0</p>
                                <p className='working-button  fw-bold fw-bolder'><FontAwesomeIcon className='working-button ' icon={faMinus}></FontAwesomeIcon></p>
                            </div>
                            <div className="right-cart-button">
                                <span><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></span>
                                <p>Add To Cart</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="food-display-right ">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDisplayTwo;