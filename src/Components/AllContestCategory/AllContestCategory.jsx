import React from "react";
import { Link } from "react-router-dom";

const AllContestCategory = ({ items }) => {
  // const {
  //   contestDeadline,
  //   contestName,
  //   contestPrice,
  //   contestTypes,
  //   description,
  //   email,
  //   image,
  //   participants,
  //   priceMoney,
  //   status,
  //   taskSubmission,
  // } = contestInfo;

  return (
    <div className=" gap-4 mt-10 grid  md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item._id}>
          <div className="bg-gray-100">
            <div>
              <img className="w-full object-cover h-[250px]" src={item.image} alt="" />
            </div>
            <div className="flex mt-6 p-4 flex-col gap-2">
              <h2 className="text-2xl font-semibold">{item.contestName}</h2>
              <p className="text-gray-600">{item.contestTypes}</p>
              <p>{item.description}</p>
            </div>
            <hr className="mt-4" />

            <div className=" flex p-4 justify-between py-3 ">
              <h2 className="text-gray-500">Participants: {item.participants}</h2>
              <div>
                <h2 className="text-gray-500">Prize: ${item.priceMoney} </h2>
              </div>
            </div>
            <div className="p-4">
              <Link to={`/contestDetail/${item._id}`}>
                {" "}
                <button className="btn-all w-full py-2">Details</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllContestCategory;
