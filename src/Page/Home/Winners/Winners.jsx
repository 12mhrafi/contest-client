import React from "react";
import useWinner from "../../../hooks/useWinner";
import WinnerCard from "./WinnerCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Winners = () => {
  const winners = useWinner();
  return (
    <div className="container mx-auto px-4">
      <div className="mt-24">
        <SectionTitle heading="Top Winners"></SectionTitle>
      </div>
      <div className="grid gap-6 md:grid-cols-2 mt-10 lg:grid-cols-4">
        {winners.slice(0,10).map((winner) => (
          <WinnerCard winner={winner} key={winner._id}></WinnerCard>
        ))}
      </div>
    </div>
  );
};

export default Winners;
