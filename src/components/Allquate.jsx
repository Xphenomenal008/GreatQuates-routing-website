import React, { useEffect, useState } from 'react';
import Quatelist from './Quatelist';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { quateslicy } from './story/inde';
import Loading from './Loaing';
import Spinner from './Loadingspinner';

const Allquate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const manuallyAdded = useSelector((state) => state.manualadded.manuallyadded);
  const quotesWeHave = useSelector((state) => state.quateslice.allquates);
  const loading=useSelector((state)=>state.quateslice.load)
  console.log(quotesWeHave)

  const [isAscending, setIsAscending] = useState(false);
  const sortAscending = location.search.includes('sort=asc');

  useEffect(() => {
    setIsAscending(sortAscending);
  }, [sortAscending]);

  

  const clickHandler = () => {
    const newSortOrder = isAscending ? "desc" : "asc";
    navigate(`/quate?sort=${newSortOrder}`);
    setIsAscending(!isAscending);
  };

  const sortedData = () => {
    return [...quotesWeHave].sort((a, b) => {
      if (isAscending) {
        return a.author > b.author ? 1 : -1;
      } else {
        return a.author < b.author ? 1 : -1;
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-r from-sky-50 to-indigo-50 shadow-xl rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-sky-600">Quotes</h1>
        <button
          onClick={clickHandler}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Sort {isAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <div  className="space-y-6">
        {loading ?<Spinner></Spinner> : !quotesWeHave.length==0?sortedData().map((data) => (
          <Quatelist
            key={data.id}
            author={data.author}
            text={data.text}
            quate={data.text}
            id={data.id}
          />
        )):<Link to="/new-quate">add new quate</Link>}
      </div>
      
    </div>
  );
};

export default Allquate;
