import axiosClient from "./axiosClient";

const LoginApi = {
  login: (data) => {
    const url = "/login";
    return axiosClient.post(url, data);
  },
};
export default LoginApi;
