import React from "react";
import { Button, Checkbox, Select, Label, TextInput } from "flowbite-react";

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import joinImg from "../../../../src/assets/images/battle.webp";
const Join = () => {
  return (
    <div className="bg-gray-200  md:px-20 py-16 md:py-20 mt-24 container mx-auto">
      <div className="grid justify-center items-center md:grid-cols-2 grid-cols-1">
        <div className="p-8">
          <h2 className="text-3xl font-semibold">Never miss a battle!</h2>
          <p className="my-5">
            {" "}
            Subscribe to the Writing Battle monthly newsletter. We highlight
            discussions, writers, and short stories from our community and let
            you know when a battle is imminent. Emails are never shared with a
            third party.
          </p>
          <form className="flex mt-10 max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput type="text" placeholder="name" required shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput type="email" placeholder="email" required shadow />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="hear" value="Where did you hear about us?" />
              </div>
              <Select required>
                <option>Facebook</option>
                <option>Twitter</option>
                <option>Instagram</option>
                <option>Youtube</option>
              </Select>
            </div>

            <button className="bg-gray-500 py-2 text-gray-100" type="submit">
              Joing mailing list{" "}
            </button>
          </form>
        </div>
        <div className="h-[70%] flex justify-center">
          <img className="h-[300px] " src={joinImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Join;
