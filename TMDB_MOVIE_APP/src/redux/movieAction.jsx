export const ADD_FETCHED_MOVIES = "ADD_FETCHED_MOVIES";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREVIOU_PAGE = "PREVIOU_PAGE";
export const addFetchedMovies = (payload) => ({
  type: ADD_FETCHED_MOVIES,
  payload,
});
export const nextPage = () => ({ type: NEXT_PAGE  });
export const previousPage = () => ({ type: PREVIOU_PAGE });
