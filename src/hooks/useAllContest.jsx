import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAllContest = (search) => {
  console.log(search)
  const axiosPublic = useAxiosPublic();

  const {
    data: contests = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/contests?search=${search}`);
      return res.data;
    },
  });
  return [contests, refetch, isLoading];
};

export default useAllContest;
