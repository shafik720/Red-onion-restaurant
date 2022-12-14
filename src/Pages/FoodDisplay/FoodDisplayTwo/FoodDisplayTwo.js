import React, { useEffect, useState } from 'react';
import './FoodDisplayTwo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCartShopping, faHandPointLeft, faHandPointRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import HomeHeader from '../../Home/HomeHeader/HomeHeader'
import useFood from '../../../utilities/hooks/useFood';
import NextFoodDisplay from './NextFoodDisplay/NextFoodDisplay';
import { addToDb } from '../../../utilities/LocalStorage/storage';

const FoodDisplayTwo = (props) => {
    const { foodName, shortDesc, price, catagory, img, id } = props.index;

    const [food, setFood] = useFood();
    function idCore() {
        let currentId = id;
        if (id == food.length) {
            currentId = 0;
            return currentId;
        }
        return currentId;
    }
    let [number, setNumber] = useState('');
    // let x = idCore();
    useEffect(() => {
        let y = idCore();
        setNumber(y);
    }, [])

    function showNext() {
        if (number != (food.length - 1)) {
            setNumber(number + 1);
        }
    }
    function showPrevious() {
        if (number != 1) {
            setNumber(number - 1);
        }
    }
    useEffect(() => {
        if (number == 1) {
            document.querySelector('.previous-icon-item').classList.add('hidden');
        } else {
            document.querySelector('.previous-icon-item').classList.remove('hidden');
        }
        if (number == (food.length - 1)) {
            document.querySelector('.next-icon-item').classList.add('hidden');
        } else {
            document.querySelector('.next-icon-item').classList.remove('hidden');
        }
    }, [number]);

    function addToCart(element){
        addToDb(element);
    }
    return (
        <div className='container h-100'>
            <div className="row h-100">
                <div className="col-lg-12 text-center headerInFoodDisplay">
                    <HomeHeader></HomeHeader>
                </div>
            </div>
            <div className="row g-4 h-100">
                <div className="col-lg-6 orders-1 h-100">
                    <div className=" left-food-section">
                        <h1 className='food-name'>{foodName}</h1>
                        <p className='food-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minima asperiores sequi odit eligendi veniam? Porro voluptatibus blanditiis facere. Quod, esse numquam. Temporibus tempore fugit modi illo ipsa eum dignissimos. Lorem ipsum, dolor sit </p>
                        <p className='food-price'>$ {price}</p>
                        <div className="cart-button-div ">
                            <div className="left-cart-button">
                                <p className='working-button fw-bold fw-bolder'><FontAwesomeIcon className='working-button ' icon={faPlus}></FontAwesomeIcon></p>
                                <p>0</p>
                                <p className='working-button  fw-bold fw-bolder'><FontAwesomeIcon className='working-button ' icon={faMinus}></FontAwesomeIcon></p>
                            </div>

    {/* ------------------------- Add to Cart Button ------------------------------  */}
                            <div draggable onClick={()=>addToCart(id)} className="right-cart-button">
                                <span><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></span>
                                <p>Add To Cart</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 orders-2 h-100">
                    <div className="food-display-right h-100">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>

            <div className="row my-5">
                <div className="col-1 ">
                    <div className="next-icon  h-100">
                        <p draggable onClick={showPrevious} className="m-0 fs-2 previous-icon-item"><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></p>
                    </div>
                </div>
                <div className="col-10 h-100">
                    <div className="h-100">
                        <div className="row h-100">
                            {
                                food.map(index => ((index.id == number + 1) || (index.id == number + 2) || (index.id == number + 3)) && <NextFoodDisplay
                                    key={index.id}
                                    index={index}
                                ></NextFoodDisplay>)
                            }
                        </div>
                    </div>
                </div>
                <div className="col-1 ">
                    <div className="next-icon  h-100">
                        <p draggable onClick={showNext} className="m-0 fs-2 next-icon-item"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDisplayTwo;