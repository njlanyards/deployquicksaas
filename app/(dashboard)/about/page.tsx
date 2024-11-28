import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">About Your SaaS</h1>
        <p className="text-gray-600 text-lg mb-4">
          You can put some information about your SaaS here. How you came up with this idea and how it works...
        </p>

        <p className="text-gray-600 text-lg mb-6">
          You may want to use your own HTML elements and styles.
        </p>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            Have feedback or want to discuss a business opportunity? Feel free to reach out:
          </p>
          <p className="text-gray-800 font-medium mt-2">
            <a href="mailto:your@email.com" className="text-blue-600 underline">your@email.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
