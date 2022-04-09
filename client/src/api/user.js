import axios from "axios";

const getUsersUrl = "/api/users";
export const getUsers = () => axios.get(getUsersUrl);

// const getUsersUrl = "/api/users";
export const getUser = (userId) => axios.get(`/api/users/${userId}`);

// TODO: login user axios call - WIP
// replaces fetch("/api/login", requestOptions)
const loginUrl = "/api/login";
export const login = (data) => axios.post(loginUrl, data);

// TODO: signup user axios call - WIP
// replaces fetch("/api/users", requestOptions)
const signUpUrl = "/api/users";
export const signUp = (data) => axios.post(signUpUrl, data);
