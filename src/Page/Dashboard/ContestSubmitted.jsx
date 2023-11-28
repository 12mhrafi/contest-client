import { useQuery } from "@tanstack/react-query";

import { Button, Table } from "flowbite-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
const ContestSubmitted = () => {
  const axiosSecure = useAxiosSecure();
  const { data: contestInfo = [], refetch } = useQuery({
    queryKey: ["registeredData"],
    queryFn: async () => {
      const result = await axiosSecure.get(
        "https://contest-server.vercel.app/registerdContests"
      );

      return result?.data;
    },
  });

  const handleWinner = (id,status) => {
    axiosSecure.patch(`/payment/${id}`).then((res) => {
   
         if(status==="won"){
          console.log(res.status)
         return toast.success("Already Declared!")
      }
      if (res) {
        console.log(res)
        refetch();
        toast.success("Winner is Declared!");
        
      }
    });
  };

  return (
    <div>
      <div className=" container mx-auto  overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Contest Name</Table.HeadCell>
            <Table.HeadCell>contestDeadline</Table.HeadCell>
            <Table.HeadCell>contestTypes</Table.HeadCell>
            <Table.HeadCell>price money</Table.HeadCell>
            <Table.HeadCell>participant Name</Table.HeadCell>
            <Table.HeadCell>task Name</Table.HeadCell>
            <Table.HeadCell>Winner</Table.HeadCell>
            <Table.HeadCell>winner declare</Table.HeadCell>
          </Table.Head>

          {contestInfo?.map((item, index) => (
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
                <Table.Cell>{item?.name || "username"}</Table.Cell>
                <Table.Cell> {item.taskSubmission}</Table.Cell>
                <Table.Cell>
                  {" "}
                  {item.status === "won" ? (
                    <span className="text-green-500 font-semibold text-lg">
                      won
                    </span>
                  ) : (
                    <span>Pending</span>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleWinner(item._id,item.status)}>Declare to win</Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ContestSubmitted;
