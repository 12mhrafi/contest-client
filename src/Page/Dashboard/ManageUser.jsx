import React from 'react'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query';
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import { FaUser } from "react-icons/fa";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'
const ManageUser = () => {
    const axiosSecure= useAxiosSecure();

    const {data: users = [],refetch} = useQuery({
        queryKey:["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })


    const isAdmin = true;
    const hadleMakeAdmin = (user) => {
      
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'upadted!',
            'Admin make success.',
            'success'
            
          )
          axiosSecure.patch(`/users/admin/${user._id}`)
          .then(res => {
              console.log(res.data)
              if(res.data.modifiedCount > 0){
                  toast.success("Admin make success")
                  refetch()
              }
          })
        }
      })

     
    }

  return (
    <div>
    
    <div className=" overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>User Name</Table.HeadCell>
          <Table.HeadCell>Eamil</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
     
        </Table.Head>
        {users.map((user, index) => (
            
          <Table.Body key={user._id} className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {user.name}
              </Table.Cell>

              <Table.Cell>{user.email}</Table.Cell>
            
                {
                    isAdmin ?
                    <div>
                            {
                    user.role === "admin" ? "Admin"
                    :
                    <button onClick={() => hadleMakeAdmin(user)}>make admin</button>
                }
                    </div>
                    :

                    ''


                }
      
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
    </div>
  )
}

export default ManageUser