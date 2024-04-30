import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const SidebarCompo = ({ storePage, dataFromSidebarCallback, dataFromAddress, dataFromProfile, dataFromOrders, handleAddressMobile, handleOrdersMobile, handleProfileMobile, handleWishlistMobile, handleRecentlyViewedMobile, handleCreditsMobile, handleManageCreditsMobile, handleFriendsMobile, handlePasswordMobile }) => {
  const sidebarMain = document.getElementsByClassName('sidebar-main');
  // useEffect(() => {
  debugger;
  dataFromSidebarCallback(sidebarMain[0]);
  // }, [])
  // let defaultActive;

  // console.log("store form sidebad", storePage.profile)

  // useEffect(()=>{

  //   console.log("jjjjj");
  //   console.log(storePage.profile);
  //   console.log(storePage.address);
  //   if(storePage.profile === true || storePage.profile === String(true)){
  //     defaultActive = 1;
  //     console.log("DEFAULT FROM PROFILE",defaultActive);
  //   }else if(storePage.address === true || storePage.address === String(true)){
  //     defaultActive = 2;
  //     console.log("DEFAULT FROM ADDRESS",defaultActive);
  //   }

  // },[])


  // const [active,setActive] = useState(()=>{
  //   switch (storePage){
  //     case storePage.profile:
  //       return 1;
  //     case storePage.adddress:
  //       return 2
  //     default:
  //       return null 
  //   }
  // });
  useEffect(() => {


    if (storePage.profile === true || storePage.profile === String(true)) {
      
      setActive(1)
    } else if (storePage.address === true || storePage.address === String(true)) {
     setActive(2)
    } else if (storePage.orders === true || storePage.orders === String(true)) {
      setActive(3);
    }else if (storePage.wishlist === true || storePage.wishlist === String(true)){
      setActive(4);
    }else if(storePage.viewed === true){
      setActive(5);
    }else if(storePage.credits === true){
      setActive(6);
    }else if(storePage.manageCredits === true){
      setActive(7);
    }else if(storePage.friends === true){
      setActive(8);
    }else if(storePage.password === true){
      setActive(9);
    }

  }, [storePage])

  const [active, setActive] = useState(()=>{
    if (storePage.profile === true || storePage.profile === String(true)) {
      
      return 1;
    } else if (storePage.address === true || storePage.address === String(true)) {
      return 2;
    } else if (storePage.orders === true || storePage.orders === String(true)) {
      return 3;
    }else if (storePage.wishlist === true || storePage.wishlist === String(true)){
      return 4;
    }else if(storePage.viewed === true){
     return 5;
    }else if(storePage.credits === true){
      return 6;
    }else if(storePage.manageCredits === true){
      return 7;
    }else if(storePage.friends === true){
      return 8;
    }else if(storePage.password === true){
      return 9;
    }

  }

  );
  const menuItem = document.getElementsByClassName('menu-item');

  const handleActive = (divNumber) => {
    setActive(divNumber);
  }

  // HERE IS HANDLEADDRESSMOBILE WORKING
  // const handleAddressMobile = (e) => {
  //   e.preventDefault();
  //   sidebarMain[0].style.setProperty('height',((`${dataFromAddress.clientHeight}px`) ? (`${dataFromAddress.clientHeight}px`) : ('476px')));

  //    dataFromAddress?.classList.remove('not-visible-address');
  //   sidebarMain[0].classList.remove('sidebar-main-mobile');
  // }


  // const handleProfileSidebarCallback = useCallback(()=>{

  //   const handleProfileMobile = (e) =>{
  //     // e.preventDefault();


  //     //  dataFromProfile?.classList.remove('non-visible-profile');
  //     sidebarMain[0].classList.remove('sidebar-main-mobile');

  //   }
  //   handleProfileMobile();
  // },[dataFromProfile])





  // HERE IS HANDLEPROFILEMOBILE WORKING
  // const handleProfileMobile = (e) =>{
  //   e.preventDefault();
  //   // sidebarMain[0].style.setProperty('height','790px');

  //   // console.log("ccccccccccccc",`${sidebarMain[0].clientHeight}px`);
  //   // sidebarMain[0].style.setProperty('height',`${sidebarMain[0].clientHeight}px`);



  //   sidebarMain[0].style.setProperty('height',((`${dataFromProfile.clientHeight}px`) ? (`${dataFromProfile.clientHeight}px`) : ('476px')));
  //    dataFromProfile?.classList.remove('non-visible-profile');
  //   sidebarMain[0].classList.remove('sidebar-main-mobile');

  // }

  // HERE IS HANDLEORDERSMOBILE WORKING
  // const handleOrdersMobile = (e) =>{
  //   e.preventDefault();
  //   sidebarMain[0].style.setProperty('height',((`${dataFromOrders.clientHeight}px`) ? (`${dataFromOrders.clientHeight}px`) : ('476px')));
  //   dataFromOrders.classList.remove('non-visible-orders');
  //   sidebarMain[0].classList.remove('sidebar-main-mobile');
  // }

  return (
    <>
      {/* <div></div> */}
      {/* <div className='sidebar-main' style={{height:'476px'}}> */}
      {/* <div className='sidebar-main' style={{ height: 'auto' }}> */}
      <div className='sidebar-main'>
        {/* <div className='sidebar-main' style={{height:'auto',minHeight:'435px',}}> */}
        <div className='sidebar-inner'>

          {/* <div className='menu-item menu-item-active'> */}
          {/* <div className='menu-item' onClick={handleProfileSidebarCallback}> */}
          <div className={active === 1 ? 'menu-item-active' : 'menu-item'} onClick={(e) => { handleActive(1); handleProfileMobile(e) }}>
            {/* doubt  exact='true */}
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/profile'> */}
            <Link to={'/profile'} id='profile' className='profile-sidebar' exact='true'>
              <span className='item-name'>my profile</span>
              <span className='sidebar-icon'><i className="fa-regular fa-user"></i></span>
            </Link>
          </div>

          <div className={active === 2 ? 'menu-item-active' : 'menu-item'} onClick={(e) => { handleActive(2); handleAddressMobile(e) }}>
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/address'> */}
            <Link to={'/address'} className='profile-sidebar'>

              <span className='item-name'>Delivery address</span>
              <span className='sidebar-icon'><i className="fa-solid fa-location-dot"></i></span>
            </Link>
            {/* </a> */}
          </div>

          <div className={active === 3 ? 'menu-item-active' : 'menu-item'} onClick={() => { handleActive(3); handleOrdersMobile() }}>
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/profile'> */}
            <Link to={'/orders'} className='profile-sidebar'>

              <span className='item-name'>my orders</span>
              <span className='sidebar-icon'><i className="fa-solid fa-cart-shopping"></i></span>
            </Link>
            {/* </a> */}
          </div>


          <div className={active === 4 ? 'menu-item-active' : 'menu-item'} onClick={() => { handleActive(4); handleWishlistMobile() }}>
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/profile'> */}
            <Link to={'/wishlist'} className='profile-sidebar'>

              <span className='item-name'>my wishlist</span>
              <span className='sidebar-icon'><i className="fa-regular fa-heart"></i></span>
            </Link>
            {/* </a> */}
          </div>


          <div className={active === 5 ? 'menu-item-active' : 'menu-item'} onClick={() => { handleActive(5); handleRecentlyViewedMobile() }}>
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/profile'> */}
            <Link to={'/recentlyviewed'} className='profile-sidebar'>

              <span className='item-name'>Recently viewed</span>
              <span className='sidebar-icon'><i className="fa-brands fa-searchengin"></i></span>
            </Link>
            {/* </a> */}
          </div>


          <div className={active === 6 ? 'menu-item-active' : 'menu-item'} onClick={() => { handleActive(6); handleCreditsMobile() }}>
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/profile'> */}
            <Link className='profile-sidebar' to={'/credits'}>
              <span className='item-name'>my credits</span>
              <span className='sidebar-icon'><i className="fa-regular fa-credit-card"></i></span>
            </Link>
            {/* </a> */}
          </div>


          <div className={active === 7 ? 'menu-item-active' : 'menu-item'} onClick={() => { handleActive(7); handleManageCreditsMobile() }}>
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/profile'> */}
            <Link to={'/managecredits'} className='profile-sidebar'>

              <span className='item-name'>how to manage credits</span>
              <span className='sidebar-icon'><i className="fa-solid fa-hand-holding"></i></span>
            </Link>
            {/* </a> */}
          </div>


          <div className={active === 8 ? 'menu-item-active' : 'menu-item'} onClick={() => { handleActive(8); handleFriendsMobile() }}>
            {/* <a id='profile' className='profile-sidebar' exact='true' href='#/profile'> */}
            <Link to={'/referfriends'} className='profile-sidebar'>

              <span className='item-name'>refer friends</span>
              <span className='sidebar-icon'><i className="fa-solid fa-user-group"></i></span>
            </Link>
            {/* </a> */}
          </div>


          <div className={active === 9 ? 'menu-item-active' : 'menu-item'} onClick={() => { handleActive(9); handlePasswordMobile() }}>
            {/* <a id='profile' className='profile-sidebar' exact='true' href='/password'> */}
            <Link to={'/password'} className='profile-sidebar'>

              <span className='item-name'>change password</span>
              <span className='sidebar-icon'><i className="fa-solid fa-key"></i></span>
            </Link>
            {/* </a>
             */}
          </div>


          <div className={active === 10 ? 'menu-item-active' : 'menu-item'} onClick={() => { handleActive(10) }}>
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
