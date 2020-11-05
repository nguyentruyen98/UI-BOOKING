import { TYPES } from '../contants/index';
const initialState = [];
const loadServiceItem = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.LOAD_SERVICE_ITEM:
            return [...state, ...action.data.data];
        default:
            return state;
    }
}
export default loadServiceItem;