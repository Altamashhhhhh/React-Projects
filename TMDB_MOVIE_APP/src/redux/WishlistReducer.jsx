import { ADD_FETCHED_WISHLIST, ADD_WISHLIST, REMOVE_WISHLIST } from "./WishlistAction"

const initialState = {
    wishlists : []
}

export const wishlistReducer = (state = initialState , {type , payload}) => {
    switch(type){
        case ADD_WISHLIST:
            return {...state , wishlists : [...state.wishlists , payload]}
        case ADD_FETCHED_WISHLIST : 
        return {...state , wishlists : payload}
        case REMOVE_WISHLIST:
            return {...state , wishlists : state.wishlists.filter(movie => movie.id !== payload)}
        default :
        return state 
    }
}