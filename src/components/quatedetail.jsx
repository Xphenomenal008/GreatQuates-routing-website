import React from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import Comment from "./Comment";
import { useSelector } from "react-redux";

const Quatedetail = () => {
  const ouractualdata = useSelector((state) => state.quateslice.allquates);
  const param = useParams();
  const actualquate = ouractualdata.find((qua) => qua.id === param.quateid);

  if (!actualquate) {
    return (
      <p className="text-center text-2xl text-gray-600 font-semibold">
        No quote found!
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Quote Header */}
        <h2 className="text-4xl font-bold text-sky-800 mb-6 text-center underline">
          Quote Details
        </h2>

        {/* Quote Content */}
        <div className="space-y-4">
          <p className="text-gray-800 text-lg md:text-xl">
            <span className="font-semibold text-sky-600">Author:</span>{" "}
            <span className="italic text-gray-700">{actualquate.author}</span>
          </p>
          <p className="text-gray-800 text-lg md:text-xl">
            <span className="font-semibold text-sky-600">Quote:</span>{" "}
            <span className="italic text-gray-700">"{actualquate.text}"</span>
          </p>
        </div>

        {/* Load Comments Button */}
        <div className="mt-8 flex justify-center">
          <Link
            to={`/quate/${param.quateid}/comments`}
            className="px-8 py-3 bg-sky-600 text-white rounded-lg text-lg font-medium shadow-md hover:bg-sky-700 transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
          >
            Load Comments
          </Link>
        </div>
      </div>

      {/* Nested Routes for Comments */}
      <Routes>
        <Route path="comments" element={<Comment />} />
      </Routes>
    </div>
  );
};

export default Quatedetail;
