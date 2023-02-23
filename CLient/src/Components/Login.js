import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
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
        className="mt-[28px] p-6 bg-primary border-[1px] shadow-xl rounded-md w-[25%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-[white] font-semibold text-4xl">
          LOGIN
        </h1>
        <p className="my-[6px] text-[white]">Email:</p>
        <input
          placeholder="Enter Your Name"
          className=" w-[95%] px-3 mx-2 rounded-md bg-[white] text-primary outline-none h-[36px]"
          {...register("email", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.email && (
          <p className="text-secondary2 font-semibold">
            This field is required
          </p>
        )}
        <p className="mt-[16px] text-[white] mb-[6px]">Password:</p>
        <input
          type="password"
          placeholder="Enter Your Password"
          className="w-[95%] mx-2 px-3 rounded-md bg-[white] text-primary outline-none h-[36px]"
          {...register("password", {
            required: true,
          })}
        />
        {errors?.password?.type === "required" && (
          <p className="text-secondary2 font-semibold">
            This field is required
          </p>
        )}

        <p className="flex my-[14px] justify-between">
          <span className="text-secondary2 cursor-pointer font-semibold">
            Forgot Password ?
          </span>
          <span className="text-[white]">
            {" "}
            <input
              className="accent-secondary2 "
              type="checkbox"
              name="remember me"
              id=""
            />
            Remember Me
          </span>
        </p>
        <input
          className="w-full rounded-md cursor-pointer bg-secondary2 duration-200  hover:text-secondary2 text-secondary hover:bg-secondary  font-semibold h-[40px] mt-[30px]"
          value="Sign In"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Login;
