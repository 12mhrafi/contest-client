import React from 'react'
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useUserId = () => {
    const axiosPublic = useAxiosPublic();

    const {data: userId = []}  = useQuery({
        queryKey:["userId"],
        queryFn: async ( ) => {
            const res = await axiosPublic.get("/users")
            return  res.data
        }
    })
    // console.log(userId)
  return userId;
    
}

export default useUserId