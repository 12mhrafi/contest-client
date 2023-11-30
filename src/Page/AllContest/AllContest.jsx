import React, { useEffect } from "react";
import {
  HiAdjustments,
  HiArrowCircleRight,
  HiClipboardList,
  HiUserCircle,
} from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Tabs } from "flowbite-react";
import useAllContest from "../../hooks/useAllContest";
import AllContestCategory from "../../Components/AllContestCategory/AllContestCategory";

const AllContest = () => {
  const [allContest, refetch, isLoading] = useAllContest();
  console.log(allContest);
  const gaming = allContest.filter(
    (contest) => contest.contestTypes === "gaming"
  );
  const medical = allContest.filter(
    (contest) => contest.contestTypes === "medical"
  );
  const article = allContest.filter(
    (contest) => contest.contestTypes === "article"
  );
  const business = allContest.filter(
    (contest) => contest.contestTypes === "business"
  );

  return (
    <div>
      <div
        role="tablist"
        className="tabs s-top bg-transparent container mx-auto px-4  tabs-boxed "
      >
        <input
          type="radio"
          name="my_tabs_1"
          role=""
          className="tab mr-4"
          aria-label="Article"
        />
        <div role="" className="tab-content">
          <AllContestCategory items={article}></AllContestCategory>
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role=""
          className="tab mr-4"
          aria-label="Medical"
          checked
        />
        <div role="tabpanel" className="tab-content">
          <AllContestCategory items={medical}></AllContestCategory>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role=""
          className="tab mr-4"
          aria-label="Gaming"
        />
        <div role="" className="tab-content">
          {" "}
          <AllContestCategory items={gaming}></AllContestCategory>{" "}
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role=""
          className="tab mr-4"
          aria-label="Business"
        />
        <div role="tabpanel" className="tab-content">
          <AllContestCategory items={business}></AllContestCategory>
        </div>
      </div>
    </div>
  );
};

export default AllContest;
