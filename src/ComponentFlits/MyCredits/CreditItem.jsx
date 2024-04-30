import React from 'react';
import './myCredits.css';

const CreditItem = () => {
    return (
        <>
            <li className='credits-list-content-item'>
                <div className='credits-list-content-outer-div'>
                    <div className='credits-list-content-25-float credits-list-content-border credits-list-content-padding credits-list-content-flex'>


                        <div className='credits-list-content-symbol-Rs-outer-container'>
                            <div className='credits-list-content-symbol-Rs-inner-container credits-list-content-symbol-Rs-outer-container-line-height'>
                                <i class="fa-regular fa-square-plus credits-list-plus-icon"></i>
                            </div>
                            <p className='credits-list-content-para'><i style={{ fontStyle: 'normal' }}>Rs. 2.00</i></p>
                        </div>
                    </div>
                    <div className='credits-list-content-50-float credits-list-content-border credits-list-content-padding2 credits-list-content-center'><p className='cus-para'>Loyal Customer</p></div>
                    <div className='credits-list-content-25-float credits-list-content-padding'>Mar 28,2024</div>
                </div>
            </li>
        </>
    )
}

export default CreditItem
