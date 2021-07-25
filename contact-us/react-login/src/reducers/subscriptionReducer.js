import * as types from '../actions';

export default function (state = [], action) {
    let response = action.response;

    switch (action.type) {
        case types.GET_SUBSCRIPTIONS_SUCCESS:
            return { ...state, response };
        case types.GET_SUBSCRIPTIONS_ERROR:
            return { ...state, response };
        case types.CREATE_SUBSCRIPTION_SUCCESS:
            return { ...state, response };
        case types.CREATE_SUBSCRIPTION_ERROR:
            return { ...state, response };
        case types.DELETE_SUBSCRIPTION_SUCCESS:
            return { ...state, response };
        case types.DELETE_SUBSCRIPTION_ERROR:
            return { ...state, response };
        default:
            return state;
    }
}