import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <div className="w-1/6 bg-gray-200s backdrop-blur-sm fixed top-[70px] left-0 h-full border-r-2 border-slate-500">
      <ul className="p-4">
        <li className="mb-2">
          <NavLink
            to="/dashboard"
            className="w-full py-2 px-4 bg-whitev backdrop-blur-lg rounded-lg border border-slate-500 shadow hover:bg-slate-300 block text-left"
            activeClassName="bg-gray-100"
          >
            Dashboard
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="#"
            className="w-full py-2 px-4 backdrop-blur-lg rounded-lg border border-slate-500 shadow hover:bg-slate-300 block text-left"
            activeClassName="bg-gray-100"
          >
            Tasks
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="#"
            className="w-full py-2 px-4 backdrop-blur-lg rounded-lg border border-slate-500 shadow hover:bg-slate-300 block text-left"
            activeClassName="bg-gray-100"
          >
            Users
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="#"
            className="w-full py-2 px-4 backdrop-blur-lg rounded-lg border border-slate-500 shadow hover:bg-slate-300 block text-left"
            activeClassName="bg-gray-100"
          >
            Profile
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="#"
            className="w-full py-2 px-4 backdrop-blur-lg rounded-lg border border-slate-500 shadow hover:bg-slate-300 block text-left"
            activeClassName="bg-gray-100"
          >
            Setting
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="#"
            className="w-full py-2 px-4 backdrop-blur-lg rounded-lg border border-slate-500 shadow hover:bg-slate-300 block text-left"
            activeClassName="bg-gray-100"
          >
            Advance
          </NavLink>
        </li>
        <br />
        <br />
        <li className="mb-2">
          <div
            onClick={handleLogout}
            className="w-full cursor-pointer py-2 px-4 backdrop-blur-lg rounded-lg border border-slate-500 shadow hover:bg-slate-300 block text-left"
            activeClassName="bg-gray-100"
          >
            Log Out
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
