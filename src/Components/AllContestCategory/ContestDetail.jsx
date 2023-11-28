import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import moment from "moment";
import useWinner from "../../hooks/useWinner";
const ContestDetail = () => {
  const location = useLocation();
  const contestDetails = useLoaderData();
  const winners = useWinner();
  const {
    _id,
    contestDeadline,
    contestName,
    contestPrice,
    contestTypes,
    description,
    email,
    image,
    participants,
    priceMoney,
    status,
    taskSubmission,
  } = contestDetails;

  // countdown timer
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMinutes] = useState(0);
  const [secs, setSeconds] = useState(0);

  const deadline = contestDeadline;

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);
  // countdown timer

  // console.log(contestDetails);
  return (
    <div className=" s-top container mx-auto px-4">
      <div className="grid md:grid-cols-2 md:gap-10">
        <div className="order-2 md:order-1 mt-5 md:mt-0">
          <img src={image} alt="" />
          <div className="mt-4 ">
           <h2 className="text-3xl mb-3 font-semibold"> Details:</h2>
            {description}
          </div>
          <div>
           <h2 className="text-3xl mb-3 font-semibold mt-4"> Recent Winners</h2>
           <div>
                <h2>Winners : {winners.length}</h2>

           </div>
          </div>
        </div>
  
        <div className="flex mt-5 order-1 md:order-2 md:mt-0 flex-col gap-5">
          <h2 className="text-2xl font-semibold">
           {contestName}
          </h2>
          <hr />
          <div>
            <p className="text-4xl mb-2 font-semibold">${priceMoney}</p>
            <p>Prize money</p>
          </div>
          <hr />
          <div>Participants : {participants}</div>
          <hr />
          <div>
            <div className="grid grid-cols-4">
              <div className=" flex flex-col">
                <span className="text-3xl font-semibold">
                  {days < 10 ? "0" + days : days}
                </span>
                <span>Days</span>
              </div>

              <div className=" flex flex-col">
                <span className="text-3xl font-semibold">
                  {hours < 10 ? "0" + hours : hours}
                </span>
                <span>Hours</span>
              </div>

              <div className=" flex flex-col">
                <span className="text-3xl font-semibold">
                  {" "}
                  {mins < 10 ? "0" + mins : mins}
                </span>
                <span>Mins</span>
              </div>

              <div className=" flex flex-col">
                {" "}
                <span className="text-3xl font-semibold">
                  {secs < 10 ? "0" + secs : secs}
                </span>
                <span>Sec</span>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <span> Closes at {contestDeadline}</span>
          </div>
          <div>
            <Link state={location.pathname} to={`/payment/${_id}`}>
              <button className="btn-all w-full py-2"> Join Now </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestDetail;
