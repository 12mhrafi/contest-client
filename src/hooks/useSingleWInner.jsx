import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosSecure from './useAxiosSecure';

const useSingleWInner = () => {
    const axiosSecure = useAxiosSecure();
    const {data: winnerContest = []} = useQuery({
        queryKey: ["winnerContest"],
        queryFn: async() => {
            const res = await axiosSecure.get("/contestWinner")
            return  res.data;
        }
      })
      
  return winnerContest;
}

export default useSingleWInner