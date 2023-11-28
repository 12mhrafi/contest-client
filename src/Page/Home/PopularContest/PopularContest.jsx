import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import PopularContestCard from "./PopularContestCard";
import useAllContest from "../../../hooks/useAllContest";
import AllContest from "../../AllContest/AllContest";
import AllContestCategory from "../../../Components/AllContestCategory/AllContestCategory";
const PopularContest = () => {
  const [contests, isLoading] = useAllContest();

  return (
    <div className="container mx-auto px-4 mt-24">
      <SectionTitle heading={"Popular Contest"}></SectionTitle>

      <div>
        <AllContestCategory items={contests.slice(0,5)}></AllContestCategory>
      </div>
    </div>
  );
};

export default PopularContest;
