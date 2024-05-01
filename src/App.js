import './main.css';

import HeaderCompo from './ComponentFlits/Header/HeaderCompo';
import ProfileCompo from './ComponentFlits/Profile/ProfileCompo';
import SidebarCompo from './ComponentFlits/Sidebar/SidebarCompo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChangePasswordComp from './ComponentFlits/ChangePassword/ChangePasswordComp';
import AddressCompo from './ComponentFlits/addressCompo/AddressCompo';
import ManageCredits from './ComponentFlits/manageCredits/ManageCredits';
import MyOrders from './ComponentFlits/MyOrders/MyOrders';
import MyWishlist from './ComponentFlits/MyWishlist/MyWishlist';
import RecentlyViewed from './ComponentFlits/RecentlyViewed/RecentlyViewed';
import MyCredits from './ComponentFlits/MyCredits/MyCredits';
import ReferFriends from './ComponentFlits/ReferFriend/ReferFriends';
import MyOrdersContactUs from './ComponentFlits/MyOrders/MyOrdersContactUs';
import { useEffect, useRef, useState } from 'react';
import { data } from 'jquery';
import store from './redux/store';
import { Provider, useDispatch } from 'react-redux';
import ProfileCompoRedux from './ComponentFlits/Profile/ProfileCompoRedux';

