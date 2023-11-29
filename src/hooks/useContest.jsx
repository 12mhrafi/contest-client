import React from 'react'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useContest = () => {
    const axiosSecure = useAxiosSecure();
    const user = useAuth();
    const {data: contests = [], refetch,isLoading}  = useQuery({
        queryKey:["contests"],
        queryFn: async ( ) => {
            const res = await axiosSecure.get("/dashboard/contests")
            return  res.data
        }
    })
    
  return [contests,refetch,isLoading];
}

export default useContest;

