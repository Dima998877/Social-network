import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import { dialogsReducer } from './dialogs-reducer';
import { friendsBarReducer } from './friendsBar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import profileReducer from './profile-reducer';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   friendsBar: friendsBarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer
})
 
let  store = createStore(reducers,applyMiddleware(thunkMiddleware))

window.store = store
export default store

