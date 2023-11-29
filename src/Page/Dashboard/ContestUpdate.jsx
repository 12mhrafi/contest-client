import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Select,
  Textarea,
  Label,
  FileInput,
  TextInput,
} from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useLoaderData, useLocation,useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
// imgbb key
const image_hosting_key = "c6d13d6c5dbef30cef50bb2073a54fe8";
// imgbb api
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ContestUpdate = () => {
 
  // received according to id;
  const singleContest = useLoaderData();


  const {
    _id,
    contestName,
    contestPrice,
    description,
    image,
    priceMoney,
    participants,
    contestTypes,
    taskSubmission,
    contestDeadline,
    email,
  
  } = singleContest;


 const approve = status;
 

  // formik hook
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // console.log(data);
    // taking photo from local storage
    const imageFile = { image: data.image[0] };
    // host to imgbb
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(res.data.data.display_url)
   

    if (res.data.success) {
      const updateData = {
        contestName: data.contestName,
        contestPrice: data.contestPrice,
        description: data.description,
        image: res.data.data.display_url,
        priceMoney: data.priceMoney,
        contestTypes: data.contestTypes,
        taskSubmission: data.taskSubmission,
        contestDeadline: data.contestDeadline,
      };
      // console.log(updateData)
   
      axiosSecure.put(`/updateContest/${_id}`,updateData)
      .then(r => {
        if(r.data.modifiedCount > 0){
      
          toast.success("Successfully update!")
          navigate(location?.state ? location?.state : "/")
        }
      })
      .catch(err => {
        console.log(err)
      })

    }
  };
  return (
    <div>
      <div>
        <SectionTitle heading={"Add Item"}></SectionTitle>
        <div className="flex items-center container mx-auto px-4 justify-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full md:w-[60%]"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Contest name" value="Contest name" />
              </div>
              <TextInput
                defaultValue={contestName}
                {...register("contestName", { required: true })}
                type="text"
                placeholder="Contest name"
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="contestPrice" value="contestPrice" />
              </div>
              <TextInput
                defaultValue={contestPrice}
                {...register("contestPrice", { required: true })}
                type="number"
                placeholder="contestPrice"
                shadow
              />
            </div>
            <div className="max-w-full">
              <div className="mb-2 block">
                <Label htmlFor="contest types" value="Contest Types" />
              </div>
              <Select
                defaultValue={contestTypes}
                {...register("contestTypes", { required: true })}
                required
              >
                <option disabled defaultValue="selected">
                  Select a contest Type
                </option>
                <option value="business">Business Contest</option>
                <option value="medical">Medical Contest</option>{" "}
                <option value="article">Article Writing</option>
                <option value="gaming">Gaming Contest</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="priceMoney" value="priceMoney" />
              </div>
              <TextInput
                defaultValue={priceMoney}
                {...register("priceMoney", { required: true })}
                placeholder="priceMoney"
                type="number"
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Task Submission" value="Task Submission" />
              </div>
              <TextInput
                defaultValue={taskSubmission}
                {...register("taskSubmission", { required: true })}
                placeholder="taskSubmission"
                type="text"
                shadow
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="contestDeadline" value="contestDeadline" />
              </div>
              <TextInput
                defaultValue={contestDeadline}
                {...register("contestDeadline", { required: true })}
                placeholder="contestDeadline"
                type="date"
                shadow
              />
            </div>

            <div className="max-w-full">
              <div className="mb-2 block">
                <Label htmlFor="Description" value="Description" />
              </div>
              <Textarea
                defaultValue={description}
                {...register("description", { required: true })}
                placeholder="Description"
                rows={4}
              />
            </div>
            <div id="fileUpload" className="max-w-full">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Upload file" />
              </div>
              <div>
                <img
                  className="w-20 mb-4 rounded-md h-20 object-cover"
                  src={image}
                  alt=""
                />
              </div>
              <FileInput {...register("image", {required: true})} id="file" />
            </div>
            <Button type="submit">Update Contest</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContestUpdate;
