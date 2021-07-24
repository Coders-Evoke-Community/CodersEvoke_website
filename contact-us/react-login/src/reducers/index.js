import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import submission from './submissionReducer'
import subscription from './subscriptionReducer'

const rootReducer = combineReducers({
  register, login, submission, subscription
});

export default rootReducer;