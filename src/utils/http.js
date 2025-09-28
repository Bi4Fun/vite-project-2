import axios from "axios";

export const httpClient = axios.create({
  //   baseURL: "https://jsonplaceholder.typicode.com",
  baseURL: "https://api01.f8team.dev/api",
});

//ghi đè phương thức rồi .data của axios để tránh code: respone.data.data
//Nguyên do: thường API sẽ là object{status, data}. Mà axios cũng có một phương thức get có .data => nếu dùng sẽ thành respone.data.data (.data đầu tiên là mặc định của axios còn .data tiếp theo mới là data của API)
const get = async (pathname, config) => {
  const response = await httpClient.get(pathname, config);
  return response.data;
};

const post = async (pathname, data, config) => {
  const response = await httpClient.post(pathname, data, config);
  return response.data;
};

const put = async (pathname, data, config) => {
  const response = await httpClient.put(pathname, data, config);
  return response.data;
};

const patch = async (pathname, data, config) => {
  const response = await httpClient.patch(pathname, data, config);
  return response.data;
};

const del = async (pathname, config) => {
  const response = await httpClient.del(pathname, config);
  return response.data;
};

const http = { get, post, put, patch, del };

export default http;
