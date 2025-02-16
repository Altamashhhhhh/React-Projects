import axios from "axios";
import { toaster } from "../components/ui/toaster";
export const ADD_WISHLIST = "ADD_WISHLIST";
export const ADD_FETCHED_WISHLIST = "ADD_FETCHED_WISHLIST";
export const REMOVE_WISHLIST = "REMOVE_WISHLIST";
export const addWishlist = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://movie-redux-5e6d5-default-rtdb.asia-southeast1.firebasedatabase.app/wishlist.json",
        payload
      );
      if (response.status == 200) {
        dispatch({ type: ADD_WISHLIST, payload });
        toaster.create({
          title: "Successfully Added to wishlist",
          type: "success",
        });
      }
    } catch (error) {
      toaster.create({ type: "error", title: "error adding to wishlist" });
      console.log(error);
    }
  };
};

export const addFetchedWishlist = (payload) => ({
  type: ADD_FETCHED_WISHLIST,
  payload,
});
export const removeFromWishlist = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `https://movie-redux-5e6d5-default-rtdb.asia-southeast1.firebasedatabase.app/wishlist/${id}.json`
      );
      toaster.create({
        title: "Movie Removed From Wishlists",
        type: "success",
      });
      dispatch({ type: REMOVE_WISHLIST, payload: id });
    } catch (error) {
      toaster.create({ type: "error", title: "error removing from wishlist" });
      console.log(error);
    }
  };
};