function App() {
  debugger;
  const parser = new DOMParser();
  const localHTML = localStorage.getItem('addressOutermostContainerLocal')
  const parseHTML = parser.parseFromString(localHTML, 'text/html');
  const restoredElement = parseHTML.querySelector('.address-outermost-container');



  const [storePage, setStorePage] = useState({
    profile: false,
    address: false,
    orders: false,
    wishlist: false,
    viewed: false,
    credits: false,
    manageCredits: false,
    friends: false,
    password: false
  })
  // const isRender = useRef(true);
  
  useEffect(() => {

    const pageVariable = JSON.parse(localStorage.getItem('page'));
    if (pageVariable !== null) {
      setStorePage(pageVariable)
    }
  }, [])
  useEffect(() => {

    const handleBeforeUnload = (event) => {
      localStorage.setItem('page', JSON.stringify(storePage))
    }
    window.addEventListener('beforeunload', handleBeforeUnload)

    // return () =>{
    //   window.removeEventListener('beforeunload',handleBeforeUnload);
    // }
  }, [storePage])


  const [contactUs, setContactUs] = useState(false);
  const [dataFromSidebar, setDataFromSidebar] = useState('');
  const [dataFromAddress, setDataFromAddress] = useState('');
  // const [dataFromAddress, setDataFromAddress] = useState(restoredElement);
  const [dataFromProfile, setDataFromProfile] = useState('');
  const [dataFromOrders, setDataFromOrders] = useState('');
  const [dataFromWishlist, setDataFromWishlist] = useState('');
  const [dataFromRecentlyViewed, setDataFromRecentlyViewed] = useState('');
  const [dataFromCredits, setDataFromCredits] = useState('');
  const [dataFromManageCredits, setDataFromManageCredits] = useState('');
  const [dataFromFriends, setDataFromFriends] = useState('');
  const [dataFromPassword, setDataFromPassword] = useState('');
  const [totalDataFromOrdersState,setTotalDataFromOrdersState] = useState('');
  const [totalDataFromWishlistState,setTotalDataFromWishlistState]=useState('');
  // const [active,setActive] = useState({
  //   profile:false,
  // })


  // const dataFromAddressRef = useRef('');
  const rightMain = document.getElementsByClassName('right-main');


  // ------------------------------THIS IS CORRECT BELOW----------------------------------------------------
  useEffect(() => {


    debugger;
    dataFromAddressCallback();

    dataFromOrdersCallback();

    dataFromProfileCallback();

    dataFromSidebarCallback();

    dataFromWishlistCallback();

    dataFromRecentlyViewedCallback();

    dataFromCreditsCallback();

    dataFromManageCreditsCallback();

    dataFromFriendsCallback();

    dataFromPasswordCallback();

  }, [])

  //   var pageObj =JSON.parse(localStorage.getItem('page'))
  // const [pathStateProfile, setPathStateProfile] = useState(null);
  // const [pathStateAddress, setPathStateAddress] = useState(null);

  // const [pathStateOrders, setPathStateOrders] = useState(null);

  // if (storePage) {
  //   if (storePage.profile === true) {
  //     // const profilePath = '/';
  //     setPathStateOrders(null);
  //     setPathStateAddress(null);
  //     setPathStateProfile('/')
  //   } else if (storePage.address === true) {
  //     // const adddressPath = '/';
  //     setPathStateOrders(null)
  //     setPathStateProfile(null)
  //     setPathStateAddress('/')
  //   } else if (storePage.orders === true) {
  //     // const ordersPath = '/';
  //     setPathStateProfile(null);
  //     setPathStateAddress(null);
  //     setPathStateOrders('/')
  //   }
  // }

  // if(pageObj){
  //   if(pageObj.profile === true || pageObj.profile === String(true)){
  //     const profilePath = '/';
  //     setPathState(profilePath)
  //   }else if(pageObj.address === true || pageObj.address === String(true)){
  //     const adddressPath = '/';
  //     setPathState(adddressPath)
  //   }else if(pageObj.orders === true || pageObj.orders === String(true)){
  //     const ordersPath = '/';
  //     setPathState(ordersPath)
  //   }
  // }
  const handleClick = (e) => {
    e.preventDefault();
    setContactUs(false)
  }

  const dataFromSidebarCallback = (data) => {
    setDataFromSidebar(data);


  }
  const dataFromProfileCallback = (data) => {
    setDataFromProfile(data);

  }

  // function dataFromAddressCallback(data) {
  //   setTimeout(() => {
  //     return data;
  //   }, 3000)
  // }


  // function dataFromAddressCallback(data) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       setDataFromAddress(data);
  //       setChildAddressDataRecieved(true);
  //       resolve(data);
  //     }, 3000)
  //   })
  // }
  debugger;
  //   const dataFromAddressCallback = (data) => {
  //     dataFromAddressRef.current = data;

  //  }
  // THIS BELOW WORKS
  const dataFromAddressCallback = (data) => {
    setDataFromAddress(data);

  }
  const dataFromOrdersCallback = (data) => {
    setDataFromOrders(data);

  }
  const dataFromWishlistCallback = (data) => {
    setDataFromWishlist(data);

  }
  const dataFromRecentlyViewedCallback = (data) => {
    setDataFromRecentlyViewed(data);

  }
  const dataFromCreditsCallback = (data) => {
    setDataFromCredits(data);

  }
  const dataFromManageCreditsCallback = (data) => {
    setDataFromManageCredits(data);

  }
  const dataFromFriendsCallback = (data) => {
    setDataFromFriends(data);

  }
  const dataFromPasswordCallback = (data) => {
    setDataFromPassword(data);

  }
















  const handleProfileMobile = (e) => {

    // sidebarMain[0].style.setProperty('height','790px');

    // console.log("ccccccccccccc",`${sidebarMain[0].clientHeight}px`);
    // sidebarMain[0].style.setProperty('height',`${sidebarMain[0].clientHeight}px`);


    // dataFromSidebar.style.setProperty('height',((`${dataFromProfile.clientHeight}px`) ? (`${dataFromProfile.clientHeight}px`) : ('476px')));
    // dataFromSidebar.style.setProperty('height', (clientHeight || '476px'));




    setStorePage({ ...storePage, profile: true, address: false, orders: false, wishlist: false, viewed: false, credits: false, manageCredits: false, friends: false, password: false });

    // THIS


    //  dataFromProfile?.classList.remove('non-visible-profile');
    // e.target.classList.add('menu-item-active');



    debugger;
    if (dataFromProfile !== undefined) {
      dataFromProfile.classList.remove('not-visible-profile');
      const clientHeight = `${dataFromProfile.clientHeight}px`;
      dataFromSidebar.style.setProperty('height', (clientHeight === '0px') ? '476px' : clientHeight);
      rightMain[0].style.setProperty('height', (clientHeight === '0px') ? '476px' : clientHeight);

    }







    dataFromSidebar.classList.remove('sidebar-main-mobile');

  }

  const handleAddressMobile = async (e) => {

    // dataFromSidebar.style.setProperty('height',((`${dataFromAddress.clientHeight}px`) ? (`${dataFromAddress.clientHeight}px`) : ('476px')));

    // THIS
    debugger;


    setStorePage({ ...storePage, address: true, profile: false, orders: false, wishlist: false, viewed: false, credits: false, manageCredits: false, friends: false, password: false });

    // const dataFromAddressCallback = (data) => {
    //    setDataFromAddress(data);

    // }

    await dataFromAddressCallback();


    // await setDataFromAddress(data);



    // const dataFromAddressCallback = (data) => {

    //    setDataFromAddress(data);
    // };
    //  dataFromAddressCallback();

    // const dataFromAddress = dataFromAddressRef.current;
    // if (dataFromAddress !== undefined || dataFromAddress !== '') {
    //   console.log("dd",dataFromAddressRef.current);
    //   const clientHeight = `${dataFromAddressRef.current}px`;
    //   dataFromAddressRef.current.classList.remove('not-visible-address');
    //   dataFromSidebar.style.setProperty('height', (clientHeight === '0px') ? '510px' : clientHeight);
    //   rightMain[0].style.setProperty('height', (clientHeight === '0px') ? '510px' : clientHeight);      
    // }
    // dataFromSidebar.classList.remove('sidebar-main-mobile');



    // THIS BELOW WORKS

    if (dataFromAddress !== undefined) {

      dataFromAddress.classList.remove('not-visible-orders');
      const clientHeight = `${dataFromAddress.clientHeight}px`;
      dataFromSidebar.style.setProperty('height', (clientHeight === '0px') ? '2518px' : clientHeight);
      rightMain[0].style.setProperty('height', (clientHeight === '0px') ? '2518px' : clientHeight);
    }
    dataFromSidebar.classList.remove('sidebar-main-mobile');











    // if (dataFromAddress === undefined) {
    //   dataFromAddressCallback((fetchData) => {
    //     setDataFromAddress(data);
    //     setChildAddressDataRecieved(true)
    //     const clientHeight = `${fetchData.clientHeight}px`;
    //     fetchData.classList.remove('not-visible-address');
    //     dataFromSidebar.style.setProperty('height', (clientHeight === '0px') ? '510px' : clientHeight);
    //     rightMain[0].style.setProperty('height', (clientHeight === '0px') ? '510px' : clientHeight);
    //   })
    // }


    // if (dataFromAddress === undefined) {
    //   console.log(dataFromAddress,"DATAFROM ADDRESS");
    //   dataFromAddressCallback().then((fetchData) => {
    //     console.log(fetchData,"FETCH DATA");
    //     // setDataFromAddress(fetchData);
    //     // setChildAddressDataRecieved(true);

    //     const clientHeight = `${fetchData.clientHeight}px`;
    //     fetchData.classList.remove('not-visible-address');
    //     dataFromSidebar.style.setProperty('height', (clientHeight === '0px') ? '510px' : clientHeight);
    //     rightMain[0].style.setProperty('height', (clientHeight === '0px') ? '510px' : clientHeight);
    //   })
    // }


  }
  const handleOrdersMobile = (e) => {


    // dataFromSidebar.style.setProperty('height',((`${dataFromOrders.clientHeight}px`) ? (`${dataFromOrders.clientHeight}px`) : ('476px')));
    // dataFromSidebar.style.setProperty('height',(clientHeight || '476px'));

    // THIS
    setStorePage({ ...storePage, orders: true, profile: false, address: false, wishlist: false, viewed: false, credits: false, manageCredits: false, friends: false, password: false });

    // dataFromOrders.classList.remove('non-visible-orders');
    if (dataFromOrders !== undefined) {

      dataFromOrders.classList.remove('not-visible-orders');
      const clientHeight = `${dataFromOrders.clientHeight}px`;
      dataFromSidebar.style.setProperty('height', (clientHeight === '0px') ? '2518px' : clientHeight);
      rightMain[0].style.setProperty('height', (clientHeight === '0px') ? '2518px' : clientHeight);
    }
    dataFromSidebar.classList.remove('sidebar-main-mobile');
  }

  const handleWishlistMobile = () => {
    setStorePage({ ...storePage, orders: false, profile: false, address: false, wishlist: true, viewed: false, credits: false, manageCredits: false, friends: false, password: false });
    if (dataFromWishlist !== undefined) {

      dataFromWishlist.classList.remove('not-visible-wishlist');
      const clientHeight = `${dataFromWishlist.clientHeight}px`;
      dataFromSidebar.style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '476px')) ? '476px' : clientHeight);
      rightMain[0].style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '476px')) ? '476px' : clientHeight);
    }
    dataFromSidebar.classList.remove('sidebar-main-mobile');
  }


  const handleRecentlyViewedMobile = () => {
    setStorePage({ ...storePage, orders: false, profile: false, address: false, wishlist: false, viewed: true, credits: false, manageCredits: false, friends: false, password: false });
    if (dataFromRecentlyViewed !== undefined) {

      dataFromRecentlyViewed.classList.remove('not-visible-viewed');
      const clientHeight = `${dataFromRecentlyViewed.clientHeight}px`;
      dataFromSidebar.style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '476px')) ? '476px' : clientHeight);
      rightMain[0].style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '476px')) ? '476px' : clientHeight);
    }
    dataFromSidebar.classList.remove('sidebar-main-mobile');
  }
  const handleCreditsMobile = () => {
    setStorePage({ ...storePage, orders: false, profile: false, address: false, wishlist: false, viewed: false, credits: true, manageCredits: false, friends: false, password: false });
    if (dataFromCredits !== undefined) {

      dataFromCredits.classList.remove('not-visible-credits');
      const clientHeight = `${dataFromCredits.clientHeight}px`;
      dataFromSidebar.style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '476px')) ? '476px' : clientHeight);
      rightMain[0].style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '476px')) ? '476px' : clientHeight);
    }
    dataFromSidebar.classList.remove('sidebar-main-mobile');
  }

  const handleManageCreditsMobile = () => {
    setStorePage({ ...storePage, orders: false, profile: false, address: false, wishlist: false, viewed: false, credits: false, manageCredits: true, friends: false, password: false });
    if (dataFromManageCredits !== undefined) {
      dataFromManageCredits.classList.remove('not-visible-manage-credits');
      const clientHeight = `${dataFromManageCredits.clientHeight}px`;
      dataFromSidebar.style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '400px')) ? '476px' : clientHeight);
      rightMain[0].style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '400px')) ? '476px' : clientHeight);
    }
    dataFromSidebar.classList.remove('sidebar-main-mobile');

  }

  const handleFriendsMobile = () => {
    setStorePage({ ...storePage, orders: false, profile: false, address: false, wishlist: false, viewed: false, credits: false, manageCredits: false, friends: true, password: false });
    if (dataFromFriends !== undefined) {
      dataFromFriends.classList.remove('not-visible-friends');
      const clientHeight = `${dataFromFriends.clientHeight}px`;
      dataFromSidebar.style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '400px')) ? '476px' : clientHeight);
      rightMain[0].style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '400px')) ? '476px' : clientHeight);
    }
    dataFromSidebar.classList.remove('sidebar-main-mobile');

  }
  const handlePasswordMobile = () => {
    setStorePage({ ...storePage, orders: false, profile: false, address: false, wishlist: false, viewed: false, credits: false, manageCredits: false, friends: false, password: true });
    if (dataFromPassword !== undefined) {
      dataFromPassword.classList.remove('not-visible-password');
      const clientHeight = `${dataFromPassword.clientHeight}px`;
      dataFromSidebar.style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '400px')) ? '476px' : clientHeight);
      rightMain[0].style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '400px')) ? '476px' : clientHeight);

    }
    dataFromSidebar.classList.remove('sidebar-main-mobile');
  }


  const totalDataFromOrdersFunc = data => {
    setTotalDataFromOrdersState(data)
  }

  const totalDataFromWIshlistFunc = data => {
    setTotalDataFromWishlistState(data)
  }
  return (


    <Provider store={store}>


      <>
        <div className='main'>

          <BrowserRouter>

            <HeaderCompo />

            <div className='to-manage-nav-height'>


              <SidebarCompo storePage={storePage} totalDataFromOrdersState = {totalDataFromOrdersState} totalDataFromWishlistState={totalDataFromWishlistState} dataFromSidebarCallback={dataFromSidebarCallback} dataFromAddress={dataFromAddress} dataFromProfile={dataFromProfile} dataFromOrders={dataFromOrders} handleAddressMobile={handleAddressMobile} handleProfileMobile={handleProfileMobile} handleOrdersMobile={handleOrdersMobile} handleWishlistMobile={handleWishlistMobile} handleRecentlyViewedMobile={handleRecentlyViewedMobile} handleCreditsMobile={handleCreditsMobile} handleManageCreditsMobile={handleManageCreditsMobile} handleFriendsMobile={handleFriendsMobile} handlePasswordMobile={handlePasswordMobile} />



              {/* BELOW RIGHT-MAIN HEIGHT:AUTO WORKS */}
              {/* <div className='right-main' style={{ 'height': 'auto' }}> */}
              <div className='right-main' >

                <Routes>

                  {/* <Route exact path='/profile' element={<ProfileCompo dataFromProfileCallback={dataFromProfileCallback} dataFromSidebar={dataFromSidebar} handleProfileMobile={handleProfileMobile} />}> </Route> */}
                  {/* <Route  path='/profile' element={<ProfileCompoRedux  dataFromProfileCallback={dataFromProfileCallback} handleProfileMobile={handleProfileMobile} dataFromSidebar={dataFromSidebar}/>}> </Route> */}


                  {['/','/profile'].map(path => <Route  path={path} element={<ProfileCompo  dataFromProfileCallback={dataFromProfileCallback} handleProfileMobile={handleProfileMobile} dataFromSidebar={dataFromSidebar}/>}> </Route>)}


                  {/* {['/','/profile'].map(path => <Route  path={path} element={<ProfileCompoRedux  dataFromProfileCallback={dataFromProfileCallback} handleProfileMobile={handleProfileMobile} dataFromSidebar={dataFromSidebar}/>}> </Route>)} */}


                  {/* {pathStateProfile ?
                    [{ pathStateProfile }, '/profile'].map(path => <Route exact path={path} element={<ProfileCompo dataFromProfileCallback={dataFromProfileCallback} dataFromSidebar={dataFromSidebar} handleProfileMobile={handleProfileMobile} />}> </Route>)
                    : (<Route exact path='/profile' element={<ProfileCompo dataFromProfileCallback={dataFromProfileCallback} dataFromSidebar={dataFromSidebar} handleProfileMobile={handleProfileMobile} />}> </Route>)
                  } */}

                  {/* {pathStateAddress ?
                    [{ pathStateAddress }, '/address'].map(path => <Route exact path={path} element={<AddressCompo dataFromAddressCallback={dataFromAddressCallback} dataFromSidebar={dataFromSidebar} handleAddressMobile={handleAddressMobile} dataFromAddress={dataFromAddress} />}> </Route>
                    )
                    : (<Route exact path='/address' element={<AddressCompo dataFromAddressCallback={dataFromAddressCallback} dataFromSidebar={dataFromSidebar} handleAddressMobile={handleAddressMobile} dataFromAddress={dataFromAddress} />}> </Route>
                    )
                  } */}

                  {/* {pathStateOrders ?
                    [{ pathStateOrders }, '/orders'].map(path => <Route exact path={path} element={<MyOrders setContactUs={setContactUs} dataFromOrdersCallback={dataFromOrdersCallback} dataFromSidebar={dataFromSidebar} handleOrdersMobile={handleOrdersMobile} />}> </Route>
                    )
                    : (<Route exact path='/orders' element={<MyOrders setContactUs={setContactUs} dataFromOrdersCallback={dataFromOrdersCallback} dataFromSidebar={dataFromSidebar} handleOrdersMobile={handleOrdersMobile} />}> </Route>
                    )
                  } */}


                  <Route exact path='/address' element={<AddressCompo dataFromAddressCallback={dataFromAddressCallback} dataFromSidebar={dataFromSidebar} handleAddressMobile={handleAddressMobile} dataFromAddress={dataFromAddress} />}> </Route>
                  <Route exact path='/orders' element={<MyOrders setContactUs={setContactUs} dataFromOrdersCallback={dataFromOrdersCallback} dataFromSidebar={dataFromSidebar} handleOrdersMobile={handleOrdersMobile} totalDataFromOrdersFunc={totalDataFromOrdersFunc}/>}> </Route>
                  <Route exact path='/wishlist' element={<MyWishlist dataFromSidebar={dataFromSidebar} dataFromWishlistCallback={dataFromWishlistCallback} totalDataFromWIshlistFunc={totalDataFromWIshlistFunc}/>}> </Route>
                  <Route exact path='/recentlyviewed' element={<RecentlyViewed dataFromSidebar={dataFromSidebar} dataFromRecentlyViewedCallback={dataFromRecentlyViewedCallback} />}> </Route>
                  <Route exact path='/credits' element={<MyCredits dataFromSidebar={dataFromSidebar} dataFromCreditsCallback={dataFromCreditsCallback} />}> </Route>
                  <Route exact path='/managecredits' element={<ManageCredits dataFromSidebar={dataFromSidebar} dataFromManageCreditsCallback={dataFromManageCreditsCallback} />}> </Route>
                  <Route exact path='/referfriends' element={<ReferFriends dataFromSidebar={dataFromSidebar} dataFromFriendsCallback={dataFromFriendsCallback} />}> </Route>
                  <Route exact path='/password' element={<ChangePasswordComp dataFromSidebar={dataFromSidebar} dataFromPasswordCallback={dataFromPasswordCallback} />}> </Route>
                  {/* <PrivateRoute exact path='/profile'> </PrivateRoute> */}
                </Routes>
              </div>
            </div>
          </BrowserRouter>
          {
            console.log("contact", contactUs)}
          {

            contactUs ? (<><MyOrdersContactUs />
              <button style={{ padding: "20px" }} onClick={(e) => { handleClick(e) }}>X</button></>) : ('')

          }
        </div>
      </>

    </Provider>
  );
}

export default App;
