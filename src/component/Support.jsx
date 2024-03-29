import React from "react";
import supImg from "../assats/support.jpeg";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

const Support = () => {
  return (
    <div id="Support" className="w-full mt-24">
      <div className=" w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supImg}
          alt=""
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12 text-center ">
          <h2 className="text-3xl pt-8 text-slate-300 ">SUPPORT</h2>
          <h1 className="text-5xl font-bold py-6">Finding the right team</h1>
          <p className="py-4 text-3xl text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            asperiores earum placeat veritatis dignissimos itaque,Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Cumque asperiores earum
            placeat veritatis dignissimos itaque.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className=" bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                asperiores earum placeat veritatis dignissimos itaque
              </p>
            </div>
            <div className=" text-indigo-500 bg-slate-100 py-4 pl-8">
              <p className="flex items-center cursor-pointer">
                Contact Us
                <ArrowSmRightIcon className=" w-5 ml-2 hover:ml-3 " />
              </p>
            </div>
          </div>
          <div className=" bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                asperiores earum placeat veritatis dignissimos itaque
              </p>
            </div>
            <div className=" text-indigo-500 bg-slate-100 py-4 pl-8">
              <p className="flex items-center cursor-pointer ">
                Contact Us
                <ArrowSmRightIcon className=" w-5 ml-2 hover:ml-3 " />
              </p>
            </div>
          </div>
          <div className=" bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                asperiores earum placeat veritatis dignissimos itaque
              </p>
            </div>
            <div className=" text-indigo-500 bg-slate-100 py-4 pl-8">
              <p className="flex items-center cursor-pointer ">
                Contact Us
                <ArrowSmRightIcon className=" w-5 ml-2 hover:ml-3" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
