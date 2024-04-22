import React, { useState } from 'react';
import './recentlyViewed.css';

const RecentlyViewedItem = () => {
    const [count,setCount] = useState(1);
    const reduceCount = () =>{
        if(count <= 1){
            return;
        }
        setCount(count-1);
        
    }
    return (
        <>
            <li className='wishlist-list-item-container'>
                <form className='wishlist-list-item-container-form'>
                    <div className='wishlist-list-item-container-form-div wishlist-list-item-container-form-div-margin'>
                        <a className='wishlist-list-item-img-container'>
                            <img className='wishlist-list-item-img' src='data:image/jpeg;base64,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' />
                        </a>
                        <div className='wishlist-item-container-title-div wishlist-item-container-title-div2 wishlist-item-container-title-div3'>
                            <select className='wishlist-item-container-title-div-select wishlist-item-container-title-div-select2'>
                                <option></option>
                            </select>
                            <span className='wishlist-item-container-title-div-span'></span>
                            <label className='wishlist-item-container-title-div-label'>Bracelet</label>
                        </div>
                        <div className='wishlist-item-container-quantity-div wishlist-item-container-quantity-div2'>
                            <input type='text' className='wishlist-item-container-quantity-div-input' value={count}>
                            </input>
                            <span className='wishlist-item-span wishlist-item-span-plus' onClick={()=>{setCount(count + 1)}}>+</span>
                            
                            <span className='wishlist-item-span wishlist-item-span-minus' onClick={reduceCount}>-</span>
                        </div>
                        <p className='wishlist-item-container-cost-para wishlist-item-container-cost-para2'>
                            <i style={{ fontStyle: 'normal' }}>Rs. 42.99</i>
                        </p>
                        <button className='wishlist-item-add-to-cart-btn wishlist-item-add-to-cart-btn1 wishlist-item-add-to-cart-btn2 wishlist-item-add-to-cart-btn3'>Add to Cart</button>

                    </div>
                </form>
            </li>
        </>
    )
}

export default RecentlyViewedItem
