import React from 'react';

const Notfound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-sky-100">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-sky-600 mb-4">
                    404
                </h1>
                <p className="text-gray-700 text-lg font-medium">
                    Sorry, the page you are looking for was not found.
                </p>
            </div>
        </div>
    );
};

export default Notfound;
