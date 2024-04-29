import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
  const [userSign, setUserSign] = useState({
    name: "",
    email: "",
    password: "",
    batch: "",
    role:""

  });
  const changeHandler = (e) => {
    setUserSign({ ...userSign, [e.target.name]: e.target.value });
  };
  return (
    <div className=" flex items-center h-screen justify-center w-full bg-gray-200">
     
      <div className="bg-white shadow-md rounded-lg px-8 py-6 w-80">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-900">
          Sign Up
        </h1>
        <form action="#">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-start"
            >
              User Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={userSign.name}
              onChange={changeHandler}
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-start"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={userSign.email}
              id="email"
              onChange={changeHandler}
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="email address"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 text-start dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={userSign.password}
              id="password"
              onChange={changeHandler}
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your password"
              required
            />
          </div>
          <div className="mb-4">
            <label
              for="countries_disabled"
              
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              onChange={changeHandler}
              name="batch"
              value={userSign.batch}
              id="countries_disabled"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose your Batch</option>
              <option value="Super60">Super60</option>
              <option value="The Uniques">The Uniques</option>
              <option value="Academics">Regular Academics</option>
            </select>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center"></div>
            <Link
              to="/"
              className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Already Have an Account?
            </Link>
          </div>
          <button
            onClick={async (e) => {
              e.preventDefault();
              
              console.log(userSign);
              try {
                const res = await axios.post(
                  "http://127.0.0.1:4000/api/v1/signup",
                  userSign
                );
                console.log(res.data);
                let val = "Account created successfully";
                await toast.success(`${val}`)
                navigate("/")
                

              } catch (error) {
                console.log(error);
                let val = "Something went wrong"
                toast.error(`${val}`);
              }
              setUserSign({
                name: "",
                email: "",
                password: "",
                role: "",
              });
              
            }}
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
