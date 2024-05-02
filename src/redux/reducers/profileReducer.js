const profileReducer = (state = '', action) => {

    switch (action.type) {
        case 'SAVE_PROFILE':

            const { firstName, lastName, email, birthdate, gender, contactNumber, countryCode, text, year, month, day, hour, minute, editState } = action.payload;
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);            
            localStorage.setItem('birthdate', birthdate);
            localStorage.setItem('gender', gender);
            localStorage.setItem('contactNumber', contactNumber);
            localStorage.setItem('countryCode', countryCode);
            localStorage.setItem('text', text);
            localStorage.setItem('year', year);
            localStorage.setItem('month', month);
            localStorage.setItem('day', day);
            localStorage.setItem('hour', hour);
            localStorage.setItem('minute', minute);
            localStorage.setItem('editState', editState);

            const updatedState = { ...state, firstName, lastName, email, birthdate, gender, contactNumber, countryCode, text, year, month, day, hour, minute, editState, tempStoreLocal: {} };
            return updatedState;

        case 'EDIT_PROFILE_FIRSTNAME':

            return { ...state, firstName: action.payload }

        case 'EDIT_PROFILE_LASTNAME':

            return { ...state, lastName: action.payload }
        case 'EDIT_PROFILE_CONTACTNUMBER':

            return { ...state, contactNumber: action.payload }
        case 'EDIT_PROFILE_COUNTRYCODE':

            return { ...state, countryCode: action.payload }
        case 'EDIT_PROFILE_BIRTHDATE':

            return { ...state, birthdate: action.payload }
        case 'EDIT_PROFILE_GENDER':

            return { ...state, gender: action.payload }
        case 'EDIT_PROFILE_TEXT':

            return { ...state, text: action.payload }
        case 'EDIT_PROFILE_YEAR':

            return { ...state, year: action.payload }
        case 'EDIT_PROFILE_MONTH':

            return { ...state, month: action.payload }
        case 'EDIT_PROFILE_DAY':

            return { ...state, day: action.payload }
        case 'EDIT_PROFILE_HOUR':

            return { ...state, hour: action.payload }
        case 'EDIT_PROFILE_MINUTE':

            return { ...state, minute: action.payload }
        case 'PROFILE_EDIT_STATE':


            localStorage.setItem('editState', action.payload);
            return { ...state, editState: action.payload };

        case 'TEMP_STORE_LOCAL':
            localStorage.setItem('tempStoreLocal', action.payload);
            return { ...state, tempStoreLocal: action.payload };

        case 'SET_TEMP_STORE_LOCAL':
            const newTempStore = { [action.payload.name]: action.payload.value };
            return { ...state, tempStoreLocal: { ...state.tempStoreLocal, [action.payload.name]: action.payload.value } };




        case 'EDIT_PROFILE':



            localStorage.setItem('editState', action.payload.editState)
            const updatedStateEdit = {
                ...state,
                firstName: localStorage.getItem('firstName'),
                lastName: localStorage.getItem('lastName'),                
                email: action.payload.email,
                birthdate: localStorage.getItem('birthdate'),
                gender: localStorage.getItem('gender'),
                contactNumber: localStorage.getItem('contactNumber'),
                countryCode: localStorage.getItem('countrycode'),
                text: localStorage.getItem('text'),
                year: localStorage.getItem('year'),
                month: localStorage.getItem('month'),
                day: localStorage.getItem('day'),
                hour: localStorage.getItem('hour'),
                minute: localStorage.getItem('minute'),                             
                editState: action.payload.editState

            }
            return updatedStateEdit

        case 'CANCEL_PROFILE':


            localStorage.setItem('editState', action.payload.editState)
            const updatedStateCancel = {
                ...state,
                firstName: localStorage.getItem('firstName'),
                lastName: localStorage.getItem('lastName'),                
                email: action.payload.email,
                birthdate: localStorage.getItem('birthdate'),
                gender: localStorage.getItem('gender'),
                contactNumber: localStorage.getItem('contactNumber'),
                countryCode: localStorage.getItem('countrycode'),
                text: localStorage.getItem('text'),
                year: localStorage.getItem('year'),
                month: localStorage.getItem('month'),
                day: localStorage.getItem('day'),
                hour: localStorage.getItem('hour'),
                minute: localStorage.getItem('minute'),
                tempStoreLocal: {},                
                editState: action.payload.editState
            }
            return updatedStateCancel
        default:
            return state

    }

}

export default profileReducer;
