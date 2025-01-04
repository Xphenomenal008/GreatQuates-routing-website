import React from 'react';
import { Link } from 'react-router-dom';

const Quotelist = (props) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 space-y-5 border border-gray-300 hover:shadow-lg transition duration-300 transform hover:scale-105">
      {/* Author */}
      <div className="text-sky-700 font-bold text-lg sm:text-xl md:text-2xl text-center capitalize">
        "{props.author}"
      </div>
      
      {/* Quote Text */}
      <div className="text-gray-700 italic text-sm sm:text-base md:text-lg leading-loose tracking-wide text-center">
        “{props.text}”
      </div>
      
      {/* Button */}
      <div className="flex justify-center">
        <Link to={`/quate/${props.id}`}>
          <button className="px-6 py-2 bg-sky-500 text-white rounded-lg shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 transform transition duration-200 hover:scale-110">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Quotelist;
