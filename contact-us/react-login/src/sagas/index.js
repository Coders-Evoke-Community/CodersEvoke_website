import { fork } from 'redux-saga/effects';
import watchSagas from './watchers';

export default function* startForman() {
  yield fork(watchSagas);
}