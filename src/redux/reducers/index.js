import { combineReducers } from 'redux';
import loadService from './loadService';
import loadServiceItem from './loadServiceItem';
import loadServiceExtra from './loadServiceExtra';
import loadServiceSelect from './loadServiceSelect';
import cartItem from './cartItem';

const rootReducer = combineReducers({
    loadService,
    loadServiceItem,
    loadServiceExtra,
    loadServiceSelect,
    cartItem

})
export default rootReducer;
