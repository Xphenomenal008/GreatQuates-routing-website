import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loaing";
import Spinner from "./Loadingspinner";

const Comment = () => {
    const [loading,setloading]=useState(true)
    const [show, setShow] = useState(false);
    const [isHidden, setHidden] = useState(true);
    const [inputValue, setInputValue] = useState(null);
    const inputRef = useRef();
    const { quateid } = useParams();
    const [ourComments, setOurComments] = useState([]);
    console.log(ourComments);

    const clickHandler = () => {
        setHidden(false);
        setShow(!show);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const myValue = inputRef.current.value.trim();
        if (!myValue) return; // Prevent empty comments
        setInputValue(myValue);

        // Clear input field
        inputRef.current.value = "";

        // Send comment to Firebase
        try {
            setloading(true)
            const res = await fetch(
                `https://routing-site-default-rtdb.firebaseio.com/comments/${quateid}.json`,
                {
                    method: "POST",
                    body: JSON.stringify({ text: myValue }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!res.ok) {
                throw new Error("Failed to add comment");
            }
            setloading(false)
            const responseData = await res.json();
            console.log("Comment added successfully:", responseData);
        } catch (error) {
            console.error("Error adding comment:", error.message);
        }
         
        fetchComments();
    };

    // Fetch comments data
    const fetchComments = async () => {
        try {
            setloading(true)
            const res = await fetch(
                `https://routing-site-default-rtdb.firebaseio.com/comments/${quateid}.json`
            );
            if (!res.ok) {
                throw new Error("Failed to fetch comments");
            }
            const data = await res.json();
            const actualComments = Object.keys(data).map((key) => ({
                id: key,
                comment: data[key].text,
            }));
            setloading(false)
            setOurComments(actualComments);
            
        } catch (e) {
            console.error("Error fetching comments:", e.message);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);

    const handle = () => {
        setHidden(true);
    };

    return (
        <div className="flex flex-col items-center justify-center  mt-4 bg-gradient-to-r from-blue-100 to-sky-200 px-6">
            <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full">
                <h1 className="text-2xl font-bold text-sky-600 mb-6 text-center">
                    Comments Section
                </h1>
                <div className="flex justify-center mb-4">
                    <button
                        onClick={clickHandler}
                        className="bg-sky-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-sky-600 transition duration-300"
                    >
                        Add Comment
                    </button>
                </div>
                {show && (
                    <div className="mt-6">
                        <form
                            onSubmit={submitHandler}
                            className={`${isHidden ? "hidden" : "block"}`}
                        >
                            <div className="flex flex-col mb-4">
                                <input
                                    className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                                    type="text"
                                    id="name"
                                    name="name"
                                    ref={inputRef}
                                    placeholder="Enter your comment"
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    onClick={handle}
                                    className="bg-sky-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-sky-600 transition duration-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mt-6 max-w-lg w-full">
                <h2 className="text-xl font-semibold text-sky-600 mb-4">
                    Comments
                </h2>
               { loading ? <Spinner className="absolute"></Spinner> : <div className="space-y-4">
                    {   ourComments.length > 0 ? (
                        ourComments.map((comment) => (
                            <div
                                key={comment.id}
                                className="bg-sky-100 rounded-lg p-4 shadow-sm"
                            >
                                <p className="text-gray-800">{comment.comment}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">
                            No comments yet. Be the first to comment!
                        </p>
                    )}
                </div>}
            </div>
        </div>
    );
};

export default Comment;
