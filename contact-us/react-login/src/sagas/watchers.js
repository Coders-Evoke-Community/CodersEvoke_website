import { takeLatest, takeEvery } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import { getSubmissionsSaga } from './submissionsSaga'
import {
  getSubscriptionsSaga, createSubscriptionSaga
  , deleteSubscriptionSaga
} from './subscriptionSaga'

import * as types from '../actions';


export default function* watchSagas() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.GET_SUBMISSIONS, getSubmissionsSaga);
  yield takeEvery(types.CREATE_SUBSCRIPTION, createSubscriptionSaga);
  yield takeLatest(types.GET_SUBSCRIPTIONS, getSubscriptionsSaga);
  yield takeEvery(types.DELETE_SUBSCRIPTION, deleteSubscriptionSaga);
}