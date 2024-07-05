import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: 'server-sides-rosy.vercel.app'
  baseURL: "http://localhost:4000",
});

const useBaseUrl = () => {
  return axiosPublic;
};

export default useBaseUrl;
