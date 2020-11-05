import { TYPES } from '../contants/index';
const initialState = [];
const loadServiceSelect = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.USER_SELECT_SERVICE:
            let newState = [...state];
            const index = state.findIndex((item) => item.id === action.data.id)
            if (index < 0) {
                return [...state, action.data];
            }
            else {
                newState.splice(index, 1)
                return [...newState];
            }

        default:
            return state
    }
}
export default loadServiceSelect;