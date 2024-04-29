import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { LiaFolderOpenSolid } from "react-icons/lia";
import { HiOutlineUser } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";

import { Link } from "react-router-dom";
const Sidebar = () => {
  const side = [
    {
      id: "1",
      icon: <BsGraphUpArrow size={20} />,
      title: "Dashboard",
      link: "/adminPanel",
    },
    {
      id: "2",
      icon: <CgNotes size={20} />,
      title: "Notices",
      link: "/adminPanel/notice",
    },
    {
      id: "3",
      icon: <LiaFolderOpenSolid size={20} />,
      title: "Add Users",
      link: "/adminPanel/addUser",
    },
    {
      id: "4",
      icon: <HiOutlineUser size={20} />,
      title: "All Users",
      link: "/adminPanel/users",
    },
    
    {
      id: "8",
      icon: <FiSettings size={20} />,
      title: "Settings",
      link: "/admin/settings",
    },
    
  ];
  return (
    <div className="h-screen shadow-md p-3 bg-blue-500">
      <div className="">
        {side.map((item) => {
          return (
            <Link key={item.id} to={item.link}>
              {" "}
              <div className="p-2 rounded-md text-white font-medium my-2 flex gap-3 hover:bg-blue-700">
                <div>{item.icon}</div>
                <div>{item.title}</div>
              </div>
            </Link>
          );
        })}
        {/* <div className='p-2 rounded-md bg-blue-600 text-white font-medium my-2 flex gap-3'>
                <div><BsGraphUpArrow size={20}/></div>
                <div>Dashboard</div>
            </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
