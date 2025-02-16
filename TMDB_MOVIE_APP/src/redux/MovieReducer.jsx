import { ADD_FETCHED_MOVIES,  NEXT_PAGE, PREVIOU_PAGE } from "./movieAction";

const initialState = {
  movies: [],
  filteredMovies : []  ,
  page : 1 , 
};

export const MovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FETCHED_MOVIES : 
    return {...state , movies : payload , filteredMovies : payload}
    case NEXT_PAGE :
      return {...state , page : state.page + 1}
    case PREVIOU_PAGE : 
    return {...state , page : state.page - 1}
    default:
      return state;
  }
};
