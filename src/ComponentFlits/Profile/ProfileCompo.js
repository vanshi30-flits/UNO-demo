import React, { useEffect, memo } from 'react'
import './profile.css'
import NavbarMobileCompo from '../Sidebar/NavbarMobileCompo'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { UseSelector, useSelector } from 'react-redux';


const ProfileCompo = ({ dataFromSidebar, dataFromProfileCallback, handleProfileMobile }) => {

// const data = useSelector((state)=>{
//   console.log(state.profile);
// })

  const [edit, setEdit] = useState(localStorage.getItem('editState'));

  const [tempStore, setTempStore] = useState({});



  useEffect(() => {

    const tempStoreLocalRetrievedData = localStorage.getItem('tempStoreLocal');
    if (tempStoreLocalRetrievedData) {

      const newTempStoreLocalREtrievedData = JSON.parse(tempStoreLocalRetrievedData);
      setTempStore(newTempStoreLocalREtrievedData);
    }
  }, [])

  // THIS WORKS
  // useEffect(() => {
  //   localStorage.setItem('tempStoreLocal', JSON.stringify(tempStore));
  // }, [tempStore])


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
  const [countryCode, setCountryCode] = useState('+1');
  
  
  const profileOutermostContainer = document.getElementsByClassName('profile-outermost-container');
  
  
  useEffect(()=>{
    dataFromProfileCallback(profileOutermostContainer[0]);

  },[dataFromProfileCallback])

  useEffect(() => {
    // HERE IS CORRECT

    // dataFromProfileCallback(profileOutermostContainer[0]);


    // profileOutermostContainer[0].style.setProperty('height', `${profileOutermostContainer[0].clientHeight}px`);

    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setEmail(localStorage.getItem("email"));
    setGender(localStorage.getItem("gender"));
    setText(localStorage.getItem("text"));
    setYear(localStorage.getItem("year"));
    setMonth(localStorage.getItem("month"));
    setDay(localStorage.getItem("day"));
    setHour(localStorage.getItem("hour"));
    setMinute(localStorage.getItem("minute"));
    setContactNumber(localStorage.getItem("contactNumber"));
    setCountryCode(localStorage.getItem("countryCode"));
    setBirthdate(localStorage.getItem("birthdate"));

// DONOT ADD dataFromProfileCallback in dependency array of use Efffect else ISSUE=>data will not be preserved across the naviagtion 
// Eg: change of first_name will not be holded so that user will not be able to resume form filling 
  }, [])

  useEffect(() => {
    localStorage.setItem('editState', edit);
    // checkEditStateFalse();
    // if (edit === String(false)) {
    // edit = Boolean(edit);
    debugger;
    const savedLocalData = JSON.parse(localStorage.getItem('tempStoreLocal'));
    
    if (savedLocalData) {
      setTempStore(savedLocalData);
    }
    

    debugger;
    if (Boolean(edit) === false || edit === String(false)) {

      

      for (var i = 0; i < container.length; i++) {

        container[i].classList.remove('innermost-input-profile-container');
        container[i].classList.add('added-innermost-input-profile-container');

        container[i].classList.remove('profile-innermost-container');
        container[i].classList.add('added-profile-innermost-container');

        container[i].style.setProperty('width', '');


        label[i].style.setProperty('margin-bottom', '');
        label[i].classList.add('added-profile-label');



        // console.log("container:", container[i]);
        // console.log("label:", label[i]);
        // console.log('input profile:', inputProfile[i]);



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

          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');

          // THIS WORKS
          // if (tempStore.birthdate !== undefined && tempStore.birthdate !== '') {

          //   inputProfile[i].value = tempStore.birthdate;    
          // } else {

          //   inputProfile[i].value = birthdate;
          // }



          if (savedLocalData) {
            if (savedLocalData.birthdate) {
              // if (savedLocalData.birthdate || tempStore === undefined || tempStore === null) {
              // if ((tempStore.birthdate !== undefined && tempStore.birthdate !== '' && tempStore.birthdate) && (savedLocalData.birthdate)) {

              // inputProfile[i].value = savedLocalData.birthdate;

              // setTempStore(prevData => ({ ...prevData, birthdate: savedLocalData.birthdate }));
              //   inputProfile[i].value = tempStore.birthdate;

              setBirthdate(savedLocalData.birthdate)
            }
          } else {

            inputProfile[i].value = birthdate;
          }
          // inputProfile[i].value = tempStore.birthdate;
          
        } else if (inputProfile[i].type === 'tel') {
          const inputList = inputProfile[i].classList;


          inputProfile[i].style.setProperty('padding-left', '42px');
          inputList.remove('profile-input');
          inputList.add('added-contact-input');
          inputList.add('added2-contact-input');


          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');

          // inputProfile[i].value = tempStore.phone;


          // THIS WORKS
          // if (tempStore.phone !== undefined && tempStore.phone !== '') {

          //   inputProfile[i].value = tempStore.phone;
          // } else {
          //   inputProfile[i].value = contactNumber;
          // }




          if (savedLocalData) {


            if (savedLocalData.phone) {
              // if (savedLocalData.gender || tempStore === undefined || tempStore === null) {
              // if ((tempStore.phone !== undefined && tempStore.phone !== '' && tempStore.phone) && (savedLocalData.phone)) {
              // inputProfile[i].value = savedLocalData.phone;

              // setTempStore(prevData => ({ ...prevData, phone: savedLocalData.phone }));
              // inputProfile[i].value = tempStore.phone;
              setContactNumber(savedLocalData.phone)

            } else if (savedLocalData.countryCode) {
              setCountryCode(savedLocalData.countryCode)
            }
          } else {

            if (inputProfile[i].name === 'countryCode') {
              inputProfile[i].value = countryCode;
            } else {

              inputProfile[i].value = contactNumber;
            }
          }


        } else if (inputProfile[i].tagName === 'SELECT') {



          inputProfile[i].classList.remove('profile-gender-select');
          inputProfile[i].classList.add('added-gender-select');

          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');


          // THIS WORKS
          // if (tempStore.gender !== undefined && tempStore.gender !== '') {

          //   inputProfile[i].value = tempStore.gender;
          // } else {
          //   inputProfile[i].value = gender;
          // }



          if (savedLocalData) {
            if (savedLocalData.gender) {
              // if (savedLocalData.gender || tempStore === undefined || tempStore === null) {
              // if ((tempStore.gender !== undefined && tempStore.gender !== '' && tempStore.gender) && (savedLocalData.gender)) {
              // inputProfile[i].value = savedLocalData.gender;

              // setTempStore(prevData => ({ ...prevData, gender: savedLocalData.gender }));
              // inputProfile[i].value = tempStore.gender;

              setGender(savedLocalData.gender);
            }
          } else {
            inputProfile[i].value = gender;
          }

        } else {

          inputProfile[i].style.setProperty('border', '');
          inputProfile[i].style.setProperty('border-color', '');
          inputProfile[i].style.setProperty('display', '');
          inputProfile[i].style.setProperty('font-weight', '')
          inputProfile[i].style.setProperty('height', '');
          inputProfile[i].style.setProperty('padding', '');



          inputProfile[i].classList.add('added-profile-input');

          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');
          if (inputProfile[i].name === 'first_name') {


            // THIS WORKS
            // if (tempStore.first_name !== undefined && tempStore.first_name !== '') {
            //   console.log("FIRSTNAME............................");
            //   inputProfile[i].value = tempStore.first_name;
            // } else {

            //   inputProfile[i].value = firstName;
            // }

            // if (savedLocalData.first_name) {

            if (savedLocalData) {

              if (savedLocalData.first_name) {
                // if ((tempStore.first_name !== undefined && tempStore.first_name !== '' && tempStore.first_name) && (savedLocalData.first_name)) {
                
                // inputProfile[i].value = savedLocalData.first_name;

                // setTempStore(prevData => ({ ...prevData, first_name: savedLocalData.first_name }));
                // inputProfile[i].value = tempStore.first_name;

                setFirstName(savedLocalData.first_name);


              }

            } else {

              inputProfile[i].value = firstName;


            }




          } else if (inputProfile[i].name === 'last_name') {

            // THIS WORKS
            // if (tempStore.last_name !== undefined && tempStore.last_name !== '') {

            //   inputProfile[i].value = tempStore.last_name;
            // } else {
            // 
            //   inputProfile[i].value = lastName;

            // }


            if (savedLocalData) {

              if (savedLocalData.last_name) {
                // if (savedLocalData.last_name || tempStore === undefined || tempStore === null) {
                // if ((tempStore.last_name !== undefined && tempStore.last_name !== '' && tempStore.last_name) && (savedLocalData.last_name)) {

                // inputProfile[i].value = savedLocalData.last_name;

                // setTempStore(prevData => ({ ...prevData, last_name: savedLocalData.last_name }));
                // inputProfile[i].value = tempStore.last_name;

                setLastName(savedLocalData.last_name)

              }

            }
            else {

              inputProfile[i].value = lastName;

            }
          } else {
            // THIS WORKS
            // if (tempStore.email !== undefined && tempStore.email !== '') {

            //   inputProfile[i].value = tempStore.email;
            // } else {
            //   // if (inputProfile[i] === undefined) {
            //   inputProfile[i].value = email;

            // }



            if (savedLocalData) {
              if (savedLocalData.email) {
                // if (savedLocalData.email || tempStore === undefined || tempStore === null) {
                // if ((tempStore.email !== undefined && tempStore.email !== '' && tempStore.email) && (savedLocalData.email)) {
                // inputProfile[i].value = savedLocalData.email;

                // setTempStore(prevData => ({ ...prevData, email: savedLocalData.email }));
                // inputProfile[i].value = tempStore.email;

                setEmail(savedLocalData.email)
              }
            } else {

              inputProfile[i].value = email;

            }
          }
        }


      }








      for (var i = 0; i < container2.length; i++) {

        const containerList2 = container2[i].classList;
        const labelList2 = label2[i].classList;
        const inputList2 = inputProfile2[0].classList;

        // console.log("container2", container2[i]);
        // console.log("label2", label2[i]);
        // console.log("inputList2", inputProfile2[0]);




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

        inputProfile2[0].removeAttribute('disabled');
        inputProfile2[0].removeAttribute('readonly');

        if (savedLocalData) {
          if (savedLocalData.text) {
            setText(savedLocalData.text)
          }
        } else {
          inputProfile2[0].value = text
        }


        if (inputProfile2[i + 3].type === 'file') {

          fileInput[0].classList.add('edit-version-added-file-input');
          fileInput[0].classList.remove('file-input');
          fileInput[0].classList.add('added-profile-input');


          fileContainer[0].classList.add('edit-version-file-input-container')
          fileContainer[0].classList.remove('file-input-container');


          // const fileOuterContainer2 = document.getElementsByClassName('profile-outer-container2');
          // fileOuterContainer2[i].style.setProperty('height', '100px');
        }
        if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i].classList.contains('date-select')) {

          debugger;
          for (let j = 0; j < dateSelect.length; j++) {
            const dateList = dateSelect[j].classList;

            dateList.add('edit-version-added-date-select');
            dateList.add('edit-version-added-profile-input-date-select');
            dateList.add('edit-version-new-date-select');

            dateSelect[j].removeAttribute('disabled');
            dateSelect[j].removeAttribute('readonly');
            if (savedLocalData) {
              if (savedLocalData.year) {
                setYear(savedLocalData.year);
              } 
              if (savedLocalData.month) {
                
                debugger;
                setMonth(savedLocalData.month);
              } 
              if(savedLocalData.day){
                debugger;
                setDay(savedLocalData.day);
              }
            } else {

              if (dateSelect[j].name === 'year') {

                dateSelect[j].value = year
              } 
              if (dateSelect[j].name === 'month') {
                dateSelect[j].value = month

              } 
              
              if (dateSelect[j].name === 'day')
              {
                dateSelect[j].value = day

              }
            }
          }
        }
        if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i + 2].classList.contains('time-select')) {
          for (let k = 0; k < timeSelect.length; k++) {
            const timeList = timeSelect[k].classList;

            timeList.add('edit-version-added-time-select');
            timeList.add('edit-version-added-profile-input-time-select');
            timeList.add('edit-version-new-time-select');
            timeSelect[k].removeAttribute('disabled');
            timeSelect[k].removeAttribute('readonly');

            if (savedLocalData) {
              if (savedLocalData.hour) {
                setHour(savedLocalData.hour);
              } 
              if(savedLocalData.minute){
                debugger;
                setMinute(savedLocalData.minute);
              }
            } else {
              if (timeSelect[k].name === 'hour') {
                timeSelect[k].value = hour
              }  
              if (timeSelect[k].name === 'minute') {
                timeSelect[k].value = minute
              }
            }
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
    // handleProfileMobile();
  }
    // }
    , [edit])






  const ClickedMe = (e) => {
    e.preventDefault();

    const profileOutermostContainer = document.getElementsByClassName('profile-outermost-container');

    profileOutermostContainer[0].classList.add('not-visible-profile');
    dataFromSidebar.classList.add('sidebar-main-mobile');
  }

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



  // const checkEditStateFalse = () => {
  //   console.log("entered in checkEditStateFalse function");
  //   console.log("Edit in checkEditStateFalse=>=>", edit);

  //   debugger;
  //   if (Boolean(edit) === false || edit === String(false)) {

  //     console.log("entered in checkEditStateFalse function =>edit is false");

  //     for (var i = 0; i < container.length; i++) {

  //       container[i].classList.remove('innermost-input-profile-container');
  //       container[i].classList.add('added-innermost-input-profile-container');

  //       container[i].classList.remove('profile-innermost-container');
  //       container[i].classList.add('added-profile-innermost-container');

  //       container[i].style.setProperty('width', '');


  //       label[i].style.setProperty('margin-bottom', '');
  //       label[i].classList.add('added-profile-label');



  //       // console.log("container:", container[i]);
  //       // console.log("label:", label[i]);
  //       // console.log('input profile:', inputProfile[i]);



  //       if (inputProfile[i].name === 'birthdate') {
  //         inputProfile[i].type = 'date';
  //         inputProfile[i].style.setProperty('border', '');
  //         inputProfile[i].style.setProperty('border-color', '');
  //         inputProfile[i].style.setProperty('display', '');
  //         inputProfile[i].style.setProperty('font-weight', '')
  //         inputProfile[i].style.setProperty('height', '');
  //         inputProfile[i].style.setProperty('padding', '');



  //         inputProfile[i].classList.add('added-profile-input');
  //         // inputProfile[i].style.setProperty('text-align','center')

  //         inputProfile[i].removeAttribute('disabled');
  //         inputProfile[i].removeAttribute('readonly');
  //       } else if (inputProfile[i].type === 'tel') {
  //         const inputList = inputProfile[i].classList;


  //         inputProfile[i].style.setProperty('padding-left', '42px');
  //         inputList.remove('profile-input');
  //         inputList.add('added-contact-input');
  //         inputList.add('added2-contact-input');


  //         inputProfile[i].removeAttribute('disabled');
  //         inputProfile[i].removeAttribute('readonly');

  //       } else if (inputProfile[i].tagName === 'SELECT') {



  //         inputProfile[i].classList.remove('profile-gender-select');
  //         inputProfile[i].classList.add('added-gender-select');

  //         inputProfile[i].removeAttribute('disabled');
  //         inputProfile[i].removeAttribute('readonly');

  //       } else {

  //         inputProfile[i].style.setProperty('border', '');
  //         inputProfile[i].style.setProperty('border-color', '');
  //         inputProfile[i].style.setProperty('display', '');
  //         inputProfile[i].style.setProperty('font-weight', '')
  //         inputProfile[i].style.setProperty('height', '');
  //         inputProfile[i].style.setProperty('padding', '');



  //         inputProfile[i].classList.add('added-profile-input');

  //         inputProfile[i].removeAttribute('disabled');
  //         inputProfile[i].removeAttribute('readonly');
  //       }


  //     }








  //     for (var i = 0; i < container2.length; i++) {

  //       const containerList2 = container2[i].classList;
  //       const labelList2 = label2[i].classList;
  //       const inputList2 = inputProfile2[0].classList;


  //       container2[i].style.setProperty('display', 'block');
  //       containerList2.remove('profile-innermost-container2');


  //       labelList2.add('added-profile-label2');
  //       labelList2.remove('profile-label2');



  //       inputProfile2[0].style.setProperty('border', '');
  //       inputProfile2[0].style.setProperty('border-color', '');
  //       inputProfile2[0].style.setProperty('font-weight', '');
  //       inputProfile2[0].style.setProperty('display', '');
  //       inputProfile2[0].style.setProperty('height', '');
  //       inputProfile2[0].style.setProperty('padding', '');
  //       inputList2.add('added-profile-input');

  //       inputProfile2[0].removeAttribute('disabled');
  //       inputProfile2[0].removeAttribute('readonly');



  //       if (inputProfile2[i + 3].type === 'file') {

  //         fileInput[0].classList.add('edit-version-added-file-input');
  //         fileInput[0].classList.remove('file-input');
  //         fileInput[0].classList.add('added-profile-input');


  //         fileContainer[0].classList.add('edit-version-file-input-container')
  //         fileContainer[0].classList.remove('file-input-container');


  //         // const fileOuterContainer2 = document.getElementsByClassName('profile-outer-container2');
  //         // fileOuterContainer2[i].style.setProperty('height', '100px');
  //       }
  //       if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i].classList.contains('date-select')) {


  //         for (let j = 0; j < dateSelect.length; j++) {
  //           const dateList = dateSelect[j].classList;

  //           dateList.add('edit-version-added-date-select');
  //           dateList.add('edit-version-added-profile-input-date-select');
  //           dateList.add('edit-version-new-date-select');

  //           dateSelect[j].removeAttribute('disabled');
  //           dateSelect[j].removeAttribute('readonly');
  //         }
  //       }
  //       if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i + 2].classList.contains('time-select')) {
  //         for (let k = 0; k < timeSelect.length; k++) {
  //           const timeList = timeSelect[k].classList;

  //           timeList.add('edit-version-added-time-select');
  //           timeList.add('edit-version-added-profile-input-time-select');
  //           timeList.add('edit-version-new-time-select');
  //           timeSelect[k].removeAttribute('disabled');
  //           timeSelect[k].removeAttribute('readonly');
  //         }
  //       }
  //       // else{
  //       // inputProfile2[0].style.setProperty('border', '');
  //       // inputProfile2[0].style.setProperty('border-color', '');
  //       // inputProfile2[0].style.setProperty('font-weight', '');
  //       // inputProfile2[0].style.setProperty('display', '');
  //       // inputProfile2[0].style.setProperty('height', '');
  //       // inputProfile2[0].style.setProperty('padding', '');
  //       // inputList2.add('added-profile-input');
  //       // }

  //     }
  //   }

  // }
  debugger;
  // THIS WAS ACTIVE BEFORE BELOW FUNC  
  // checkEditStateFalse();


  const calling = () => {

    // edit=>true(CORRECT)



    // if (edit === true) {
    if (Boolean(edit) === true || edit === String(true)) {




      for (var i = 0; i < container.length; i++) {



        const list = container[i].classList;
        const label_list = label[i].classList;
        const inputList = inputProfile[i].classList;
        if (inputProfile[i].type === 'date') {
          debugger;
          inputProfile[i].type = 'text';
          inputList.remove('added-profile-input');
          inputList.add('profile-input');
          inputProfile[i].setAttribute('disabled', true);
          inputProfile[i].setAttribute('readonly', true);
          inputProfile[i].value = localStorage.getItem('birthdate');


        } else if (inputProfile[i].type === 'tel') {
          debugger;
          inputProfile[i].style.setProperty('padding-left', '');
          inputList.add('profile-input');
          inputList.remove('added-contact-input');
          inputList.remove('added2-contact-input');
          inputProfile[i].setAttribute('disabled', true);
          inputProfile[i].setAttribute('readonly', true);
          inputProfile[i].value = localStorage.getItem('contactNumber');
        } else if (inputProfile[i].tagName === 'SELECT') {
          inputList.remove('added-gender-select');
          inputList.add('profile-gender-select');
          inputProfile[i].setAttribute('disabled', true);
          inputProfile[i].setAttribute('readonly', true);
          inputProfile[i].value = localStorage.getItem('gender');
        }
        else {
          inputList.remove('added-profile-input');
          inputList.add('profile-input');
          inputProfile[i].setAttribute('disabled', true);
          inputProfile[i].setAttribute('readonly', true);
          if (inputProfile[i].name === 'first_name') {
            inputProfile[i].value = localStorage.getItem('firstName');
          } else if (inputProfile[i].name === 'email') {
            inputProfile[i].value = localStorage.getItem("email");
          } else {
            inputProfile[i].value = localStorage.getItem('lastName');
          }
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
        inputProfile2[0].setAttribute('disabled', true);
        inputProfile2[0].setAttribute('readonly', true);

        inputProfile2[i].value = localStorage.getItem('text');

        if (inputProfile2[i + 3].type === 'file') {



          fileInput[0].classList.remove('edit-version-added-file-input');
          fileInput[0].classList.add('file-input');
          fileInput[0].classList.remove('added-profile-input');


          fileContainer[0].classList.remove('edit-version-file-input-container')
          fileContainer[0].classList.add('file-input-container');


        }


        if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i].classList.contains('date-select')) {



          for (let j = 0; j < dateSelect.length; j++) {
            const dateList = dateSelect[j].classList;


            dateList.remove('edit-version-added-date-select');
            dateList.remove('edit-version-added-profile-input-date-select');
            dateList.remove('edit-version-new-date-select');

            dateList.add('date-select');
            dateList.add('profile-input-date-select');
            dateSelect[j].setAttribute('disabled', true);
            dateSelect[j].setAttribute('readonly', true);

          }
        }

        if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i + 2].classList.contains('time-select')) {
          for (let k = 0; k < timeSelect.length; k++) {
            const timeList = timeSelect[k].classList;

            timeList.remove('edit-version-added-time-select');
            timeList.remove('edit-version-added-profile-input-time-select');
            timeList.remove('edit-version-new-time-select');
            timeSelect[k].setAttribute('disabled', true);
            timeSelect[k].setAttribute('readonly', true);
          }
        }
      }
    }

  }
  const handleCancleButton = (e) => {
    e.preventDefault();

    // () => { setEdit(true) }

    debugger;
    // THIS NOT WORKING SO IN CALLING(edit===false)  in real in calling it should be(edit===true) inside if branch


    //  setEdit((edit) => !edit);
    // setEdit(prevEdit => !prevEdit);
    

    // var editNew = ((typeof edit === 'string') ? (edit === Str) : (Boolean(edit) ));

    if (typeof edit === 'string') {
      // var b = Boolean(edit);

      // var editNew = !b
      var editNew = true;
    } else {
      var editNew = !edit

    }
    setEdit(editNew);

    // setEdit(true);
    
    if (editNew === true || editNew === String(true)) {


    
      // container.length=6
      for (var i = 0; i < container.length; i++) {



        const list = container[i].classList;
        const label_list = label[i].classList;
        const inputList = inputProfile[i].classList;
        if (inputProfile[i].type === 'date') {
          debugger;
          inputProfile[i].type = 'text';
          inputList.remove('added-profile-input');
          inputList.add('profile-input');
          inputProfile[i].setAttribute('disabled', true);
          inputProfile[i].setAttribute('readonly', true);
          // inputProfile[i].value = localStorage.getItem('birthdate');

          setBirthdate(localStorage.getItem('birthdate'));
          // inputProfile[i].removeAttribute('value');
          // inputProfile[i].setAttribute('value',localStorage.getItem('birthdate'))

          // console.log("birthdate",localStorage.getItem('birthdate'));
          // inputProfile[i].value = toString(localStorage.getItem('birthdate'));

        } else if (inputProfile[i].type === 'tel') {
          debugger;
          inputProfile[i].style.setProperty('padding-left', '');
          inputList.add('profile-input');
          inputList.remove('added-contact-input');
          inputList.remove('added2-contact-input');
          inputProfile[i].setAttribute('disabled', true);
          inputProfile[i].setAttribute('readonly', true);


          // inputProfile[i].value = localStorage.getItem('contactNumber');
          setContactNumber(localStorage.getItem('contactNumber'));
          setCountryCode(localStorage.getItem('countryCode'));
        } else if (inputProfile[i].tagName === 'SELECT') {
          inputList.remove('added-gender-select');
          inputList.add('profile-gender-select');
          inputProfile[i].setAttribute('disabled', true);
          inputProfile[i].setAttribute('readonly', true);
          // inputProfile[i].value = localStorage.getItem('gender');
          setGender(localStorage.getItem('gender'));
        }
        else {
          inputList.remove('added-profile-input');
          inputList.add('profile-input');
          inputProfile[i].setAttribute('disabled', true);
          inputProfile[i].setAttribute('readonly', true);
          if (inputProfile[i].name === 'first_name') {
            debugger;
            
            
            // inputProfile[i].value = localStorage.getItem('firstName');
            // inputProfile[i].value = 'hello';
            // inputProfile[i].attributes[4].nodeValue ='hi';


            // var res = inputProfile[i].match(/value=\".*\"/g);
            // inputProfile[i].replace(res,'value=""');

            

            // inputProfile[i].value = `${newValue}`;
            // inputProfile[i].value = localStorage.getItem('firstName');


            setFirstName(localStorage.getItem('firstName'));
            // inputProfile[i].setAttribute('value',newValue);
            // firstNameID.removeAttribute('value');
            // firstNameID.setAttribute('value',`${newValue}`);

          } else if (inputProfile[i].name === 'email') {
            // inputProfile[i].value = localStorage.getItem("email");
            setEmail(localStorage.getItem('email'));
          } else {
            // inputProfile[i].value = localStorage.getItem('lastName');
            setLastName(localStorage.getItem('lastName'));
          }
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
        inputProfile2[0].setAttribute('disabled', true);
        inputProfile2[0].setAttribute('readonly', true);

        // inputProfile2[i].value = localStorage.getItem('text');
        setText(localStorage.getItem('text'));

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
            dateSelect[j].setAttribute('disabled', true);
            dateSelect[j].setAttribute('readonly', true);
            if (dateSelect[j].name === 'year') {
              setYear(localStorage.getItem('year'));
            } else if (dateSelect[j].name === 'month') {
              setMonth(localStorage.getItem('month'));
            } else {
              setDay(localStorage.getItem('day'));
            }
          }
        }

        if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i + 2].classList.contains('time-select')) {
          for (let k = 0; k < timeSelect.length; k++) {
            const timeList = timeSelect[k].classList;

            timeList.remove('edit-version-added-time-select');
            timeList.remove('edit-version-added-profile-input-time-select');
            timeList.remove('edit-version-new-time-select');
            timeSelect[k].setAttribute('disabled', true);
            timeSelect[k].setAttribute('readonly', true);
            if (timeSelect[k].name === 'hour') {
              setHour(localStorage.getItem('hour'));
            } else {
              setMinute(localStorage.getItem('minute'));
            }
          }
        }
      }
    }

    localStorage.removeItem('tempStoreLocal');
    setTempStore({})

    calling();

    handleProfileMobile();
  }




  const handleSubmit = (e) => {
    e.preventDefault();

    if (contactNumber.length > 10 || contactNumber.length < 10) {
      toast.error('Contact number invalid', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      });
      return
    }
    // else if (email) {


    //   // const hasUpperCase = (str) => /[A-Z]/.test(str);
    //   if (/[A-Z]/.test(email)) {

    //     toast.error('Email cannot contain uppercase letters', {
    //       position: "bottom-center",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //       // transition: Bounce,
    //     });
    //     return
    //   }
    //   return

    // } 
    else {
      toast.success('profile data saved', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // onClose: () => { setEdit((edit) => !edit); calling() } 

        onClose: () => {
          // callingVar => true
          // const callingVar = !Boolean(edit)

          const callingVar = true;
          setEdit(callingVar);

          if (callingVar === true || callingVar === String(true)) {


            
            // container.length=6
            for (var i = 0; i < container.length; i++) {



              const list = container[i].classList;
              const label_list = label[i].classList;
              const inputList = inputProfile[i].classList;
              if (inputProfile[i].type === 'date') {
                debugger;
                inputProfile[i].type = 'text';
                inputList.remove('added-profile-input');
                inputList.add('profile-input');
                inputProfile[i].setAttribute('disabled', true);
                inputProfile[i].setAttribute('readonly', true);
                inputProfile[i].value = localStorage.getItem('birthdate');


              } else if (inputProfile[i].type === 'tel') {
                debugger;
                inputProfile[i].style.setProperty('padding-left', '');
                inputList.add('profile-input');
                inputList.remove('added-contact-input');
                inputList.remove('added2-contact-input');
                inputProfile[i].setAttribute('disabled', true);
                inputProfile[i].setAttribute('readonly', true);
                inputProfile[i].value = localStorage.getItem('contactNumber');
              } else if (inputProfile[i].tagName === 'SELECT') {
                inputList.remove('added-gender-select');
                inputList.add('profile-gender-select');
                inputProfile[i].setAttribute('disabled', true);
                inputProfile[i].setAttribute('readonly', true);
                inputProfile[i].value = localStorage.getItem('gender');
              }
              else {
                inputList.remove('added-profile-input');
                inputList.add('profile-input');
                inputProfile[i].setAttribute('disabled', true);
                inputProfile[i].setAttribute('readonly', true);
                if (inputProfile[i].name === 'first_name') {
                  inputProfile[i].value = localStorage.getItem('firstName');
                } else if (inputProfile[i].name === 'email') {
                  inputProfile[i].value = localStorage.getItem("email");
                } else {
                  inputProfile[i].value = localStorage.getItem('lastName');
                }
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
              inputProfile2[0].setAttribute('disabled', true);
              inputProfile2[0].setAttribute('readonly', true);

              inputProfile2[i].value = localStorage.getItem('text');

              if (inputProfile2[i + 3].type === 'file') {



                fileInput[0].classList.remove('edit-version-added-file-input');
                fileInput[0].classList.add('file-input');
                fileInput[0].classList.remove('added-profile-input');


                fileContainer[0].classList.remove('edit-version-file-input-container')
                fileContainer[0].classList.add('file-input-container');


              }


              if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i].classList.contains('date-select')) {



                for (let j = 0; j < dateSelect.length; j++) {
                  const dateList = dateSelect[j].classList;


                  dateList.remove('edit-version-added-date-select');
                  dateList.remove('edit-version-added-profile-input-date-select');
                  dateList.remove('edit-version-new-date-select');

                  dateList.add('date-select');
                  dateList.add('profile-input-date-select');
                  dateSelect[j].setAttribute('disabled', true);
                  dateSelect[j].setAttribute('readonly', true);

                }
              }

              if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i + 2].classList.contains('time-select')) {
                for (let k = 0; k < timeSelect.length; k++) {
                  const timeList = timeSelect[k].classList;

                  timeList.remove('edit-version-added-time-select');
                  timeList.remove('edit-version-added-profile-input-time-select');
                  timeList.remove('edit-version-new-time-select');
                  timeSelect[k].setAttribute('disabled', true);
                  timeSelect[k].setAttribute('readonly', true);
                }
              }
            }
          }

          // calling()
          localStorage.removeItem('tempStoreLocal');
          setTempStore({})
          handleProfileMobile();
        }

      }
      );
    }

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

  const handleChangeSession = (e) => {
    e.preventDefault();
    const { value, session, name } = e.target;
    setTempStore(prevData => ({ ...prevData, [name]: value }));

    // localStorage.setItem('tempStoreLocal',JSON.stringify(tempStore));
  }

  useEffect(() => {

    localStorage.setItem('tempStoreLocal', JSON.stringify(tempStore));
  }, [tempStore])


  // const handleEditNew = (e) => {
  //   e.preventDefault();

  //   // THIS WORKS
  //   setEdit(false);



  //   // checkEditStateFalse();
  //   // handleProfileMobile();
  // }


  const handleEditNew = (e) => {
    e.preventDefault();
    debugger;

    const newEdit = !edit;
    setEdit(newEdit)
    if (Boolean(newEdit) === false || edit === String(false)) {



      for (var i = 0; i < container.length; i++) {

        container[i].classList.remove('innermost-input-profile-container');
        container[i].classList.add('added-innermost-input-profile-container');

        container[i].classList.remove('profile-innermost-container');
        container[i].classList.add('added-profile-innermost-container');

        container[i].style.setProperty('width', '');


        label[i].style.setProperty('margin-bottom', '');
        label[i].classList.add('added-profile-label');







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

          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');


          // const localBirthdate = localStorage.getItem('birthdate');
          // inputProfile[i].value = localBirthdate 

          setBirthdate(localStorage.getItem('birthdate'));
        } else if (inputProfile[i].type === 'tel') {
          const inputList = inputProfile[i].classList;


          inputProfile[i].style.setProperty('padding-left', '42px');
          inputList.remove('profile-input');
          inputList.add('added-contact-input');
          inputList.add('added2-contact-input');


          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');


          // const localContactNumber = localStorage.getItem('contactNumber');
          // inputProfile[i].value = localContactNumber

          setContactNumber(localStorage.getItem('contactNumber'));
          setCountryCode(localStorage.getItem('countryCode'));
        } else if (inputProfile[i].tagName === 'SELECT') {



          inputProfile[i].classList.remove('profile-gender-select');
          inputProfile[i].classList.add('added-gender-select');

          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');


          // const localGender = localStorage.getItem('gender');
          // inputProfile[i].value = localGender

          setGender(localStorage.getItem('gender'));
        } else {

          inputProfile[i].style.setProperty('border', '');
          inputProfile[i].style.setProperty('border-color', '');
          inputProfile[i].style.setProperty('display', '');
          inputProfile[i].style.setProperty('font-weight', '')
          inputProfile[i].style.setProperty('height', '');
          inputProfile[i].style.setProperty('padding', '');



          inputProfile[i].classList.add('added-profile-input');

          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');

          if (inputProfile[i].name === 'first_name') {

            // const localFirstName = localStorage.getItem('firstName');
            // inputProfile[i].value = localFirstName 

            setFirstName(localStorage.getItem('firstName'));
          } else if (inputProfile[i].name === 'last_name') {
            // const localLastName = localStorage.getItem('lastName');
            // inputProfile[i].value = localLastName 

            setLastName(localStorage.getItem('lastName'));
          } else {
            // const localEmail = localStorage.getItem('email');
            // inputProfile[i].value = localEmail 
            setEmail(localStorage.getItem('email'));
          }
        }


      }








      for (var i = 0; i < container2.length; i++) {

        const containerList2 = container2[i].classList;
        const labelList2 = label2[i].classList;
        const inputList2 = inputProfile2[0].classList;






        container2[i].style.setProperty('display', 'block');
        containerList2.remove('profile-innermost-container2');


        labelList2.add('added-profile-label2');
        labelList2.remove('profile-label2');



        inputProfile2[0].style.setProperty('border', '');
        inputProfile2[0].style.setProperty('border-color', '');
        inputProfile2[0].style.setProperty('font-weight', '');
        inputProfile2[0].style.setProperty('display', '');
        inputProfile2[0].style.setProperty('height', '');
        inputProfile2[0].style.setProperty('padding', '');
        inputList2.add('added-profile-input');

        inputProfile2[0].removeAttribute('disabled');
        inputProfile2[0].removeAttribute('readonly');
        setText(localStorage.getItem('text'));



        if (inputProfile2[i + 3].type === 'file') {

          fileInput[0].classList.add('edit-version-added-file-input');
          fileInput[0].classList.remove('file-input');
          fileInput[0].classList.add('added-profile-input');


          fileContainer[0].classList.add('edit-version-file-input-container')
          fileContainer[0].classList.remove('file-input-container');



        }
        if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i].classList.contains('date-select')) {


          for (let j = 0; j < dateSelect.length; j++) {
            const dateList = dateSelect[j].classList;

            dateList.add('edit-version-added-date-select');
            dateList.add('edit-version-added-profile-input-date-select');
            dateList.add('edit-version-new-date-select');

            dateSelect[j].removeAttribute('disabled');
            dateSelect[j].removeAttribute('readonly');
            if (dateSelect[j].name === 'year') {

              setYear(localStorage.getItem('year'))
            } else if (dateSelect[j].name === 'month') {

              setMonth(localStorage.getItem('month'))
            } else {

              setDay(localStorage.getItem('day'))
            }

          }
        }
        if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i + 2].classList.contains('time-select')) {
          for (let k = 0; k < timeSelect.length; k++) {
            const timeList = timeSelect[k].classList;

            timeList.add('edit-version-added-time-select');
            timeList.add('edit-version-added-profile-input-time-select');
            timeList.add('edit-version-new-time-select');
            timeSelect[k].removeAttribute('disabled');
            timeSelect[k].removeAttribute('readonly');

            if (timeSelect[k].name === 'hour') {

              setHour(localStorage.getItem('hour'))
            } else {

              setMinute(localStorage.getItem('minute'))
            }
          }
        }


      }
    }

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
      {/* <div className='profile-outermost-container' style={{'height': `${profileOutermostContainer[0].clientHeight}px`}}>
        <div className='profile-outermost-container2' style={{ 'height': 'auto', 'minHeight': `${profileOutermostContainer[0].clientHeight}px` }}> */}
      <div className='profile-outermost-container'>
        <div className='profile-outermost-container2'>
          <div className='profile-outermost-container3'>

            <NavbarMobileCompo ClickedMe={ClickedMe} navTitle='My Profile' />
            {/* <NavbarMobileCompo /> */}

            <div className='profile-wrapper'>
              <form onSubmit={handleSubmit} >


                {/* ------------------------------------------------------- */}



                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div id='1' className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>First Name:</label>
                      <input disabled id='first_name' className='profile-input input-js' placeholder name='first_name' type='text' readonly value={firstName} onChange={e => {
                        setFirstName(e.target.value);
                        handleChangeSession(e);
                      }} data-session='sessionFirstName'></input>

                    </div>

                  </div>
                </div>
                {/* ------------------------------------------------------- */}

                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>Last Name:</label>
                      <input disabled className='profile-input input-js' placeholder name='last_name' type='text' readonly value={lastName} onChange={e => { setLastName(e.target.value); handleChangeSession(e) }} data-session='sessionLastName'></input>

                    </div>
                  </div>
                </div>

                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>Email:</label>
                      <input disabled className='profile-input input-js' placeholder name='email' type='email' readonly value={email} onChange={e => { setEmail(e.target.value); handleChangeSession(e) }} data-session='sessionEmail'></input>

                    </div>
                  </div>
                </div>



                {/* ---------------------------------------------------------------------------------- */}
                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>Contact number:</label>

                      <input disabled className='profile-input input-js' placeholder name='phone' type='tel' readonly

                        value={((typeof edit === 'string') ? (edit === String(true)) : (Boolean(edit) === true)) ? `${countryCode} ${contactNumber}` : contactNumber.replace(/([a-zA-Z])/g, "")}
                        onChange={e => { setContactNumber(e.target.value); handleChangeSession(e); }}
                        data-session='sessionContactNumber'
                      ></input>

                      {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                        <div>
                          <input className='contact-inner-input' type='text' style={{ width: '52px' }} readonly disabled
                            // value='+1'
                            value={countryCode ? countryCode : '+1'}

                            data-session='sessionContactNumber'
                          ></input>

                          <div className='country-select-dropdown'>
                            <span className='country-select-flag' style={{ backgrouundPosition: '0px -50px' }}></span>
                            <div className='country-select-dowm-arrow-container'>
                              <select className='select-option-of-country-select' value={countryCode ? countryCode : '+1'} onChange={e => { setCountryCode(e.target.value); handleChangeSession(e) }} name='countryCode' data-session='sessionCountryCode'>

                                <option >+1</option>
                                <option >+91</option>
                                <option>+93</option>

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

                      <input disabled className='profile-input input-js' placeholder name='birthdate' type='text' readonly
                        value={birthdate} onChange={e => { setBirthdate(e.target.value); handleChangeSession(e) }}
                        data-session='sessionBirthdate'
                      ></input>



                    </div>
                  </div>
                </div>
                {/* ---------------------------------------------------------------------------------- */}


                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>Gender:</label>

                      <div className='select-container'>
                        {((typeof edit === 'string') ? (edit === String(true)) : (Boolean(edit) === true)) ? (
                          <select disabled name='gender' id='select-gender' value={gender} readonly className='profile-gender-select input-js' style={{ appearance: 'none' }}>
                            <option className='profile-gender-option' value='none'></option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                          </select>
                        ) : (
                          <div style={{ width: '100%' }}>
                            <select disabled name='gender' id='select-gender' readonly className='profile-gender-select input-js' value={gender} onChange={e => { setGender(e.target.value); handleChangeSession(e) }} data-session='sessionGender'>
                              
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
                      <input disabled className='profile-input input2-js' placeholder name='text' type='text' readonly value={text.replace(/\s|[0-9]/g, '')} onChange={e => { setText(e.target.value); handleChangeSession(e) }} data-session='sessionText'></input>


                      {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
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
                          <select disabled className='date-select profile-input-date-select input2-js' name='year' value={year} onChange={e => { setYear(e.target.value); handleChangeSession(e) }} data-session='sessionYear'>

                            <option>1989</option>
                            <option>2000</option>
                            <option>2001</option>
                          </select>
                          {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                            <div className='edit-version-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          ) : ('')}
                        </div>
                        <div className='date-month-container marg-mon month' >
                          <select disabled className='date-select profile-input-date-select input2-js' name='month' value={month} onChange={e => { setMonth(e.target.value); handleChangeSession(e) }} data-session='sessionMonth'>

                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                          </select>
                          {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                            <div className='edit-version-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          ) : ('')}
                        </div>
                        <div className='date-day-container day'>
                          <select disabled className='date-select profile-input-date-select input2-js' name='day' value={day} onChange={e => { setDay(e.target.value); handleChangeSession(e) }} data-session='sessionDay'>

                            <option >10</option>
                            <option >11</option>
                            <option >12</option>
                          </select>
                          {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                            <div className='edit-version-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          ) : ('')}
                        </div>
                      </div>
                      {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
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



                      <div className='time-container p'>
                        <div className='time-hour-container hour'>
                          <select disabled className='time-select profile-input-time-select input2-js' name='hour' value={hour} onChange={e => { setHour(e.target.value); handleChangeSession(e) }} data-session='sessionHour'>
                            <option>03</option>
                            <option>04</option>
                            <option>06</option>
                          </select>
                          {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                            <div className='edit-version-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          ) : ('')}
                        </div>
                        <div className='time-minute-container minute marg-min-container'>
                          <select disabled className='time-select profile-input-time-select input2-js' name='minute' value={minute} onChange={e => { setMinute(e.target.value); handleChangeSession(e) }} data-session='sessionMinute'>

                            <option>40</option>
                            <option>10</option>
                            <option>20</option>
                          </select>
                          {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                            <div className='edit-version-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          ) : ('')}
                        </div>
                      </div>
                      {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                        <div className='edit-version-sub-text-container'>
                          <div className='edit-version-sub-text-icon-container'><i class="fa-regular fa-message sub-text-add-icon"></i></div>
                          <span className='edit-version-sub-text-span'>add Time</span>
                        </div>
                      ) : ('')}
                    </div>
                  </div>
                </div>
                {/* ------------------------- */}








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





                <div>
                  <div className='profile-outer-container outer-container-btn'>

                    {/* {edit === (true || String(true)) ? */}
                    {((typeof edit === 'string') ? (edit === String(true)) : Boolean(edit) === true) ?
                      (
                        <div className='second-inner-container'>
                          
                          {/* <button className='profile-btn' onClick={() => setEdit(!edit)} type='button' name='edit'>Edit</button> */}

                          {/* THIS */}
                          {/* <button className='profile-btn' onClick={(e) => { e.preventDefault(); setEdit(false); handleProfileMobile() }} type='button' name='edit'>Edit</button> */}
                          {/* <button className='profile-btn' onClick={(e) => { setEdit(false); handleProfileMobile(); }} type='button' name='edit'>Edit</button> */}
                          <button className='profile-btn' onClick={handleEditNew} type='button' name='edit'>Edit</button>

                        </div>
                      ) : (
                        <div className='second-inner-container'>
                          <button className='profile-btn-cancel' name='cancel' type='button' onClick={(e) => { handleCancleButton(e); }}>Cancle</button>
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

export default memo(ProfileCompo)
