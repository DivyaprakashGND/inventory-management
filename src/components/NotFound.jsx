import React from 'react';
import { Link } from 'react-router-dom'; // For the "Back to Homepage" link

const NotFound = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600">404</h1>
        <p className="mb-4 mx-2 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
        <p className="mb-4 mx-4 text-lg font-light text-gray-500">
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>
        <Link
          to="/" // This will link back to the homepage
          className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
