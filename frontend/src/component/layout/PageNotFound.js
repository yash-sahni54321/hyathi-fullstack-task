import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className=" text-center mt-20 w-full h-full">
      <div className="text-gray-700 text-3xl mb-6">
        <span>Page Not Found</span>
      </div>
      <div className="text-blue-700 text-3xl">
        <Link to="/">
          <span className="underline">Home </span>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
