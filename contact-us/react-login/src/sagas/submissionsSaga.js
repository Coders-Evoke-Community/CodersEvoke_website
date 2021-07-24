import { put, call } from 'redux-saga/effects';
import { getSubmissionsService } from '../services/submissionservice';

import * as types from '../actions'

export function* getSubmissionsSaga() {
    console.log('INSIDE GET SUB SAGA')
    try {
        const response = yield call(getSubmissionsService);
        yield [
            put({ type: types.GET_SUBMISSIONS_SUCCESS, response })
        ];
    } catch (error) {
        yield put({ type: types.GET_SUBMISSIONS_ERROR, error });
    }
}