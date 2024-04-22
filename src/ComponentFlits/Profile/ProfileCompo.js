import React, { useEffect } from 'react'
import './profile.css'
import NavbarMobileCompo from '../Sidebar/NavbarMobileCompo'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileCompo = () => {


  useEffect(()=>{
    localStorage.getItem("firstName");
    localStorage.getItem("lastName");
    localStorage.getItem("email");
    localStorage.getItem("gender");
    localStorage.getItem("text");
    localStorage.getItem("year");
    localStorage.getItem("month");
    localStorage.getItem("day");
    localStorage.getItem("hour");
    localStorage.getItem("minute");
    localStorage.getItem("contactNumber");
    localStorage.getItem("countryCode");
    localStorage.getItem("birthdate");
  },[])
  const [edit, setEdit] = useState(true);
  // const [save, setSave] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [minute, setMinute] = useState('');
  const [hour, setHour] = useState('');
  const [gender, setGender] = useState('');
  const [text, setText] = useState('');
  const [countryCode, setCountryCode] = useState('');




  const container = document.getElementsByClassName('container-js');
  const label = document.getElementsByClassName('profile-label');
  const label2 = document.getElementsByClassName('profile-label2-js');
  const inputProfile = document.getElementsByClassName('input-js');
  const inputProfile2 = document.getElementsByClassName('input2-js');





  const dateSelect = document.getElementsByClassName('date-select');
  const timeSelect = document.getElementsByClassName('time-select');
  const fileInput = document.getElementsByClassName('file-js');
  const fileContainer = document.getElementsByClassName('file-container');



  const container2 = document.getElementsByClassName('container2-js');

  // const fileOuterContainer2 = document.getElementsByClassName('profile-outer-container2').lastElementChild;
  // fileOuterContainer2.style.setProperty('height', '40px');


  if (edit === false) {



    for (var i = 0; i < container.length; i++) {
      debugger;
      container[i].classList.remove('innermost-input-profile-container');
      container[i].classList.add('added-innermost-input-profile-container');

      container[i].classList.remove('profile-innermost-container');
      container[i].classList.add('added-profile-innermost-container');

      container[i].style.setProperty('width', '');


      label[i].style.setProperty('margin-bottom', '');
      label[i].classList.add('added-profile-label');



      console.log("container:", container[i]);
      console.log("label:", label[i]);
      console.log('input profile:', inputProfile[i]);



      if (inputProfile[i].name === 'birthdate') {
        inputProfile[i].type = 'date';
        inputProfile[i].style.setProperty('border', '');
        inputProfile[i].style.setProperty('border-color', '');
        inputProfile[i].style.setProperty('display', '');
        inputProfile[i].style.setProperty('font-weight', '')
        inputProfile[i].style.setProperty('height', '');
        inputProfile[i].style.setProperty('padding', '');



        inputProfile[i].classList.add('added-profile-input');
        // inputProfile[i].style.setProperty('text-align','center')
      } else if (inputProfile[i].type === 'tel') {
        const inputList = inputProfile[i].classList;


        inputProfile[i].style.setProperty('padding-left', '32px');
        inputList.remove('profile-input');
        inputList.add('added-contact-input');
        inputList.add('added2-contact-input');


      } else if (inputProfile[i].tagName === 'SELECT') {

        debugger;

        inputProfile[i].classList.remove('profile-gender-select');
        inputProfile[i].classList.add('added-gender-select');

      } else {

        inputProfile[i].style.setProperty('border', '');
        inputProfile[i].style.setProperty('border-color', '');
        inputProfile[i].style.setProperty('display', '');
        inputProfile[i].style.setProperty('font-weight', '')
        inputProfile[i].style.setProperty('height', '');
        inputProfile[i].style.setProperty('padding', '');



        inputProfile[i].classList.add('added-profile-input');
      }


    }








    for (var i = 0; i < container2.length; i++) {
      debugger;
      const containerList2 = container2[i].classList;
      const labelList2 = label2[i].classList;
      const inputList2 = inputProfile2[0].classList;

      console.log("container2", container2[i]);
      console.log("label2", label2[i]);
      console.log("inputList2", inputProfile2[0]);
      // labelList2.remove('added-profile-label');



      container2[i].style.setProperty('display', 'block');
      containerList2.remove('profile-innermost-container2');


      labelList2.add('added-profile-label2');
      // labelList2.remove('profile-label');
      labelList2.remove('profile-label2');



      inputProfile2[0].style.setProperty('border', '');
      inputProfile2[0].style.setProperty('border-color', '');
      inputProfile2[0].style.setProperty('font-weight', '');
      inputProfile2[0].style.setProperty('display', '');
      inputProfile2[0].style.setProperty('height', '');
      inputProfile2[0].style.setProperty('padding', '');
      inputList2.add('added-profile-input');



      if (inputProfile2[i + 3].type === 'file') {

        fileInput[0].classList.add('edit-version-added-file-input');
        fileInput[0].classList.remove('file-input');
        fileInput[0].classList.add('added-profile-input');


        fileContainer[0].classList.add('edit-version-file-input-container')
        fileContainer[0].classList.remove('file-input-container');
        debugger;

        // const fileOuterContainer2 = document.getElementsByClassName('profile-outer-container2');
        // fileOuterContainer2[i].style.setProperty('height', '100px');
      }
      if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i].classList.contains('date-select')) {


        for (let j = 0; j < dateSelect.length; j++) {
          const dateList = dateSelect[j].classList;

          dateList.add('edit-version-added-date-select');
          dateList.add('edit-version-added-profile-input-date-select');
          dateList.add('edit-version-new-date-select');
        }
      }
      if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i + 2].classList.contains('time-select')) {
        for (let k = 0; k < timeSelect.length; k++) {
          const timeList = timeSelect[k].classList;

          timeList.add('edit-version-added-time-select');
          timeList.add('edit-version-added-profile-input-time-select');
          timeList.add('edit-version-new-time-select');
        }
      }
      // else{
      // inputProfile2[0].style.setProperty('border', '');
      // inputProfile2[0].style.setProperty('border-color', '');
      // inputProfile2[0].style.setProperty('font-weight', '');
      // inputProfile2[0].style.setProperty('display', '');
      // inputProfile2[0].style.setProperty('height', '');
      // inputProfile2[0].style.setProperty('padding', '');
      // inputList2.add('added-profile-input');
      // }

    }
  }



  const calling = () => {

    // edit=>true

    if (edit === false) {

      // container.length=6
      for (var i = 0; i < container.length; i++) {



        const list = container[i].classList;
        const label_list = label[i].classList;
        const inputList = inputProfile[i].classList;
        if (inputProfile[i].type === 'date') {

          inputProfile[i].type = 'text';
          inputList.remove('added-profile-input');
          inputList.add('profile-input');

        } else if (inputProfile[i].type === 'tel') {

          inputProfile[i].style.setProperty('padding-left', '');
          inputList.add('profile-input');
          inputList.remove('added-contact-input');
          inputList.remove('added2-contact-input');
        } else if (inputProfile[i].tagName === 'SELECT') {
          inputList.remove('added-gender-select');
          inputList.add('profile-gender-select');
        }
        else {
          inputList.remove('added-profile-input');
          inputList.add('profile-input');

        }



        label_list.add('profile-label');
        label_list.remove('added-profile-label');


        list.remove('added-profile-innermost-container');
        list.remove('added-innermost-input-profile-container');
        list.add('profile-innermost-container');
        list.add('innermost-input-profile-container');
      }

      for (var i = 0; i < container2.length; i++) {

        const containerList2 = container2[i].classList;
        const labelList2 = label2[i].classList;
        const inputList2 = inputProfile2[0].classList;



        container2[i].style.setProperty('display', '');
        containerList2.add('profile-innermost-container2');

        labelList2.add('profile-label');
        labelList2.remove('added-profile-label');

        inputList2.remove('added-profile-input');
        inputList2.add('profile-input');
        debugger;


        if (inputProfile2[i + 3].type === 'file') {



          fileInput[0].classList.remove('edit-version-added-file-input');
          fileInput[0].classList.add('file-input');
          fileInput[0].classList.remove('added-profile-input');


          fileContainer[0].classList.remove('edit-version-file-input-container')
          fileContainer[0].classList.add('file-input-container');

          // const fileOuterContainer2 = document.getElementsByClassName('profile-outer-container2');
          // fileOuterContainer2[i].style.setProperty('height', '40px');
        }


        if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i].classList.contains('date-select')) {



          for (let j = 0; j < dateSelect.length; j++) {
            const dateList = dateSelect[j].classList;


            dateList.remove('edit-version-added-date-select');
            dateList.remove('edit-version-added-profile-input-date-select');
            dateList.remove('edit-version-new-date-select');

            dateList.add('date-select');
            dateList.add('profile-input-date-select');

          }
        }

        if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i + 2].classList.contains('time-select')) {
          for (let k = 0; k < timeSelect.length; k++) {
            const timeList = timeSelect[k].classList;

            timeList.remove('edit-version-added-time-select');
            timeList.remove('edit-version-added-profile-input-time-select');
            timeList.remove('edit-version-new-time-select');
          }
        }
      }
    }

  }
  const handleCancleButton = (e) => {
    e.preventDefault();

    // () => { setEdit(true) }


    // THIS NOT WORKING SO IN CALLING(edit===false)  in real in calling it should be(edit===true) inside if branch
    setEdit((edit) => !edit);
    // setEdit(true);


    calling();
  }






  const handleSaveBtnClick = (e) => {
    e.preventDefault();
    // setSave(true);
    toast.success('profile data saved', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    debugger;

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('profile data saved', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      onClose: ()=>{setEdit(!edit)}

    });

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("gender", gender);
    localStorage.setItem("text", text);
    localStorage.setItem("year", year);
    localStorage.setItem("month", month);
    localStorage.setItem("day", day);
    localStorage.setItem("hour", hour);
    localStorage.setItem("minute", minute);
    localStorage.setItem("contactNumber", contactNumber);
    localStorage.setItem("countryCode", countryCode);
    localStorage.setItem("birthdate", birthdate);

  }
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
      {/* <div className='profile-outermost-container' style={{ 'height': '476px' }}> */}
      <div className='profile-outermost-container'>
        <div className='profile-outermost-container2' style={{ 'height': 'auto', 'minHeight': '476px' }}>
          <div className='profile-outermost-container3'>

            <NavbarMobileCompo />

            <div className='profile-wrapper'>
              <form onSubmit={handleSubmit}>


                {/* ------------------------------------------------------- */}

                {/* SECTION:  first name converts into  */}


                {/* USED TO BE */}
                {/* <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div className='profile-innermost-container innermost-input-profile-container'>
                      <label className='profile-label'>First Name:</label>
                      <input className='profile-input' placeholder name='first_name' type='text' readonly value='vanshi'></input>
                    </div>
                  </div>
                </div> */}


                {/* profile-innermost-container[have display:flex] is replaced  NEWCLASS(width:50%)*/}
                {/* innermost-input-profile-container   remove(width-100%, align-items:center)  add(diplay:block)*/}


                {/* profile-label remove(margin-bottom:0), add NEW CLASS(margin-bottom:3px) */}
                {/* {profile-input remove(few things)  add NEW CLASS(few things added)} */}


                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div id='1' className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>First Name:</label>
                      <input id='first_name' className='profile-input input-js' placeholder name='first_name' type='text' readonly value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                    </div>
                    {/* <div id='1' className='innermost-input-profile-container profile-innermost-container'>
                      <label className='profile-label'>First Name:</label>
                      <input className='profile-input' placeholder name='first_name' type='text' readonly value='vanshi'></input>
                    </div> */}
                  </div>
                </div>
                {/* ------------------------------------------------------- */}

                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>Last Name:</label>
                      <input className='profile-input input-js' placeholder name='last_name' type='text' readonly value={lastName} onChange={e => setLastName(e.target.value)}></input>
                    </div>
                  </div>
                </div>

                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>Email:</label>
                      <input className='profile-input input-js' placeholder name='email' type='email' readonly value={email} onChange={e => setEmail(e.target.value)}></input>
                    </div>
                  </div>
                </div>



                {/* ---------------------------------------------------------------------------------- */}
                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>Contact number:</label>

                      <input className='profile-input input-js' placeholder name='phone' type='tel' readonly
                        // value
                        // "CSS:contact-profile-input" not used yet
                        value={contactNumber}
                        onChange={e => setContactNumber(e.target.value)}

                      ></input>


                      {edit === false ? (
                        <div>
                          <input className='contact-inner-input' type='text' style={{ width: '42px' }} readonly disabled
                          // value='+1'
                          ></input>
                          <div className='country-select-dropdown'>
                            <span className='country-select-flag' style={{ backgrouundPosition: '0px -50px' }}></span>
                            <div className='country-select-dowm-arrow-container'>
                              <select className='select-option-of-country-select' value={countryCode ? countryCode : '+1'} onChange={e => setCountryCode(e.target.value)}>
                                <option>+1</option>
                                <option>+91</option>

                              </select>
                              <div className='country-select-dowm-arrow'><i class="fa-solid fa-angle-down"></i></div>
                            </div>
                          </div>
                        </div>) : ('')}





                    </div>
                  </div>
                </div>

                {/* ---------------------------------------------------------------------------------- */}


                {/* ---------------------------------------------------------------------------------- */}

                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>Birthdate: </label>

                      <input className='profile-input input-js' placeholder name='birthdate' type='text' readonly
                        value={birthdate} onChange={e => setBirthdate(e.target.value)}
                      // value
                      ></input>

                    </div>
                  </div>
                </div>
                {/* ---------------------------------------------------------------------------------- */}


                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>Gender:</label>
                      {/* below is original */}
                      {/* <div className='select-container'></div> */}


                      {/* in below div profile-input i added myself for border-radius reasons */}
                      {/* <div className='select-container p'> */}
                      <div className='select-container'>

                        {/* {edit === false ? (
                          <div>
                            <select name='gender' id='select-gender' readonly className='profile-gender-select'>
                              <option className='profile-gender-option' value='none'></option>
                              <option value='male'>Male</option>
                              <option value='female'>Female</option>
                              <option value='other'>Other</option>
                              </select>
                            <div className=''>
                            <i class="fa-solid fa-angle-down"></i>
                            </div>
                          </div>
                        ) : (
                          
                          <select disabled name='gender' id='select-birthday' readonly className='profile-gender-select'>
                          <option className='profile-gender-option' value='none'></option>
                          <option value='male'>Male</option>
                          <option value='female'>Female</option>
                          <option value='other'>Other</option>
                          </select>
                        )} */}



                        {edit === true ? (
                          <select disabled name='gender' id='select-gender' readonly className='profile-gender-select input-js'>
                            <option className='profile-gender-option' value='none'></option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                          </select>
                        ) : (
                          <div style={{ width: '100%' }}>
                            <select name='gender' id='select-gender' readonly className='profile-gender-select input-js' value={gender} onChange={e => setGender(e.target.value)}>
                              <option className='profile-gender-option' ></option>
                              <option value='male'>Male</option>
                              <option value='female'>Female</option>
                              <option value='other'>Other</option>
                            </select>
                            <div className='gender-select-down-arrow-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>


                <div className='profile-outer-container2'>
                  <div className='profile-inner-container2 second-inner-container2 profile-inner-container2'>
                    <div className='profile-innermost-container2 innermost-input-profile-container2 container2-js'>
                      <label className='profile-label2 profile-label2-js'>Text: </label>
                      <input className='profile-input input2-js' placeholder name='text' type='text' readonly value={text} onChange={e => setText(e.target.value)}></input>
                      {edit === false ? (
                        <div className='edit-version-sub-text-container'>
                          <div className='edit-version-sub-text-icon-container'><i class="fa-regular fa-message sub-text-add-icon"></i></div>
                          <span className='edit-version-sub-text-span'>add Text</span>
                        </div>
                      ) : ('')}
                    </div>
                  </div>
                </div>

                <div className='profile-outer-container2'>
                  <div className='profile-inner-container2 second-inner-container2 profile-inner-container2'>
                    <div className='profile-innermost-container2 innermost-input-profile-container2 container2-js'>
                      <label className='profile-label2 profile-label2-js'>Add Date: </label>

                      <div className='date-container p'>
                        <div className='date-year-container'>
                          <select className='date-select profile-input-date-select input2-js' value={year} onChange={e => setYear(e.target.value)}>
                            <option>1989</option>
                            <option>2000</option>
                            <option>2001</option>
                          </select>
                          {edit === false ? (
                            <div className='edit-version-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          ) : ('')}
                        </div>
                        <div className='date-month-container marg-mon month' >
                          <select className='date-select profile-input-date-select input2-js' value={month} onChange={e => setMonth(e.target.value)}>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                          </select>
                          {edit === false ? (
                            <div className='edit-version-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          ) : ('')}
                        </div>
                        <div className='date-day-container day'>
                          <select className='date-select profile-input-date-select input2-js' value={day} onChange={e => setDay(e.target.value)}>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                          </select>
                          {edit === false ? (
                            <div className='edit-version-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          ) : ('')}
                        </div>
                      </div>
                      {edit === false ? (
                        <div className='edit-version-sub-text-container'>
                          <div className='edit-version-sub-text-icon-container'><i class="fa-regular fa-message sub-text-add-icon"></i></div>
                          <span className='edit-version-sub-text-span'>add Date</span>
                        </div>
                      ) : ('')}
                    </div>
                  </div>
                </div>




                <div className='profile-outer-container2'>
                  <div className='profile-inner-container2 second-inner-container2 profile-inner-container2 inner-container-time'>
                    <div className='profile-innermost-container2 innermost-input-profile-container2 container2-js'>
                      <label className='profile-label2 profile-label2-js'>Time:</label>

                      {/* <input className='profile-input' placeholder name='first_name' type='text' readonly value='vanshi'></input> */}

                      <div className='time-container p'>
                        <div className='time-hour-container hour'>
                          <select className='time-select profile-input-time-select input2-js' value={hour} onChange={e => setHour(e.target.value)}>
                            <option>03</option>
                            <option>04</option>
                            <option>06</option>
                          </select>
                          {edit === false ? (
                            <div className='edit-version-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          ) : ('')}
                        </div>
                        <div className='time-minute-container minute marg-min-container'>
                          <select className='time-select profile-input-time-select input2-js' value={minute} onChange={e => setMinute(e.target.value)}>
                            <option>40</option>
                            <option>10</option>
                            <option>20</option>
                          </select>
                          {edit === false ? (
                            <div className='edit-version-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          ) : ('')}
                        </div>
                      </div>
                      {edit === false ? (
                        <div className='edit-version-sub-text-container'>
                          <div className='edit-version-sub-text-icon-container'><i class="fa-regular fa-message sub-text-add-icon"></i></div>
                          <span className='edit-version-sub-text-span'>add Time</span>
                        </div>
                      ) : ('')}
                    </div>
                  </div>
                </div>
                {/* ------------------------- */}
                {/* profile-innermost-container2  kkEro */}
                {/* innermost-input-profile-container  MLxko */}




                {/* height:40px is added by me not mentioned in uno */}


                {/* <div className='profile-outer-container2'>
                  <div className='profile-inner-container2 second-inner-container2 profile-inner-container2 inner-container-file'>
                    <div className='profile-innermost-container2 innermost-input-profile-container2 container2-js'>
                      <label className='profile-label2 profile-label2-js'>File upload:</label>
                      
                      <div className='file-container file-input-container p'>
                        <input type='file' className='file-input file-input-item input2-js file-js' readonly disabled></input>
                        <span className='file-span'>Frame.png</span>
                      </div>
                      <input type='hidden' value></input>
                      <a className='file-upload-anchor'><i class="fa-solid fa-upload"></i></a>
                      {edit === false ? (
                        <>
                          <a className='delete-uploaded-file-anchor'><i class="fa-solid fa-trash"></i></a>

                          <div className='edit-version-sub-text-container'>
                            <div className='edit-version-sub-text-icon-container'><i class="fa-regular fa-message sub-text-add-icon"></i></div>
                            <span className='edit-version-sub-text-span'>add File</span>
                          </div>
                        </>

                      ) : ('')}
                    </div>
                  </div>
                </div> */}

                {/* ------------------------------------------------------- */}


                {/* SECTION:   edit button converts into cancel and save button */}
                {/* USED TO BE */}
                {/* <div>
                  <div className='profile-outer-container outer-container-btn'>
                    <div className='profile-inner-container-btn second-inner-container'>
                      <div className='profile-innermost-container innermost-input-profile-container'>
                        <button className='profile-btn' type='button' name='edit'>Edit</button>
                      </div>
                    </div>
                  </div>
                </div> */}


                <div>
                  <div className='profile-outer-container outer-container-btn'>

                    {edit === true ?
                      (
                        <div className='second-inner-container'>
                          <button className='profile-btn' onClick={() => setEdit(!edit)} type='button' name='edit'>Edit</button>
                        </div>
                      ) : (
                        <div className='second-inner-container'>
                          <button className='profile-btn-cancel' name='cancel' type='button' onClick={(e) => { handleCancleButton(e) }}>Cancle</button>
                          {/* <button className='profile-btn' onClick={handleSaveBtnClick} name='save' type='button'>Save</button> */}
                          {/* <button className='profile-btn' name='save' type='button'>Save</button> */}
                          <input type='submit' value='Save' className='profile-btn'></input>
                        </div>
                      )}


                  </div>
                </div>
                {/* ------------------------------------------------------- */}
              </form>



            </div>
          </div>
        </div>
      </div>
    </>
  )




}

export default ProfileCompo
