import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import useContest from "../../hooks/useContest";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AddedContest = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const user = useAuth();
  // console.log(user.email);

  const { data: contest = [] } = useQuery({
    queryKey: ["contests", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/contestByEmail?email=${user?.email}`);
      return res.data;
    },
  });


  const handleDelete = (id,approve) => {
    if(approve){
      toast.success("approve contest you can't delete")
      return;
    }
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        axiosSecure.delete(`/contests/admin/${id}`).then((res) => {
          toast.success("deleted");
          console.log(id)
        });
      }
    })
 
  };


  const hadleUpdate = () => {
    toast.success("Approved post you can't edit!")
  }

  return (
    <div className="overflow-x-auto container mx-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Contest Name</Table.HeadCell>
          <Table.HeadCell>priceMoney</Table.HeadCell>
          <Table.HeadCell>Eamil</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
          <Table.HeadCell>Edit</Table.HeadCell>
          <Table.HeadCell>Link</Table.HeadCell>
        </Table.Head>
        {contest.map((item, index) => (
          <Table.Body key={item._id} className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.contestName}
              </Table.Cell>
              <Table.Cell>${item.priceMoney}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>
                {item.status === "approved" ? (
                  <span className="text-green-600 font-semibold">Approved</span>
                ) : (
                  <span>Pending</span>
                )}
              </Table.Cell>

              <Table.Cell>
                <Button
                  onClick={() => handleDelete(item._id,item.status === "approved")}
                  color="failure"
                  className=""
                >
                  Delete
                </Button>
              </Table.Cell>
              <Table.Cell>
                  {
                    item.status === "approved" ? <div onClick={hadleUpdate}><Button>Edit</Button></div>
                    :
                    <Link to={`/dashboard/updateContest/${item._id}`}>
                    <Button
                    
                    color="success"
                    className=""
                  >
                    Edit
                  </Button></Link>
                  }
              </Table.Cell>
              <Table.Cell>
                <Link to="/dashboard/submittedContest">
                  
                  <Button>Submission</Button>
                </Link>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default AddedContest;
