import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: 'server-sides-rosy.vercel.app'
  baseURL: "https://toy-store-server-psi.vercel.app",
});

const useBaseUrl = () => {
  return axiosPublic;
};

export default useBaseUrl;
