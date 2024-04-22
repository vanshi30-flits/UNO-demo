import React from 'react';
import './myCredits.css';
import Pagination from '../Pagination/Pagination';
import CreditItem from './CreditItem';
import NavbarMobileCompo from '../Sidebar/NavbarMobileCompo';

const MyCredits = () => {
    return (
        <>
            <div className='credits-outermost-container' style={{ height: '692px' }}>
                <div className='credits-outermost-container2' style={{ height: 'auto', minHeight: '692px' }}>
                    <div className='credits-outermost-container3'>
                        <NavbarMobileCompo/>
                        <div className='credits-wrapper'>
                            {/* in below div I have manually added static height no height specifications in uno app     */}
                            <div style={{ height: '90px' }}>
                                {/* <div className='this'> */}
                                <div className='credits-info-outermost-container'>
                                    <div className='credits-info-inner-container credits-info-inner-container-float credits-info-inner-container-margin credits-info-inner-container-align'>
                                        <div className='credits-info-innermost-container'>
                                            <p className='credits-info-innermost-container-para'>Earned Credit</p>
                                            <p className='credits-info-innermost-container-para'>Rs. 283.45</p>
                                        </div>
                                    </div>



                                    <div className='credits-info-inner-container credits-info-inner-container-float credits-info-inner-container-margin credits-info-inner-container-align'>
                                        <div className='credits-info-innermost-container'>
                                            <p className='credits-info-innermost-container-para'>Spent Credit</p>
                                            <p className='credits-info-innermost-container-para'>Rs. 118.18</p>
                                        </div>
                                    </div>



                                    <div className='credits-info-inner-container credits-info-inner-container-float credits-info-inner-container-margin credits-info-inner-container-align'>
                                        <div className='credits-info-innermost-container'>
                                            <p className='credits-info-innermost-container-para'>Current Credit</p>
                                            <p className='credits-info-innermost-container-para'>Rs. 165.27</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='credits-list-container'>
                                <div className='credits-list-inner-container'>
                                    <p className='credits-list-heading credits-list-heading2 credits-list-heading3'>Recent Transactions</p>
                                    <ul className='credits-list-inner-heading credits-list-inner-heading2'>
                                        <li className='credits-list-inner-heading-inner-container credits-list-inner-heading-inner-container2'>
                                            <div className='credits-list-innermost-inner-heading-container'>
                                                <div className='credits-heading-div credits-heading-div-float-25 credits-heading-div-border credits-heading-div-flex'> <div className='credits-heading-div-flex'><p className='credits-para'>CD/DR</p></div></div>
                                                <div className='credits-heading-div2 credits-heading-div-float-50 credits-heading-div-border credits-heading-div-center'><p className='credits-inner-heading-para'>Credit Reason</p></div>
                                                <div className='credits-heading-div credits-heading-div-float-25'><p className='credits-inner-heading-para'>Date</p></div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className='credits-list-content-container'>
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

                                        <CreditItem/>
                                        <CreditItem/>
                                        <CreditItem/>
                                        <li className='credits-list-content-item'>
                                            <div className='credits-list-content-outer-div'>
                                                <div className='credits-list-content-25-float credits-list-content-border credits-list-content-padding credits-list-content-flex'>
                                                    <div className='credits-list-content-symbol-Rs-outer-container'>
                                                        <div className='credits-list-content-symbol-Rs-inner-container credits-list-content-symbol-Rs-outer-container-line-height'>
                                                            <i class="fa-regular fa-square-minus credits-list-minus-icon"></i>
                                                        </div>
                                                        <p className='credits-list-content-para'><i style={{ fontStyle: 'normal' }}>Rs. 54.09</i></p>
                                                    </div>
                                                </div>
                                                <div className='credits-list-content-50-float credits-list-content-border credits-list-content-padding2 credits-list-content-center'><p className='cus-para'>Credits on order #1005- Expire</p></div>
                                                <div className='credits-list-content-25-float credits-list-content-padding'>Mar 28,2024</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyCredits
