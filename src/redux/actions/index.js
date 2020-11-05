import { TYPES } from '../contants/index';
import data from './../api/loadService';
import dataServiceItem from './../api/loadServiceItem';
export const cartItem = (id, service, extra) => ({
    type: TYPES.ADD_TO_CART,
    data: { id, service, extra }
})
export const loadServiceExtra = (extra, rootPrice, rootTime) => ({
    type: TYPES.LOAD_SERVICE_EXTRA,
    data: {
        extra,
        rootPrice,
        rootTime
    }
})
export const loadServiceSelect = (id, name, time, price) => ({
    type: TYPES.USER_SELECT_SERVICE,
    data: {
        id,
        name,
        time,
        price,
    }
})
export const loadService = (data) => ({
    type: TYPES.LOAD,
    data: data
})

export const loadServiceReq = () => {
    return dispatch => {

        data().then(res => dispatch(loadService(res.data)))
    }
}
export const loadServiceItem = (data) => ({
    type: TYPES.LOAD_SERVICE_ITEM,
    data: data
})
export const loadServiceItemReq = (categoryId) => {
    return dispatch => {
        dataServiceItem(categoryId).then(res => dispatch(loadServiceItem(res.data)))
    }
}