import React from "react";

const About = () => {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by developers across the world
          </h2>
          <p className="text-3xl py-6 text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            asperiores earum placeat veritatis dignissimos itaque.
          </p>
        </div>
        <div className="grid md:grid-cols-3 text-center gap-4 mx-6">
          <div className="py-8 border border-slate-300 shadow-xl rounded-lg">
            <p className="text-6xl font-bold text-indigo-500">100%</p>
            <p className="text-lg text-gray-400 mt-2">Completion</p>
          </div>
          <div className="py-8 border border-slate-300 shadow-xl rounded-lg">
            <p className="text-6xl font-bold text-indigo-500">24/7</p>
            <p className="text-lg text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="py-8 border border-slate-300 shadow-xl rounded-lg">
            <p className="text-6xl font-bold text-indigo-500">100K</p>
            <p className="text-lg text-gray-400 mt-2">transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
