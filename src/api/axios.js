import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Accept: "application/json",
  },
});

export default api;
// export const api =