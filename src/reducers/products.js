import { actionTypes } from '../actions/types';

//Products Reducer
const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
    switch (action.type) {
        case actionTypes.REMOVE_PRODUCT:
            return state.filter(({id}) => id !== action.id);
        case actionTypes.SET_PRODUCTS:
            return action.products;
        default:
            return state;
    }
};