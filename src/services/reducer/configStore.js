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
import { GetBasketReducer } from './GetBasketReducer';
import { ValidOrderReducer } from './ValidOrderReducer';
import { GetCityesReducer } from './getCityesReducer';
import { GetDeliveryReducer } from './getDeliveryReducer';
import { GetPaymentTypeReducer } from './getPaymentTypeReducer';
import { AddInfoReducer } from './AddInfoReducer';
import { AddNewOrderReducer } from './AddNewOrderReducer';
import { GetBanersReducer } from './getBanersReducer';
import { GetPadborkiWhiteProduct } from './getPadborkiWhiteProduct'
import { GetSinglProductReduer } from './getSinglPorductReducer';
import { GetCategoryReducer } from './GetCategoryReducer'
import { GetForAgeReducer } from './GetForAgeReducer';
import { GetSinglOrderReducer } from './GetSinglOrderReducer';

const rootReducer = combineReducers({
    login: AutReducer,
    confirmCode: ConfirmCodeReducer,
    getUser: GetUserReducer,
    static: StaticReducer,
    updateUser: UpdateUserInfoReducer,
    getMyOrder: GetMyOrderReducer,
    getProducets: GetProductsReducer,
    getPorductByCategoy: GetProductByCategoryReducer,
    sort: SortReducer,
    getBasket: GetBasketReducer,
    getBasket: GetBasketReducer,
    validOrder: ValidOrderReducer,
    getCityes: GetCityesReducer,
    getDelivery: GetDeliveryReducer,
    getPaymentType: GetPaymentTypeReducer,
    addInfo: AddInfoReducer,
    addNewOrder: AddNewOrderReducer,
    getBaner: GetBanersReducer,
    getPadborki: GetPadborkiWhiteProduct,
    getSinglProduct: GetSinglProductReduer,
    getCategory: GetCategoryReducer,
    getForAge: GetForAgeReducer,
    getSinglOrder: GetSinglOrderReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk));
