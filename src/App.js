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
import { useState } from 'react';

function App() {
  const [contactUs, setContactUs] = useState(false);
  const [dataFromSidebar,setDataFromSidebar] = useState('');
  const [dataFromAddress,setDataFromAddress] = useState('');
  // const [dataFromProfile,setDataFromProfile] = useState('');
  const handleClick = (e) => {
    e.preventDefault();
    
    setContactUs(false)
  }
  const dataFromSidebarCallback = (data) =>{
    setDataFromSidebar(data);
  }
  const dataFromAddressCallback = (data) =>{
    setDataFromAddress(data);
  }
  return (


    <>
      <div className='main'>

        <BrowserRouter>

          <HeaderCompo />
          {/* <div className='to-manage-nav-height' style={{height:'auto', backgroundColor:'yellow'}}> */}
          {/* <div className='to-manage-nav-height' style={{height:'500px'}}> */}
          <div className='to-manage-nav-height'>


            <SidebarCompo dataFromSidebarCallback={dataFromSidebarCallback} dataFromAddress={dataFromAddress}/>
            {/* <div className='right-main' style={{'height':'476px'}}> */}
            <div className='right-main' style={{ 'height': 'auto' }}>
              {/* <div className='right-main' style={{height:'auto',backgroundColor:'purple'}}> */}

              {/* <div className='right-main'> */}
              <Routes>

                <Route exact path='/profile' element={<ProfileCompo />}> </Route>
                <Route exact path='/address' element={<AddressCompo dataFromAddressCallback={dataFromAddressCallback} dataFromSidebar={dataFromSidebar}/>}> </Route>
                <Route exact path='/orders' element={<MyOrders setContactUs={setContactUs} />}> </Route>
                <Route exact path='/wishlist' element={<MyWishlist />}> </Route>
                <Route exact path='/recentlyviewed' element={<RecentlyViewed />}> </Route>
                <Route exact path='/credits' element={<MyCredits />}> </Route>
                <Route exact path='/managecredits' element={<ManageCredits />}> </Route>
                <Route exact path='/referfriends' element={<ReferFriends />}> </Route>
                <Route exact path='/password' element={<ChangePasswordComp />}> </Route>
                {/* <PrivateRoute exact path='/profile'> </PrivateRoute> */}
              </Routes>
            </div>
          </div>
        </BrowserRouter>
        {
          console.log("contact", contactUs)}
        {

          contactUs ? (<><MyOrdersContactUs />
            <button style={{ padding: "20px" }} onClick={(e)=>{handleClick(e)}}>X</button></>) : ('')

        }
      </div>
    </>


  );
}

export default App;
