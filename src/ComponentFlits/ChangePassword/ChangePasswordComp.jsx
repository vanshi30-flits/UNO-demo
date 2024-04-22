import React from 'react';
import './changepassword.css';
import NavbarMobileCompo from '../Sidebar/NavbarMobileCompo';

const ChangePasswordComp = () => {
  return (
    <>
      {/* <div className='password-outermost-container' style={{ 'height': '435px' ,marginLeft:'242px'}}> */}
      <div className='password-outermost-container' style={{ 'height': '435px' }}>
        <div className='password-outermost-container2' style={{ 'height': 'auto', 'minHeight': '435px' }}>
          <div className='password-outermost-container3'>
            <NavbarMobileCompo />

            <div className='password-wrapper'>
              <form>
                <div className='password-outer-container'>
                  <div className='password-inner-container pass-second-inner-container password-inner-container2'>
                    <div className='password-innermost-container'>
                      <label className='pass-label'>New password:</label>
                      <input type='password' className='pass-input'></input>
                      <small className='pass-err-mssg'>Password must be between 6 to 40 characters</small>
                    </div>
                  </div>
                </div>
                <div className='password-outer-container'>
                  <div className='password-inner-container pass-second-inner-container password-inner-container2'>
                    <div className='password-innermost-container'>
                      <label className='pass-label'>confirm new password:</label>
                      <input type='password' className='pass-input'></input>
                      <small className='pass-err-mssg'>Password must be between 6 to 40 characters</small>
                    </div>
                  </div>
                </div>
                <button className='pass-btn'>update password</button>
              </form>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default ChangePasswordComp
