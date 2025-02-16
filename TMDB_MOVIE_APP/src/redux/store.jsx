import {AuthReducer} from "./AuthReducer"
import { wishlistReducer } from "./WishlistReducer"
import { MovieReducer } from "./MovieReducer"
import { configureStore } from "@reduxjs/toolkit"


export const store = configureStore({
    reducer : {
        movie : MovieReducer , 
        auth : AuthReducer , 
        wishlist : wishlistReducer
    },
    devTools: import.meta.env.MODE !== "production"

})