import { TYPES } from '../contants/index';
const initialState = [];
const loadService = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.LOAD:
            state = action.data.data;
            return [...state];
        default:

            return state;
    }
}
export default loadService;