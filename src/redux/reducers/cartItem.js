import { TYPES } from '../contants/index';
const initialState = [];
const cartItem = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART:
            let newState = [...state];
            console.log(action.data)
            // const index = state.findIndex((item) => item.id === action.data.id);
            // if (index < 0) {
            //     return [...state, action.data]
            // }
            // else {
            //     // newState.splice(index, 1)
            //     return [...newState, action.data];
            // }
        default:
            return state;

    }
}
export default cartItem;