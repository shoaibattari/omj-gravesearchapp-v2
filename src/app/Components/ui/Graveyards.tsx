import React from "react";
import Link from "next/link";
import { graveyardDatabase } from "@/app/database/graveDatabase";
import NumberIncrementer from "./NumberIncrementer";
import ImageSlider from "./ImageSlider";
import { images } from "@/app/page";

const links = [
  {
    id: 2,
    name: "hubriver1",
    link: "/graveyard/hubriver1",
  },
  {
    id: 3,
    name: "hubriver2",
    link: "/graveyard/hubriver2",
  },
  {
    id: 4,
    name: "saaditown",
    link: "/graveyard/saaditown",
  },
  {
    id: 5,
    name: "mewashah",
    link: "/graveyard/mewashah",
  },
];
export default function Graveyards() {
  return (
    <div>
      <div className=" py-2 bg-gradient-to-r from-emerald-700 to-green-300 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className=" max-w-4xl mx-auto text-center">
            <p className="text-3xl uppercase md:text-5xl  text-white rounded-full py-3   font-bold">
              Graveyards Section
              <span className="text-4xl md:text-5xl"> ↓ </span>
            </p>
          </div>
        </div>

        <div className="mt-3 pb-1">
          <div>
            <div className=" inset-0 h-1/2 bg-gray-50" />
            <div className=" max-w-7xl mx-auto  sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="gap-2 md:gap-12 px-1  rounded-lg  grid grid-cols-2 md:grid-cols-2   ">
                  {links.map((link, index) => (
                    <Link key={link.id} href={link.link}>
                      <div
                        className={`border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r ${
                          index % 5 === 0
                            ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 hover:text-emerald-900 uppercase font-bold italic"
                            : index % 5 === 1
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900 uppercase font-bold italic"
                            : index % 5 === 2
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 hover:text-yellow-900 uppercase font-bold italic"
                            : index % 5 === 3
                            ? "bg-pink-100 text-pink-800 hover:bg-pink-200 hover:text-pink-900 uppercase font-bold italic"
                            : "bg-purple-100 text-purple-800 hover:bg-purple-200 hover:text-purple-900 uppercase font-bold italic"
                        } hover:scale-105 md:hover:scale-125`}
                      >
                        <dt className=" order-2 mt-2 text-xs md:text-lg leading-6  ">
                          {link.name}
                        </dt>
                        <NumberIncrementer
                          stopNumber={
                            graveyardDatabase.filter(
                              (item) => item.Graveyard === link.name
                            ).length
                          }
                        />
                      </div>
                    </Link>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImageSlider images={images} />
    </div>
  );
}
