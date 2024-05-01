import React from 'react';
import './header.css';
import { useSelector } from 'react-redux';

const HeaderCompo = () => {
  const data = useSelector((state) =>{ 
    return state.header
  })

  console.log("from header",data);
  return (
    <>
      <div className='header-main'>
        <div>
          <p className='header-heading'>Hello {data.userName}</p>
        </div>
      </div>
    </>
  )
}

export default HeaderCompo
