import Link from "next/link";
import React from "react";
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
      <div className="  md:px-[48px] py-[16px] text-center bg-green-50 text-emerald-600 ">
        <span className="text-gray-700 underline underline-offset-4 font-bold">
          Disclaimer
        </span>
        <p className="text-sm p-3 text-gray-700">
          This app is not official Okhai Memon Graveyard application. It is an
          independent service created to assist users in accessing graveyard
          data for personal purposes. For official information and services,
          please refer to OMJ official channels.
          <br />
        </p>
        <div className="md:flex justify-between ">
          <p className=" font-bold">All Rights Reserved ©</p>
          <div className=" md:flex ">
            <p>App Create And Design By - </p>
            <Link
              href="https://shoaibmemon.vercel.app/"
              target="_blank"
              className="hover:text-emerald-600 font-bold"
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
                <FaFacebook className="  text-emerald-700 hover:text-emerald-800 text-3xl hover:text-4xl delay-105 duration-100 ease-linear " />
              </Link>

              <Link
                href="https://wa.me/+923232579204"
                rel="noopener noreferrer"
                className=""
                target="_blank"
              >
                <FaWhatsapp className="  text-emerald-700 hover:text-emerald-800 text-3xl hover:text-4xl delay-105 duration-100 ease-linear" />
              </Link>

              <Link
                href="https://twitter.com/shoaibmemon26"
                rel="noopener noreferrer"
                className=""
                target="_blank"
              >
                <FaTwitter className="   text-emerald-700 hover:text-emerald-800 text-3xl hover:text-4xl delay-105 duration-100 ease-linear " />
              </Link>

              <Link
                href="https://www.linkedin.com/in/shoaib-memon26"
                rel="noopener noreferrer"
                className=""
                target="_blank"
              >
                <FaLinkedin className="   text-emerald-700 hover:text-emerald-800 text-3xl hover:text-4xl delay-105 duration-100 ease-linear " />
              </Link>

              <Link
                href="https://www.youtube.com/@shoaibmemon26"
                rel="noopener noreferrer"
                className=""
                target="_blank"
              >
                <FaYoutube className="   text-emerald-700 hover:text-emerald-800 text-3xl hover:text-4xl delay-105 duration-100 ease-linear " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
