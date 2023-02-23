import React from "react";
import { Link } from "react-router-dom";
import avatar from "./../Assests/profile.png";
import styles from "./../Styles//username.module.css";
const Username = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className={styles.glass}>
        <div>
          <h4 className="text-2xl text-center font-bold">Hello Again!</h4>
          <span className="text-center">
            Explore More By Connecting With Us
          </span>
        </div>
        <div className={styles.profile_img}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className="userName">
          <form>
            <input
              type="text"
              className="border-2 w-[80%] py-2 rounded outline-none px-3"
              name=""
              id=""
              placeholder="Username"
            />
            <button className="mx-2">Let's Go</button>
          </form>
        </div>
        <div>
          <span>
            Not a Member?
            <Link className="text-red-500 font-semibold" to="/register">
              {" "}
              Register Now
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Username;
