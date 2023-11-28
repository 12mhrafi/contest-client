import React from "react";
import useWinner from "../../../hooks/useWinner";
import WinnerCard from "./WinnerCard";

const Winners = () => {
  const winners = useWinner();
  return (
    <div>
      {winners.map((winner) => (
        <WinnerCard winner={winner} key={winner._id}></WinnerCard>
      ))}
    </div>
  );
};

export default Winners;
