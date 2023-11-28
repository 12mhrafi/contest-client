import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Select,
  Checkbox,
  Textarea,
  Label,
  FileInput,
  TextInput,
} from "flowbite-react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
// imgbb key
const image_hosting_key = "c6d13d6c5dbef30cef50bb2073a54fe8";
// imgbb api
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddContest = () => {
  const user = useAuth();
  //   console.log(user?.email);

  // formik hook
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();

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
    // console.log(res.data);

    if (res.data.success) {
      // menu item to the server with image url
      const contestItem = {
        contestName: data.contestName,
        contestPrice: parseFloat(data.contestPrice),
        description: data.description,
        image: res.data.data.display_url,
        priceMoney: data.priceMoney,
        participants: parseFloat(0),
        contestTypes: data.contestTypes,
        taskSubmission: data.taskSubmission,
        contestDeadline: data.contestDeadline,
        email: user?.email,
      };
      axiosPublic.post("/contests", contestItem).then((result) => {
        console.log(result.data)
        if (result.data.insertedId) {
          toast.success("Inserted!");
        }
      });
    }
    //   console.log(contestItem);
    
  };

  return (
    <div>
      <div>
        <SectionTitle
          heading={"Add Item"}
        ></SectionTitle>
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
                {...register("priceMoney", { required: true })}
                placeholder="priceMoney"
                type="number"
                shadow
              />
            </div>
            <div >
              <div className="mb-2 block">
                <Label htmlFor="Task Submission" value="Task Submission" />
              </div>
              <TextInput 
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
                {...register("description", { required: true })}
                placeholder="Description"
                rows={4}
              />
            </div>
            <div id="fileUpload" className="max-w-full">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Upload file" />
              </div>
              <FileInput {...register("image", { required: true })} id="file" />
            </div>
            <Button type="submit">Add Item</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContest;
