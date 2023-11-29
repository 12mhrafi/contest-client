import React from 'react'
import axios from "axios"
const axiosPublic = axios.create({
    baseURL:"https://contest-server.vercel.app/"
})
const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic