import axios from "axios";

// Client dành cho API khác (ví dụ baseURL khác)
export const httpJsonPlaceholderClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL_JSON_PLACEHOLDER,
});

const get = async (pathname, config) => {
  const response = await httpJsonPlaceholderClient.get(pathname, config);
  return response.data;
};

const post = async (pathname, data, config) => {
  const response = await httpJsonPlaceholderClient.post(pathname, data, config);
  return response.data;
};

const put = async (pathname, data, config) => {
  const response = await httpJsonPlaceholderClient.put(pathname, data, config);
  return response.data;
};

const patch = async (pathname, data, config) => {
  const response = await httpJsonPlaceholderClient.patch(
    pathname,
    data,
    config
  );
  return response.data;
};

const del = async (pathname, config) => {
  const response = await httpJsonPlaceholderClient.delete(pathname, config);
  return response.data;
};

const httpOther = { get, post, put, patch, del };

export default httpOther;

/**
 * Usage:
 * import httpOther from "@/utils/httpOther";
 * const data = await httpOther.get('/path');
 *
 * Notes:
 * - Replace baseURL with the actual other API endpoint.
 * - If you need access to full axios response (headers, status), import httpJsonPlaceholderClient.
 */
