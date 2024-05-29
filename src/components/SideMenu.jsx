// SideMenu.js
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <div className="w-80 bg-gray-200 fixed top-0 left-0 h-full">
      <ul className="p-4">
        <li className="mb-2">
          <NavLink
            to="/dashboard"
            className="w-full py-2 px-4 bg-white rounded-lg shadow hover:bg-gray-100 block text-left"
            activeClassName="bg-gray-100"
          >
            Dashboard
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/tasks"
            className="w-full py-2 px-4 bg-white rounded-lg shadow hover:bg-gray-100 block text-left"
            activeClassName="bg-gray-100"
          >
            Tasks
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/users"
            className="w-full py-2 px-4 bg-white rounded-lg shadow hover:bg-gray-100 block text-left"
            activeClassName="bg-gray-100"
          >
            Users
          </NavLink>
        </li>
      </ul>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <button
          onClick={handleLogout}
          className="w-full py-2 px-4 bg-white rounded-lg shadow hover:bg-gray-100 block text-left"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
