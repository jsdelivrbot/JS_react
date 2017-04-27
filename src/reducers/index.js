import {
  combineReducers
} from 'redux';
import commentReducer from './comments';
import authenticationReducer from './authentication';
import usersReducer from './users';


const rootReducer = combineReducers({
  comments: commentReducer, // reducer za  comments

  authentcated: authenticationReducer, // reducer za  authentication

   users: usersReducer // reducer za  usersReducer
});
export default rootReducer;
