import { TYPES } from '../contants/index';
const initialState = [];
const loadServiceExtra = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.LOAD_SERVICE_EXTRA:
            state = action.data;

            return state;
        default:
            return state;
    }
}
export default loadServiceExtra;