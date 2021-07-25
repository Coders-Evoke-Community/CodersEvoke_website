import * as types from '../actions';

export default function (state = [], action) {
    let response = action.response;

    switch (action.type) {
        case types.GET_SUBMISSIONS_SUCCESS:
            return { ...state, response };
        case types.GET_SUBMISSIONS_ERROR:
            return { ...state, response };
        default:
            return state;
    }
}