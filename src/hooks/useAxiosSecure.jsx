import axios from 'axios';
import React from 'react'
const axiosSecure = axios.create({
  baseURL:"https://contest-server.vercel.app/"
})
const useAxiosSecure = () => {
  return axiosSecure;
}

export default useAxiosSecure;