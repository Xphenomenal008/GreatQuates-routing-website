import React from "react";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
            <div className="text-center">
                {/* Animated Loader */}
                <div className="relative mb-6">
                    <div className="h-1 w-32 bg-gray-300 rounded-full overflow-hidden">
                        <div className="h-full bg-sky-500 w-1/4 animate-loadingBar"></div>
                    </div>
                </div>

                {/* Typing Effect */}
                <div className="text-xl font-semibold text-gray-700">
                    <span className="block">
                        <span className="animate-typing">Loading Quotes</span>
                        <span className="animate-dots">...</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Loading;
