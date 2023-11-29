import React from "react";
import useContest from "../../hooks/useContest";
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
const ManageContest = () => {
  const [contests, refetch, isLoading] = useContest();
  const axiosSecure = useAxiosSecure();

  const handleApprove = (id) => {
    axiosSecure.patch(`/contests/admin/${id}`).then((res) => {
      toast.success("Successfullt approved!");
      refetch();
      // console.log(res)
    });
  };

  const handleDelete = (id) => {
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
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        axiosSecure.delete(`/contests/admin/${id}`).then(() => {
          toast.success("deleted");
          refetch();
          // console.log(res);
        })
      }
    })

  };

  return (
    <div className="s-top">
      {contests.length}
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Contest Name</Table.HeadCell>
            <Table.HeadCell>status</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          {isLoading && <h2>Loading</h2>}
          {contests.map((item, index) => (
            <Table.Body key={item._id} className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.contestName}
                </Table.Cell>

                <Table.Cell>
                  {" "}
                  {item.status === "approved" ? (
                    <span className="text-green-500 font-semibold">
                      {item.status}
                    </span>
                  ) : (
                    <Button onClick={() => handleApprove(item._id)}>
                      approve
                    </Button>
                  )}{" "}
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <Button
                    onClick={() => handleDelete(item._id)}
                    color="failure"
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageContest;
