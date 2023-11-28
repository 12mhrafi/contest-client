import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from './useAxiosSecure'
import useAuth from './useAuth'

const useAdmin = () => {
  const user = useAuth();
  const email = user.email;
  console.log(email);

    const axiosSecure = useAxiosSecure();

    const {data: isAdmin = []} = useQuery({
        queryKey:["isAdmin"],
        queryFn: async () => {
           const res = await axiosSecure.get("/users");
           return res.data;
        }
    })

    const admin = isAdmin.find(adm => adm.role === "admin" && adm.email === email);
      console.log(admin)
    if(admin == undefined){
        return false;
      }else{
        return true;
      }
      
}

export default useAdmin