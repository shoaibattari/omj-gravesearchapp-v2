import Link from "next/link";
import React from "react";
import khundiNamesArray from "../../database/Khundis";

import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="   md:px-[48px] py-[16px] px-6  uppercase font-bold bg-gradient-to-r from-emerald-600 to-green-400 text-white ">
        <div className="">
        <h2 className="text-2xl text-center uppercase md:text-3xl  text-gray-100 rounded-full md:py-3   font-bold">
          <span className="text-gray-700"> USEFULL </span>LINKS
        </h2>
        </div>
        <div className=" grid md:grid-cols-6 grid-cols-2  gap-1  text-white pb-2  font-bold">
          <p className="hover:underline">
            <Link href={`/categories/Graveyards`}>Graveyards</Link>
          </p>
          <p className="hover:underline">
            <Link href={`/categories/Khundis`}>khundis</Link>
          </p>

          <p className="hover:underline">
            <Link href={`/graveyard/hubriver1`}>hubriver1</Link>
          </p>
          <p className="hover:underline">
            <Link href={`/graveyard/hubriver2`}>hubriver2</Link>
          </p>
          <p className="hover:underline">
            <Link href={`/graveyard/saaditown`}>saaditown</Link>
          </p>
          <p className="hover:underline">
            <Link href={`/graveyard/mewashah`}>mewashah</Link>
          </p>
          {khundiNamesArray.map((khundi, index) => (
            <span key={khundi}>
              <p className="hover:underline">
                <Link href={`/khundi/${khundi}`}>{khundi}</Link>
              </p>
            </span>
          ))}
        </div>

        <div className="md:flex justify-between mt-3 text-center text-gray-900">
          <p className=" font-bold">All Rights Reserved ©</p>
          <div className=" md:flex ">
            <p>App Create And Design By - </p>
            <Link
              href="https://shoaibmemon.vercel.app/"
              target="_blank"
              className="hover:text-gray-50 font-bold"
            >
              <p>Shoaib Abdul Sattar Khosa</p>
            </Link>
          </div>
          <div className="sm:flex sm:items-center sm:justify-between pb-4">
            <div className="flex mt-4 space-x-6 justify-center  sm:mt-0">
              <Link
                href="https://www.facebook.com/shoaib.attari.399"
                rel="noopener noreferrer"
                className=""
                target="_blank"
              >
                <FaFacebook className="  text-gray-900 hover:text-gray-100 text-3xl hover:text-4xl delay-105 duration-100 ease-linear " />
              </Link>

              <Link
                href="https://wa.me/+923232579204"
                rel="noopener noreferrer"
                className=""
                target="_blank"
              >
                <FaWhatsapp className="  text-gray-900 hover:text-gray-100 text-3xl hover:text-4xl delay-105 duration-100 ease-linear" />
              </Link>

              <Link
                href="https://twitter.com/shoaibmemon26"
                rel="noopener noreferrer"
                className=""
                target="_blank"
              >
                <FaTwitter className="   text-gray-900 hover:text-gray-100 text-3xl hover:text-4xl delay-105 duration-100 ease-linear " />
              </Link>

              <Link
                href="https://www.linkedin.com/in/shoaib-memon26"
                rel="noopener noreferrer"
                className=""
                target="_blank"
              >
                <FaLinkedin className="   text-gray-900 hover:text-gray-100 text-3xl hover:text-4xl delay-105 duration-100 ease-linear " />
              </Link>

              <Link
                href="https://www.youtube.com/@shoaibmemon26"
                rel="noopener noreferrer"
                className=""
                target="_blank"
              >
                <FaYoutube className="   text-gray-900 hover:text-gray-100 text-3xl hover:text-4xl delay-105 duration-100 ease-linear " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
