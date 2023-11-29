import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import { FaUser } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const RegisteredContest = () => {
  const axiosSecure = useAxiosSecure();
  const user = useAuth();

  const { data: registeredData = [] } = useQuery({
    queryKey: ["registeredData"],
    queryFn: async () => {
      const result = await axiosSecure.get(
        `https://contest-server.vercel.app/payment?email=${user?.email}`
      );

      return result?.data;
    },
  });

  console.log(registeredData);

  return (
    <div>
      <div className="overflow-x-auto">
        <Table className="overflow-x-auto">
          <Table.Head>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Contest Name</Table.HeadCell>
            <Table.HeadCell>contestDeadline</Table.HeadCell>
            <Table.HeadCell>contestTypes</Table.HeadCell>
            <Table.HeadCell>price money</Table.HeadCell>
          </Table.Head>

          {registeredData?.map((item, index) => (
            <Table.Body key={item._id} className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.contestName}
                </Table.Cell>

                <Table.Cell>
                  <span className="text-red-500 font-semibold">
                    {item.contestDeadline}
                  </span>
                </Table.Cell>
                <Table.Cell>{item.contestTypes}</Table.Cell>
                <Table.Cell>${item.priceMoney}</Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default RegisteredContest;
