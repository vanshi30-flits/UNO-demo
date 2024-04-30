import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './reducers/profileReducer';
import { composeWithDevTools } from '@redux-devtools/extension';


const mainReducer = combineReducers({
    profile: profileReducer
})

debugger;
const commonData = {

    profile: {
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName'),
        email: localStorage.getItem('email'),
        contactNumber: localStorage.getItem('contactNumber'),
        countryCode: localStorage.getItem('countryCode'),
        birthdate: localStorage.getItem('birthdate'),
        gender: localStorage.getItem('gender'),
        text: localStorage.getItem('text'),
        year: localStorage.getItem('year'),
        month: localStorage.getItem('month'),
        day: localStorage.getItem('day'),
        hour: localStorage.getItem('hour'),
        minute: localStorage.getItem('minute'),
        editState: Boolean(localStorage.getItem('editState')),
        tempStoreLocal: {}
    }
}

const store = createStore(mainReducer, commonData, composeWithDevTools());
export default store;   