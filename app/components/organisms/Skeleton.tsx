import React from "react";

const Skeleton = () => {
  return (
    <>
      <div  className="flex justify-center items-center">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate-pulse">
        <div className="flex items-center justify-center p-4">
          <div className="w-36 h-36 bg-gray-300 rounded-lg dark:bg-gray-700"></div>
        </div>
        <div className="px-5 pb-5">
          <div className="h-6 bg-gray-300 rounded dark:bg-gray-700 mb-2"></div>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex space-x-1">
              <div className="w-6 h-6 bg-gray-300 rounded-full dark:bg-gray-700"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-full dark:bg-gray-700"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-full dark:bg-gray-700"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-full dark:bg-gray-700"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-full dark:bg-gray-700"></div>
            </div>
            <span className="bg-gray-300 text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-gray-700 ms-3">
              &nbsp;
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="h-8 bg-gray-300 rounded dark:bg-gray-700 w-20"></span>
            <div className="h-10 bg-gray-300 rounded dark:bg-gray-700 w-24"></div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Skeleton;
