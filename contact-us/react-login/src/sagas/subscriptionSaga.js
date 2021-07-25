import { put, call } from 'redux-saga/effects';
import { getSubscriptionsService, createSubscriptionService, deleteSubscriptionService } from '../services/subscriptionService';

import * as types from '../actions'

export function* getSubscriptionsSaga() {
    try {
        const response = yield call(getSubscriptionsService);
        yield [
            put({ type: types.GET_SUBSCRIPTIONS_SUCCESS, response })
        ];
    } catch (error) {
        yield put({ type: types.GET_SUBSCRIPTIONS_ERROR, error });
    }
}

export function* createSubscriptionSaga(payload) {
    console.log('inside create subs saga')
    try {
        const response = yield call(createSubscriptionService, payload);
        yield [
            put({ type: types.CREATE_SUBSCRIPTION_SUCCESS, response })
        ];
    } catch (error) {
        yield put({ type: types.CREATE_SUBSCRIPTION_ERROR, error });
    }
}

export function* deleteSubscriptionSaga(payload) {
    try {
        const response = yield call(deleteSubscriptionService, payload);
        yield [
            put({ type: types.DELETE_SUBSCRIPTION_SUCCESS, response })
        ];
    } catch (error) {
        yield put({ type: types.DELETE_SUBSCRIPTION_ERROR, error });
    }
}