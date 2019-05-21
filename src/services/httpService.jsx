import axios from 'axios'
import { toast } from 'react-toastify'

axios.interceptors.response.use(null, error =>{
    const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    //logger.log(error);
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error)
})

export function setHeaderJWT(jwt){
  console.log("Intra")
  if(jwt) {
    return axios.defaults.headers.common["x-auth-token"] = jwt
  }
  else {
    return null
  }
    
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setHeaderJWT
}