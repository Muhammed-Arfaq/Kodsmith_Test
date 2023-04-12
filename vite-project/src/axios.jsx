import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const adminInstance = axios.create({
  baseURL: "http://127.0.0.1:3500/admin",
});

export const userInstance = axios.create({
  baseURL: "http://127.0.0.1:3500/",
});
