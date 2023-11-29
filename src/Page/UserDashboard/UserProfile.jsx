import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Chart } from "react-google-charts";

const UserProfile = () => {
  const axiosSecure = useAxiosSecure();
  const user = useAuth();

  const { data: registeredData = [] } = useQuery({
    queryKey: ["registeredData"],
    queryFn: async () => {
      const result = await axiosSecure.get(
        `http://localhost:5000/payment?email=${user?.email}`
      );

      return result?.data;
    },
  });

  //   console.log(registeredData);
  const totalWinningContest = registeredData.filter((w) => w.status === "won");
  const winPercetage = (
    (totalWinningContest.length * 100) /
    registeredData.length
  ).toFixed(2);
  const lost = registeredData.length - totalWinningContest.length;

//  pie chart 

const data = [
  ["contest", "won"],
  ["lost", lost ],
  ["win",totalWinningContest.length]

// Below limit.
];

const options = {
  title: "Popularity of Types of Pizza",
  sliceVisibilityThreshold: 0.2, // 20%
};



  return (
    <div >
      <div className="w-full">
        <div className="stats shadow md:flex-row flex items-center justify-center flex-col ">
          <div className="stat">
            <div className="stat-figure text-primary"></div>
            <div className="stat-title">Praticpate</div>
            <div className="stat-value "> {registeredData.length}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-title">Won</div>
            <div className="stat-value text-secondary">
              {totalWinningContest.length}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
            <div className="stat-value">{winPercetage}%</div>
            <div className="stat-title">Contest done</div>
            <div className="stat-desc text-">{lost} Contest lost</div>
          </div>
        </div>
      </div>

      <div>
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
      </div>
    </div>
  );
};

export default UserProfile;
