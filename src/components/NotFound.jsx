import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="">
        <h3 className="text-8xl text-center">☹</h3>
        <h3 className="text-5xl text-center">404 Not Found</h3>
        <h3 className="text-center text-2xl">
          <Link to="/"> ⬅ go back</Link>
        </h3>
      </div>
    </div>
  );
};

export default NotFound;
