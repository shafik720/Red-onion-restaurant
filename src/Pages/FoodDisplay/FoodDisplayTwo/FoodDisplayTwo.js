import React from 'react';
import './FoodDisplayTwo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import HomeHeader from '../../Home/HomeHeader/HomeHeader'
import useFood from '../../../utilities/hooks/useFood';
import NextFoodDisplay from './NextFoodDisplay/NextFoodDisplay';

const FoodDisplayTwo = (props) => {
    const{foodName, shortDesc, price, catagory, img, id} = props.index ; 

    const[food, setFood] = useFood();
    function idCore(){
        let currentId = id;
        if(id == food.length){
            currentId = 0;
            return currentId;
        }
        return currentId;
    }
    let x = idCore();
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12 text-center headerInFoodDisplay">
                <HomeHeader></HomeHeader>
                </div>
            </div>
            <div className="row g-5">
                <div className="col-lg-6 orders-1">
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
                <div className="col-lg-6 orders-2">
                    <div className="food-display-right ">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="next-food-div">
                    {
                        food.map(index=> ((index.id == x+1) || (index.id == x+2)) && <NextFoodDisplay
                            key = {index.id}
                            index = {index}
                        ></NextFoodDisplay>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodDisplayTwo;