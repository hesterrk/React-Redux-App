import axios from 'axios';
import * as types from './actionTypes';


//How api call works: our action creator function gets dispatched, when it reaches thunk, thunk intercepts it and will call the action (we just created) and give us access to the dispatch function (that the action creator function has) -> then we dispatch as we have outlined in the (dispatch({type: 'fetching' axios.get...})) -> tell our UI we are starting our fetch which takes us to our loading state and only once we are in our loading state (as defined in our reducer) we make our axios call 

export const fetchActivity = () =>  dispatch => {
        dispatch({
            type: types.FETCHING_ACTIVITY_START
        });

        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            console.log(res);
            dispatch({
            type: types.FETCHING_DATA_SUCCESS, payload: res.data.message
        });

        })
        .catch(err => {
            dispatch({
                type: types.FETCHING_DATA_ERROR, payload: err.response

            });


        });

    
};


