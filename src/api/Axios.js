import axios from "axios";
// import { getAccessToken } from "../api/Cookie";

export const axiosGet = async (url) => {
  return axios.get(url);
};

// export const axiosGet = async (url) => {
//   return axios.get(url, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + getAccessToken(),
//     },
//   });
// };

// export const axiosPost = async (url, payload) => {
//   return axios.post(url, payload, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + getAccessToken(),
//     },
//   });
// };

// export const axiosFormPost = async (url, formData) => {
//   return axios.post(url, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: "Bearer " + getAccessToken(),
//     },
//   });
// };

// export const axiosPut = async (url, payload) => {
//   return axios.put(url, payload, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + getAccessToken(),
//     },
//   });
// };

// export const axiosFormPut = async (url, formData) => {
//   return axios.put(url, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: "Bearer " + getAccessToken(),
//     },
//   });
// };

// export const axiosDelete = async (url) => {
//   return axios.delete(url, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + getAccessToken(),
//     },
//   });
// };
