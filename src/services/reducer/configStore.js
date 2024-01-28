import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from "redux-thunk"
import { AutReducer } from './LoginReducer';
import { ConfirmCodeReducer } from './ConfirmCodeReducer';
import { GetUserReducer } from './getUserReducer';
import { StaticReducer } from './staticReducer';
import { UpdateUserInfoReducer } from './UpdateUserInfoReducer';
import { GetMyOrderReducer } from './GetMyOrderReducer';
import { GetProductsReducer } from './GetProducetsReducer';
import { GetProductByCategoryReducer } from './GetProductByCategoryReducer';
import { SortReducer } from './SortReducer';

const rootReducer = combineReducers({
    login: AutReducer,
    confirmCode: ConfirmCodeReducer,
    getUser: GetUserReducer,
    static: StaticReducer,
    updateUser: UpdateUserInfoReducer,
    getMyOrder: GetMyOrderReducer,
    getProducets: GetProductsReducer,
    getPorductByCategoy: GetProductByCategoryReducer,
    sort: SortReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk));
