import * as types from './index';

export const getSubscriptionsAction = () => {
    return {
        type: types.GET_SUBSCRIPTIONS,
    }
};

export const createSubscriptionAction = (data) => {
    return {
        type: types.CREATE_SUBSCRIPTION,
        data
    }
}

export const deleteSubscriptionAction = (data) => {
    return {
        type: types.DELETE_SUBSCRIPTION,
        data
    }
}