import {combineReducers, legacy_createStore as createStore} from 'redux';
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { friendsBarReducer } from './friendsBar-reducer';

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   friendsBar: friendsBarReducer
})

const store = createStore(reducers)

export default store

