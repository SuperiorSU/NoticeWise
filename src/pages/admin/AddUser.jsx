import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddUser = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [batch, setBatch] = useState("");
  const [role, setRole] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleBatchChange = (e) => {
    setBatch(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newUser;

    
   
      newUser = {
        name: fullName,
        email: email,
        password: password,
        batch: batch,
        role:"student"
      };
    

    try {
      const response = await axios.post(
        "http://127.0.0.1:4000/api/v1/signup", // Update the URL here
        newUser
      );
      console.log(response.data);
      toast.success("User added successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add user");
    }
  };

  return (
    <div className="p-5">
      <div className="py-5 border-2 shadow-sm rounded-md px-4 my-4 bg-white">
        <div className="flex items-center gap-4">
          <div>
            <h3 className="pb-5 text-xl font-semibold text-gray-900">
              Add Student<span className="text-[#ca0019]"></span>
            </h3>
          </div>
          <div className="h-[1px] mb-4 bg-gray-400 w-[70%]"></div>
        </div>
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={handleFullNameChange}
                  className="mt-1 p-3 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="mt-1 p-3 focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="mt-1 bg-gray-200  p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="batch"
                  className="block text-sm font-medium text-gray-700"
                >
                  Batch
                </label>
                <select
                  id="batch"
                  name="batch"
                  value={batch}
                  onChange={handleBatchChange}
                  className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                >
                  <option value="">Select The Batch</option>
                  <option value="The Uniques">The Uniques</option>
                  <option value="Super60">Super60</option>
                  <option value="Academics">Regular Academics</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={handleRoleChange}
                  className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                >
                  <option value="student">Student</option>
                  
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add the user
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
