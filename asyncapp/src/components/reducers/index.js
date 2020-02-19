import * as types from '../actions/actionTypes';

//Shape of our state 

const initialState = {
    isLoading: false,
    activity: null,
    error: '',


};

//Reducer function

export const reducer = (state = initialState, action) => {

    switch(action.type ) {

    case types.FETCHING_ACTIVITY_START :
        return {
            ...state,
            isLoading: true
        };
        case types.FETCHING_DATA_SUCCESS :
            return {
                ...state,
                isLoading: false,
                activity: action.payload
            };

            case types.FETCHING_DATA_ERROR :
                return {
                    ...state,
                    error: action.payload
                }



        default:
            return state;
    }

}