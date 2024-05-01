const ordersReducer = (state = '', action) => {
    switch (action.type) {
        case 'DATA_FROM_ORDERS':
            console.log("inside reducer");
            return { ...state, dataFromOrders: action.payload }
        default:
            return state;
    }

    return state
}

export default ordersReducer;