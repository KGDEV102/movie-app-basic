import axios from 'axios';
export const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
     headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                },

})

// Interceptor request (trước khi gửi đi)
request.interceptors.request.use(
  (config) => {
    // Ví dụ: thêm log
    console.log("Request:", config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor response (sau khi nhận)
request.interceptors.response.use(
  (response) => response.data, // trả về data luôn
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);
export const get = async(path, option = {}) => {
    const res = await request.get(path, option);
    return res;
}
export default request;