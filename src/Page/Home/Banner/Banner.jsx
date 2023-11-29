import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import bannerImg from "../../../../src/assets/images/banner.jpg";
import Search from "./Search";
const Banner = () => {
  return (
    <div className="relative">
      <img
        className=" h-[100vh] w-full md:h-[100vh] object-cover"
        src={bannerImg}
      />
      <div className="top-0 absolute flex flex-col items-center justify-center left-0 right-0 bottom-0 bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]">
        <Search></Search>
      </div>
    </div>
  );
};

export default Banner;
