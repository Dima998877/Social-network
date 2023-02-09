import {combineReducers, legacy_createStore as createStore} from 'redux';
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { friendsBarReducer } from './friendsBar-reducer';
import usersReducer from './users-reducer';

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   friendsBar: friendsBarReducer,
   usersPage: usersReducer
})
 
let  store = createStore(reducers)

window.store = store
export default store

