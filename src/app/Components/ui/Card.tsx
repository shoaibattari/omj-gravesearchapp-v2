import GraveyardItem from "@/app/database/typeGraveyard";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface Props {
  filteredData: GraveyardItem[];
}

function Card({ filteredData }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 px-4 cursor-pointer mb-4">
      {filteredData.map((d, index) => (
        <Link key={d.Id} href={`/grave/${d.Id}`}>
          <motion.div
            key={d.Name}
            initial={{ opacity: 0, x:20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${
              index % 2 === 0
                ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 hover:text-emerald-900 uppercase font-bold italic"
                : "bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900 uppercase font-bold italic"
            } rounded-lg shadow-lg  `}
          >
            <div className=" content-around h-40 px-6 py-4">
              <p className=" text-[14px]">
                <span className=" text-[14px] ">Grave-No: </span>
                {d.GraveNo}
              </p>
              <p className=" text-[14px]">
                <span className=" text-[14px]">Graveyard: </span>
                {d.Graveyard}
              </p>
              <p className=" text-[14px] ">
                <span className=" text-[14px]">Name: </span>
                {d.Name}
              </p>
              <p className=" text-[14px]">
                <span className=" text-[14px]">KHUNDI: </span>
                {d.KHUNDI}
              </p>
              <p className=" text-[14px]">
                <span className=" text-[14px]">DATE: </span>
                {d.DOD}
              </p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
