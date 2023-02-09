import {combineReducers, legacy_createStore as createStore} from 'redux';
import { dialogsReducer } from './dialogs-reducer';
import { friendsBarReducer } from './friendsBar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import profileReducer from './profile-reducer';

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   friendsBar: friendsBarReducer,
   usersPage: usersReducer,
   auth: authReducer
})
 
let  store = createStore(reducers)

window.store = store
export default store

