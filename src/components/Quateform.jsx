import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { quateslicy } from './story/inde';
import { manualslicy } from './story/inde';

const Quateform = (props) => {
  const [active, setActive] = useState(false);
  const refAuthor = useRef();
  const refText = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const doSubmit = (e) => {
    e.preventDefault();
    const author = refAuthor.current.value;
    const text = refText.current.value;

    // Dispatch manually added quote
    dispatch(manualslicy.manualadded({ author, text }));
    refAuthor.current.value=""
    refText.current.value=""
    // Navigate to quotes page
    navigate('/quate');
    
  };

  const focusHandler = () => {
    setActive(true);
  };

  const clickHandler = () => {
    setActive(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-100 to-blue-200 p-6">
      <form
        onFocus={focusHandler}
        onSubmit={doSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg transform transition duration-300 hover:scale-105"
      >
        <h2 className="text-3xl font-semibold text-sky-600 text-center mb-8">
          Add Your Favorite Quote
        </h2>
        <div className="mb-6">
          <label
            htmlFor="author"
            className="block text-lg font-medium text-sky-700 mb-2"
          >
            Author:
          </label>
          <input
            type="text"
            id="author"
            ref={refAuthor}
            className="w-full px-6 py-3 border border-sky-300 rounded-lg text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-sky-400"
            placeholder="Enter the author's name"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block text-lg font-medium text-sky-700 mb-2"
          >
            Quote Text:
          </label>
          <input
            type="text"
            id="text"
            ref={refText}
            className="w-full px-6 py-3 border border-sky-300 rounded-lg text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-sky-400"
            placeholder="Enter the quote text"
            required
          />
        </div>
        <button
          onClick={clickHandler}
          type="submit"
          className="w-full py-3 px-6 bg-sky-600 text-white rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 transform hover:scale-105"
        >
          Submit Quote
        </button>
      </form>
    </div>
  );
};

export default Quateform;
