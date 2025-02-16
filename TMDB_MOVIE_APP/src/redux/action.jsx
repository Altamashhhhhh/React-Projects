import axios from "axios";
import { toaster } from "../components/ui/toaster";
import { useNavigate } from "react-router-dom";

export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const CHECK_USER_LOGIN = "CHECK_USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT"
export const checkUserLogin = (payload) => ({type : CHECK_USER_LOGIN , payload})

export const registerUser = (payload) => {
  return async () => {
    try {
      const response = await axios.post(
        "https://movie-redux-5e6d5-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
        payload
      );
      if (response) {
        toaster.create({
          title: "Registration Successfull",
          type: "success",
        });
      }
    } catch (error) {
      console.log(error);
      toaster.create({
        title: "Error Registering New User",
        type: "error",
      });
    }
  };
};

export const loginUser = (payload, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://movie-redux-5e6d5-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
      );
      const users = Object.entries(response.data).map(([id, user]) => ({
        id,
        ...user,
      }));
      const currentUser = users.find(
        (user) => user.username === payload.username
      );
      if (currentUser) {
        if (currentUser.password === payload.password) {
          localStorage.setItem("currentUserId" ,  currentUser.id)
          dispatch({
            type: LOGIN_USER,
            payload: { userId: currentUser.id, isLogged: true },
          });
          toaster.create({type : "success" , title : "Welcome to REDUX MOVIE STORE"})
          navigate("/");
        } else {
          toaster.create({ title: "Password is wrong", type: "error" });
        }
      } else {
        toaster.create({ title: "user not found", type: "error" });
      }
    } catch (error) {
      console.log(error);
      toaster.create({
        title: "Error while login",
        type: "error",
      });
    }
  };
};

export const userLogout = payload => {
  localStorage.removeItem("currentUserId")
  return {type : USER_LOGOUT , payload}
}