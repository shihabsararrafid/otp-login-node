import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GrCircleInformation } from "react-icons/gr";
import { HiOutlineInformationCircle } from "react-icons/hi";
import swal from "sweetalert";
import profile from "./../Images/profile.jpg";
import { AiOutlineCamera } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Register() {
  const showInfo = () => {
    swal(
      "Information",
      "Username contains only [a-z],underscore,[0-9]",
      "info"
    );
  };
  const [file, setFile] = useState(profile);
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const showInfoForPass = () => {
    swal(
      "Information",
      "Password Must be at least 8 lengths with one [a-z],one [A-Z],one [0-9],one [@#&_-]",
      "info"
    );
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center bg-secondary  min-h-[100vh] items-center">
      <form
        className="mt-[28px] p-6 bg-primary border-[1px] shadow-xl rounded-md
        lg:w-[60%]  
        md:w-[80%] sm:w-[90%] w-[100%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl text-secondary my-6 font-semibold uppercase text-center">
          Register{" "}
        </h1>

        {/* Taking the input for profile picture */}
        <div className="flex justify-center my-6">
          <div className="h-[150px] relative w-[150px]">
            <img
              className="rounded-full border-2 border-secondary h-[150px] w-[150px] object-fit"
              src={file}
              alt=""
            />
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleChange}
              accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp"
              className="inputfile w-[.1px] h-[.1px] opacity-0 overflow-hidden absolute z-[-1]"
            />
            <label for="file">
              {" "}
              <sub className="subs absolute bottom-2 right-4 font-features">
                <AiOutlineCamera className="text-2xl text-secondary cursor-pointer"></AiOutlineCamera>
              </sub>
            </label>
            <label htmlFor="image"> </label>
          </div>
        </div>

        {/* Taking Input of First name and last name */}
        <div className="name flex flex-col md:flex-row gap-y-5  justify-between">
          <div className="flex">
            <p className="text-secondary font-semibold w-[100px] mr-2 my-1">
              First Name
            </p>
            <p className="text-secondary font-semibold mr-2">:</p>
            <input
              placeholder="Enter Your First Name"
              type="text"
              className="px-3  w-[70%] lg:w-[210px] rounded-md "
              {...register("firstName", { required: true })}
            />
          </div>
          <div className="flex">
            <p className="text-secondary font-semibold w-[100px] mr-2 my-1">
              Last Name
            </p>
            <p className="text-secondary font-semibold mr-2">:</p>
            <input
              placeholder="Enter Your Last Name"
              type="text"
              className="px-3 lg:w-[210px] w-[70%] rounded-md py-1"
              {...register("lastName", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-5  justify-between">
          {/* Username starts */}
          <div className="userName items-center  flex mt-4">
            <p className="text-secondary font-semibold w-[100px] mr-2 my-1">
              {" "}
              UserName
            </p>
            <p className="text-secondary font-semibold mr-2">:</p>
            <input
              placeholder="User Name"
              type="text"
              className="px-3 py-1 lg:w-[210px] w-[70%] rounded-md "
              {...register("firstName", { required: true })}
            />
            <HiOutlineInformationCircle
              onClick={showInfo}
              className="block ml-2 cursor-pointer text-2xl text-[white]"
            ></HiOutlineInformationCircle>
          </div>
          {/* Date of birth */}
          <div className="email items-center lg:mt-4 flex">
            <p className="text-secondary font-semibold w-[100px] mr-2 my-1">
              {" "}
              BirthDay
            </p>
            <p className="text-secondary font-semibold mr-2">:</p>
            <input
              placeholder="Enter Your First Name"
              type="date"
              className="px-3 py-1 lg:w-[210px] w-[70%] rounded-md "
              {...register("dob", { required: true })}
            />
          </div>
        </div>
        {/* Email */}
        <div className="dob items-center mt-4 flex">
          <p className="text-secondary font-semibold w-[100px] mr-2 my-1">
            {" "}
            Email
          </p>
          <p className="text-secondary font-semibold mr-2">:</p>
          <input
            placeholder="Enter Your Email"
            type="email"
            className="px-3 py-1 lg:w-[210px] w-[70%] rounded-md "
            {...register("email", { required: true })}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-y-5  justify-between">
          {/* Password */}
          <div className="dob items-center mt-4 flex">
            <p className="text-secondary font-semibold w-[100px] mr-2 my-1">
              {" "}
              Password
            </p>
            <p className="text-secondary font-semibold mr-2">:</p>
            <input
              placeholder="Enter Your Password"
              type="email"
              className="px-3 py-1 lg:w-[210px] w-[70%] rounded-md "
              {...register("password", { required: true })}
            />
            <HiOutlineInformationCircle
              onClick={showInfoForPass}
              className="block ml-2 cursor-pointer text-2xl text-[white]"
            ></HiOutlineInformationCircle>
          </div>
          {/* Confirm Password */}
          <div className="dob items-center lg:mt-4 flex">
            <p className="text-secondary font-semibold w-[100px] mr-2 my-1">
              {" "}
              Confirm Pass
            </p>
            <p className="text-secondary font-semibold mr-2">:</p>
            <input
              placeholder="Enter Password Again"
              type="email"
              className="px-3 py-1 lg:w-[210px] w-[70%] rounded-md "
              {...register("confirmPass", { required: true })}
            />
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <p>
            Already Registered?{" "}
            <Link
              to="/login"
              className="text-secondary font-semibold cursor-pointer"
            >
              Login
            </Link>{" "}
          </p>
        </div>
        <div className="w-full flex justify-center">
          <input
            className="w-full mx-auto md:w-[80%] lg:w-[50%] rounded-md cursor-pointer bg-secondary2 duration-200  hover:text-secondary2 text-secondary hover:bg-secondary  font-semibold h-[40px] mt-[30px]"
            value="Register"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
