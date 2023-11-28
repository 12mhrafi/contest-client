import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from './useAxiosSecure'

const useWinner = () => {
    const axiosSecure = useAxiosSecure();

    const {data: winners = []} = useQuery({
        queryFn: ["winners"],
        queryFn: async () => {
            const res = await axiosSecure.get("/totalWinners")
            return res.data;
        }
    })

    console.log(winners);

  return winners;
}

export default useWinner