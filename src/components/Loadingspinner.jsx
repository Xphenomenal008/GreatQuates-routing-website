import React from "react";

const Spinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
            <div className="relative w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-t-transparent border-sky-500 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Spinner;
