import React, { useEffect } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const SidebarCompo = ({ dataFromSidebarCallback, dataFromAddress }) => {
  const sidebarMain = document.getElementsByClassName('sidebar-main');
  useEffect(() => {
    dataFromSidebarCallback(sidebarMain[0]);
  }, [])
  const handleAddressMobile = (e) => {
    e.preventDefault();
    dataFromAddress.classList.remove('not-visible-address');
    sidebarMain[0].classList.remove('sidebar-main-mobile');
  }
  return (
    <>
      {/* <div></div> */}
      {/* <div className='sidebar-main' style={{height:'476px'}}> */}
      <div className='sidebar-main' style={{ height: 'auto' }}>
        {/* <div className='sidebar-main' style={{height:'auto',minHeight:'435px',}}> */}
        <div className='sidebar-inner'>

          {/* <div className='menu-item menu-item-active'> */}
          <div className='menu-item'>
            {/* doubt  exact='true */}
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/profile'> */}
            <Link to={'/profile'} id='profile' className='profile-sidebar' exact='true'>
              <span className='item-name'>my profile</span>
              <span className='sidebar-icon'><i className="fa-regular fa-user"></i></span>
            </Link>
          </div>

          <div className='menu-item' onClick={handleAddressMobile}>
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/address'> */}
            <Link to={'/address'} className='profile-sidebar'>

              <span className='item-name'>Delivery address</span>
              <span className='sidebar-icon'><i className="fa-solid fa-location-dot"></i></span>
            </Link>
            {/* </a> */}
          </div>

          <div className='menu-item'>
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/profile'> */}
            <Link to={'/orders'} className='profile-sidebar'>

              <span className='item-name'>my orders</span>
              <span className='sidebar-icon'><i className="fa-solid fa-cart-shopping"></i></span>
            </Link>
            {/* </a> */}
          </div>


          <div className='menu-item'>
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/profile'> */}
            <Link to={'/wishlist'} className='profile-sidebar'>

              <span className='item-name'>my wishlist</span>
              <span className='sidebar-icon'><i className="fa-regular fa-heart"></i></span>
            </Link>
            {/* </a> */}
          </div>


          <div className='menu-item'>
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/profile'> */}
            <Link to={'/recentlyviewed'} className='profile-sidebar'>

              <span className='item-name'>Recently viewed</span>
              <span className='sidebar-icon'><i className="fa-brands fa-searchengin"></i></span>
            </Link>
            {/* </a> */}
          </div>


          <div className='menu-item'>
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/profile'> */}
            <Link className='profile-sidebar' to={'/credits'}>
              <span className='item-name'>my credits</span>
              <span className='sidebar-icon'><i className="fa-regular fa-credit-card"></i></span>
            </Link>
            {/* </a> */}
          </div>


          <div className='menu-item'>
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/profile'> */}
            <Link to={'/managecredits'} className='profile-sidebar'>

              <span className='item-name'>how to manage credits</span>
              <span className='sidebar-icon'><i className="fa-solid fa-hand-holding"></i></span>
            </Link>
            {/* </a> */}
          </div>


          <div className='menu-item'>
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/profile'> */}
            <Link to={'/referfriends'} className='profile-sidebar'>

              <span className='item-name'>refer friends</span>
              <span className='sidebar-icon'><i className="fa-solid fa-user-group"></i></span>
            </Link>
            {/* </a> */}
          </div>


          <div className='menu-item'>
            <a id='profile' className='profile-sidebar' exact='true' href='/password'>
              <span className='item-name'>change password</span>
              <span className='sidebar-icon'><i className="fa-solid fa-key"></i></span>
            </a>
          </div>


          <div className='menu-item'>
            <a id='profile' className='profile-sidebar' exact='true' href='#/profile'>
              <span className='item-name'>logout</span>
              <span className='sidebar-icon'><i className="fa-solid fa-power-off"></i></span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SidebarCompo
