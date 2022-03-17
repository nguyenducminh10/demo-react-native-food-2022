import {GET_FOOD_BANNERS} from '../action/actions'

const initialState = {
    foodBanners: []
}

export const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FOOD_BANNERS:
            return {
                ...state,
                foodBanners: action.payload
            }
        default:
            return state;
    }
}