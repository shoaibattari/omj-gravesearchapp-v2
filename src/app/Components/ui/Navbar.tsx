"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },

    {
      id: 2,
      name: "Graveyards",
      link: "/categories/Graveyards",
    },
    {
      id: 6,
      name: "Khundis",
      link: "/categories/Khundis",
    },
    {
      id: 7,
      name: "Graveyard-Commitee",
      link: "/graveyardcommittee",
    },
    {
      id: 4,
      name: "Our Cabinet",
      link: "/communityMembers",
    },
    // {
    //   id: 5,
    //   name: "admin",
    //   link: "/admin",
    // },
    {
      id: 3,
      name: "Developer",
      link: "https://shoaibmemon.vercel.app/",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto flex justify-between sticky top-0 items-center w-full h-20 md:h-10 px-1 md:px-4 bg-emerald-600   ">
      <div className="">
        <h1 className="text-2xl font-bold md:text-1xl font-signature ml-2 md:ml-6 text-gray-50  hover:text-gray-100 ">
          <Link href="/" target="_blank">
            OMJ GRAVEYARD
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, name, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer font-semibold  text-1xl text-gray-50 hover:scale-105 hover:text-gray-200 duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-50 md:hidden"
      >
        {nav ? <FaTimes size={40} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col  justify-center items-start absolute  top-0 left-0 w-full min-h-screen bg-emerald-600 ">
          {links.map(({ id, name, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer p-3 text-2xl font-semibold text-gray-100 hover:scale-125 hover:text-gray-600 duration-200"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
