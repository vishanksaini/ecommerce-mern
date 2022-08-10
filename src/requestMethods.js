import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzQzMGRiYWM2MjVmMGMwYzJlODBhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTU0MTQ3NSwiZXhwIjoxNjYxMjY5NDc1fQ.ZjVC7X8D3VIGXiE3aC7fU6OMVUJ8T7DafHFeu08OR7Y";
// console.log(
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser)
//     .accessToken
// );

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
