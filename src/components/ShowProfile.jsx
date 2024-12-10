"use client";
import React, { useEffect, useState } from "react";

const ShowProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen ">
        <p className="text-lg font-medium text-gray-600">Loading Profile...</p>
      </div>
    );
  }
  console.log(user);
  return (
    <div className="w-full h-screen flex items-center justify-center  p-4 mt-10">
      <div className=" w-full  rounded-lg shadow-lg">
        {/* Profile Header */}
        <div className="p-6 border-b  bg-gradient-to-r from-cyan-700 to-cyan-600 rounded-t-lg">
          <div className="flex items-center flex-col">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-teal-600 font-bold text-2xl shadow-lg">
              <p className="uppercase">{user.name.charAt(0)}</p>
            </div>
            <h3 className="text-2xl font-bold text-white mt-4">
              {user.fullName}
            </h3>
            <p className="text-teal-100 text-sm">{user.email}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-6">
          <div className="space-y-6 text-gray-800">
            <div className="flex items-center">
              <p className="font-medium text-gray-500">Name:</p>
              <p className="ml-3 font-semibold">{user.name}</p>
            </div>
            <hr />

            <div className="flex items-center">
              <p className="font-medium text-gray-500">Email Address:</p>
              <p className="ml-3 font-semibold">{user.email}</p>
            </div>
            <hr />

            <div className="flex items-center">
              <p className="font-medium text-gray-500">Phone Number:</p>
              <p className="ml-3 font-semibold">{user.phoneNumber || "N/A"}</p>
            </div>
            <hr />

            <div className="flex items-center">
              <p className="font-medium text-gray-500">Division:</p>
              <p className="ml-3 font-semibold">
                {user.district.slice(3) || "N/A"}
              </p>
            </div>
            <hr />

            <div className="flex items-center">
              <p className="font-medium text-gray-500">District:</p>
              <p className="ml-3 font-semibold">
                {user.district.slice(3) || "N/A"}
              </p>
            </div>
            <hr />

            <div className="flex items-center">
              <p className="font-medium text-gray-500">Upazila:</p>
              <p className="ml-3 font-semibold">
                {user.upazila.slice(4) || "N/A"}
              </p>
            </div>
            <hr />
            <div className="flex items-center">
              <p className="font-medium text-gray-500">Union:</p>
              <p className="ml-3 font-semibold">
                {user.tunion.slice(5) || "N/A"}
              </p>
            </div>
            <hr />
            <div className="flex items-center">
              <p className="font-medium text-gray-500">Markaz:</p>
              <p className="ml-3 font-semibold">{user.markaz || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProfile;
