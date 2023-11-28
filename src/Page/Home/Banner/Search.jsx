import React, { useState } from "react";
import useAllContest from "../../../hooks/useAllContest";

const Search = () => {
  const [search, setSearch] = useState("");
  const [contests, refetch, isLoading] = useAllContest(search);
  console.log(search);
  const handleSearch = (e) => {
    e.preventDefault();

    const searchContest = e.target.search.value;

    setSearch(searchContest);
  };

  return (
    <div className="md:w-[60%] px-4 text-center">
      <h2 className="text-5xl text-gray-300 md:text-6xl font-bold">
      "Skill Showdown: Where Champions Rise, and Challenges Thrive!"
      </h2>
      <p className="text-gray-200 mt-7">
      Dive into the heart of excitement and showcase your prowess at Contest Platform, the ultimate destination for thrilling online contests. Unleash your talents, compete with like-minded individuals, and emerge victorious in a myriad of challenges designed to test your skills.
      </p>
      <div>
        <form onSubmit={handleSearch}>
          <div className="relative  mt-6">
            <input
              type="text"
              name="search"
              className=" mt-4 shadow-xl  shadow-inherit border-none outline-none rounded-full py-5 px-10  w-[80%] md:w-full "
              placeholder="Search contest such as business,medical etc."
            />
            <input
             
              type="submit"
              value="search"
              className="btn-all py-5  px-10 rounded-r-full right-0 bottom-0 absolute"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
