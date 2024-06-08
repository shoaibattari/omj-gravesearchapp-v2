import React from "react";
import khundiNamesArray from "../../database/Khundis";
import Link from "next/link";
import NumberIncrementer from "../ui/NumberIncrementer";
import { graveyardDatabase } from "@/app/database/graveDatabase";

function Khundis() {
  return (
    <div className="bg-gradient-to-r from-emerald-700 to-green-300 pb-2 ">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto text-center ">
          <p className=" text-3xl uppercase md:text-5xl   text-white rounded-full py-3   font-bold">
            Khundis Section <span className="text-4xl md:text-5xl">↓</span>
          </p>
        </div>
      </div>
      <div className=" inset-0 h-1/2 bg-gray-50" />
      <div className=" max-w-7xl mx-auto px-1  sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mt-3 ">
          <ul className="gap-1 text-xs md:text-lg font-bold italic grid grid-cols-2 lg:grid-cols-3  ">
            {khundiNamesArray.map((khundi, index) => (
              <li key={khundi}>
                <Link href={`/khundi/${khundi}`}>
                  <div
                    className={`mb-2 border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r ${
                      index % 12 === 0
                        ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 hover:text-emerald-900 uppercase font-bold italic"
                        : index % 12 === 1
                        ? "bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900 uppercase font-bold italic"
                        : index % 12 === 2
                        ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 hover:text-yellow-900 uppercase font-bold italic"
                        : index % 12 === 3
                        ? "bg-pink-100 text-pink-800 hover:bg-pink-200 hover:text-pink-900 uppercase font-bold italic"
                        : index % 12 === 4
                        ? "bg-purple-100 text-purple-800 hover:bg-purple-200 hover:text-purple-900 uppercase font-bold italic"
                        : index % 12 === 5
                        ? "bg-red-100 text-red-800 hover:bg-red-200 hover:text-red-900 uppercase font-bold italic"
                        : index % 12 === 6
                        ? "bg-orange-100 text-orange-800 hover:bg-orange-200 hover:text-orange-900 uppercase font-bold italic"
                        : index % 12 === 7
                        ? "bg-teal-100 text-teal-800 hover:bg-teal-200 hover:text-teal-900 uppercase font-bold italic"
                        : index % 12 === 8
                        ? "bg-indigo-100 text-indigo-800 hover:bg-indigo-200 hover:text-indigo-900 uppercase font-bold italic"
                        : index % 12 === 9
                        ? "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-gray-900 uppercase font-bold italic"
                        : index % 12 === 10
                        ? "bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900 uppercase font-bold italic"
                        : "bg-cyan-100 text-cyan-800 hover:bg-cyan-200 hover:text-cyan-900 uppercase font-bold italic"
                    } hover:scale-105 md:hover:scale-125`}
                  >
                    {khundi}
                    <NumberIncrementer
                      stopNumber={
                        graveyardDatabase.filter(
                          (item) => item.KHUNDI === khundi
                        ).length
                      }
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
     
    </div>
  );
}
const KhundiDataCounter = graveyardDatabase.filter(
  (item) => item.KHUNDI === "KATH"
).length;

export default Khundis;
