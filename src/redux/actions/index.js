import { TYPES } from '../contants/index';
import data from './../api/loadService';
import dataServiceItem from './../api/loadServiceItem';
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