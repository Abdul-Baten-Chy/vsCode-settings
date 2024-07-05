const axios = axios.create({
  // baseURL: 'server-sides-rosy.vercel.app'
  baseURL: "http://localhost:4000",
});

const useBaseUrl = () => {
  return <div></div>;
};

export default useBaseUrl;
