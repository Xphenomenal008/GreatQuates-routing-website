import { Route, Routes, Navigate } from "react-router-dom";
import Allquate from "./components/Allquate";
import Newquate from "./components/Newquate";
import Quatedetail from "./components/quatedetail";
import Mainnavigation from "./components/Mainnavigation";
import Notfound from "./components/Notfound";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quateslicy } from "./components/story/inde";


function App() {
   
    const dispatch = useDispatch();
    const manuldata = useSelector((state) => state.manualadded.manuallyadded);
    const loading=useSelector((state)=>state.quateslice.load)
    console.log("Manuldata:", manuldata);

    //fetching data
        const fetchQuotes = async () => {
            try {
                loading
                const res = await fetch("https://routing-site-default-rtdb.firebaseio.com/quates.json");
                if (!res.ok) {
                    throw new Error("Failed to fetch quotes.");
                }
                const data = await res.json();

                const formattedData = Object.keys(data).map((key) => ({
                    id: key,
                    text: data[key].text,
                    author: data[key].author,
                }));

                dispatch(quateslicy.addquates(formattedData))
                
                dispatch(quateslicy.load())
            } catch (error) {
                console.error(error.message);
            }
        };
        
             
        useEffect(()=>{
            fetchQuotes()
        },[])
          
     
//sending data
    useEffect(() => {
        const addQuate = async () => {
            if (!manuldata || Object.keys(manuldata).length === 0) return; // Prevent empty or invalid submission

            try {
                loading
                const res = await fetch("https://routing-site-default-rtdb.firebaseio.com/quates.json", {
                    method: "POST",
                    body: JSON.stringify({
                        author: manuldata.author,
                        text: manuldata.text,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!res.ok) {
                    throw new Error("Failed to add quote");
                }

                const responseData = await res.json();
                console.log("Quote added successfully:", responseData);
                dispatch(quateslicy.load())
            } catch (e) {
                console.error(e.message)
            }
            fetchQuotes()
        };
 
        addQuate();
        
       
    }, [manuldata]); // Add manuldata as a dependency

    return (
        <div>
            <Mainnavigation></Mainnavigation>

            <Routes>
                {/* Redirect to /quate */}
                <Route path="/" element={<Navigate to="/quate" />} />

                {/* Route for Allquate */}
                <Route path="/quate" element={<Allquate />} />

                {/* Route for Quatedetail */}
                <Route path="/quate/:quateid/*" element={<Quatedetail />} />

                {/* Route for Newquate */}
                <Route path="/new-quate" element={<Newquate />} />
                <Route path="*" element={<Notfound></Notfound>} />
            </Routes>

            {/* <div className="mt-8 flex justify-center">
        <button
          onClick={fetchQuotes}
          className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
        >
          Fetch More Quotes
        </button>
      </div> */}
        </div>
    );
}

export default App;
