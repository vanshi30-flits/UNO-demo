export const profileSave = (data) => {

    return {
        type: 'SAVE_PROFILE',
        payload: data
    }
}

export const profileEdit = (data) => {

    return {
        type: 'EDIT_PROFILE',
        payload: data
    }
}

export const tempStoreLocal = (data) => {
    return {
        type: 'TEMP_STORE_LOCAL',
        payload: data
    }
}

export const profileEditFirstName = (data) => {

    return {
        type: 'EDIT_PROFILE_FIRSTNAME',
        payload: data
    }
}
export const profileEditLastName = (data) => {

    return {
        type: 'EDIT_PROFILE_LASTNAME',
        payload: data
    }
}

export const profileEditContactNumber = (data) => {

    return {
        type: 'EDIT_PROFILE_CONTACTNUMBER',
        payload: data
    }
}
export const profileEditCountryCode = (data) => {

    return {
        type: 'EDIT_PROFILE_COUNTRYCODE',
        payload: data
    }
}
export const profileEditBirthdate = (data) => {

    return {
        type: 'EDIT_PROFILE_BIRTHDATE',
        payload: data
    }
}
export const profileEditGender = (data) => {

    return {
        type: 'EDIT_PROFILE_GENDER',
        payload: data
    }
}
export const profileEditText = (data) => {

    return {
        type: 'EDIT_PROFILE_TEXT',
        payload: data
    }
}
export const profileEditYear = (data) => {

    return {
        type: 'EDIT_PROFILE_YEAR',
        payload: data
    }
}
export const profileEditMonth = (data) => {

    return {
        type: 'EDIT_PROFILE_MONTH',
        payload: data
    }
}
export const profileEditDay = (data) => {

    return {
        type: 'EDIT_PROFILE_DAY',
        payload: data
    }
}
export const profileEditHour = (data) => {

    return {
        type: 'EDIT_PROFILE_HOUR',
        payload: data
    }
}
export const profileEditMinute = (data) => {

    return {
        type: 'EDIT_PROFILE_MINUTE',
        payload: data
    }
}
export const profileEditState = (data) => {

    return {
        type: 'PROFILE_EDIT_STATE',
        payload: data
    }
}

export const setTempStoreLocal = (data) => {
    return {
        type: 'SET_TEMP_STORE_LOCAL',
        payload: data
    }
}
export const profileCancel = (data) => {

    return {
        type: 'CANCEL_PROFILE',
        payload: data
    }
}

