const initialState = {

    hubs: [],
    
};

const HubsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_HUBS':
            return {
                ...state,
                hubs: action.payload
            };
        default:
            return state;
    }
}

export default HubsReducer;