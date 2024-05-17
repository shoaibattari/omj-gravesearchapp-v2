import React from "react";
import { graveyardDatabase } from "@/app/database/graveDatabase";

import GraveyardItem from "@/app/database/typeGraveyard";
import Graveyards from "@/app/Components/ui/Graveyards";
import Khundis from "@/app/Components/ui/Khundis";

interface Props {
  params: {
    no: string;
    filteredData: GraveyardItem;
  };
}
const GiveName: React.FC<Props> = ({ params }) => {
  const { no } = params;

  const filteredData = graveyardDatabase.find((grave) => grave.GraveNo === no);

  return (
    <main>
    <div className="md:flex md:justify-center mt-4 m-4 md:m-8 ">
      {filteredData ? (
        <div className="  md:w-[660px]  bg-emerald-100 text-emerald-800 hover:bg-emerald-200 hover:text-emerald-900 uppercase font-bold italic">
          <div className="flex items-center p-3  border-gray-400 border-b-2">
            <p className="w-16 text-[14px] ">GraveNo: </p>
            <p className=" text-[18px] px-6 ">{filteredData.GraveNo}</p>
          </div>
          <div className="flex items-center p-3  border-gray-400 border-b-2">
            <p className="w-16 text-[14px] ">Name: </p>
            <p className=" text-[18px] px-6 ">{filteredData.Name}</p>
          </div>
          <div className="flex items-center p-3  border-gray-400 border-b-2">
            <p className="w-16 text-[14px] ">KHUNDI: </p>
            <p className=" text-[18px] px-6 ">{filteredData.KHUNDI}</p>
          </div>
          <div className="flex items-center p-3  border-gray-400 border-b-2">
            <p className="w-16 text-[14px] ">Graveyard: </p>
            <p className=" text-[18px] px-6 ">{filteredData.Graveyard}</p>
          </div>
          <div className="flex items-center p-3  border-gray-400 border-b-2">
            <p className="w-16 text-[14px] ">date: </p>
            <p className=" text-[18px] px-6 ">{filteredData.DOD}</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
    <Graveyards />
    <Khundis />
    </main>
    
  );
};

export default GiveName;
