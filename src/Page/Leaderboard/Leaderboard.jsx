import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Button, Table } from "flowbite-react";
import useAllContest from "../../hooks/useAllContest";
const Leaderboard = () => {
  const [contests, refetch, isLoading] = useAllContest();
  return (
    <div className="mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle heading={"Leaderboard"}></SectionTitle>
        <h2 className="mt-5">Top {contests.length} contest of Contest Platform </h2>
        <div className="overflow-x-auto mt-5">
          <Table>
            <Table.Head>
              <Table.HeadCell>No</Table.HeadCell>
              <Table.HeadCell>Contest Name</Table.HeadCell>
              <Table.HeadCell>Participants</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price Money</Table.HeadCell>
              <Table.HeadCell> Contest deadline</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {contests?.map((item, index) => (
              <Table.Body key={item._id} className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.contestName}
                  </Table.Cell>

                  <Table.Cell>
                    <span>{item.participants}</span>
                  </Table.Cell>
                  <Table.Cell>{item.contestTypes}</Table.Cell>
                  <Table.Cell>${item.priceMoney}</Table.Cell>
                  <Table.Cell>{item.contestDeadline}</Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
