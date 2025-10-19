import axios from "axios";
import { toast } from "react-toastify";

const apiClient = axios.create({
  baseURL: 'https://nest.navaxcollege.com/api',
  timeout: 120000,
});


apiClient.interceptors.response.use(function onFulfilled(response) {
  return response.data;
}, function onRejected(error) {

  if (error.response) {
    if (error.response.status === 400) {
      toast.error('🦄 The submitted parameters are invalid');
    } else if (error.response.status === 401) {
      toast.error('🦄 Please log in');
    } else if (error.response.status === 403) {
      toast.error('🦄 You do not have access to this resource');
    } else if (error.response.status === 404) {
      toast.error('🦄 The requested resource was not found');
    } else if (error.response.status === 500) {
      toast.error('🦄 500 Internal Server Error');
    } else {
      toast.error('🦄 An error occurred. Please try again');
    }
  } else if (error.request) {
    toast.error('🦄 Unable to connect to the server');
  } else {
    toast.error('🦄 Unknown error occurred');
  }

  return Promise.reject(error);
});


export default apiClient;