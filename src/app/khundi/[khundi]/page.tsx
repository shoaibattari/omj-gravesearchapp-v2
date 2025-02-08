"use client";
import React, { useState, useEffect } from "react";
import LoadingUI from "@/app/Components/ui/LoadingUi";
import { graveyardDatabase } from "@/app/database/graveDatabase";

import GraveyardItem from "@/app/database/typeGraveyard";
import Card from "@/app/Components/ui/Card";
import Khundis from "@/app/Components/ui/Khundis";

interface Props {
  params: { khundi: string };
}

const KhundiPage: React.FC<Props> = ({ params }) => {
  const [searchTermName, setSearchTermName] = useState("");
  const [searchTermGrave, setSearchTermGrave] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState<GraveyardItem[]>([]);

  // Extract unique graveyard names for the dropdown
  const graveyardOptions: string[] = Array.from(
    new Set(graveyardDatabase.map((item) => item.Graveyard))
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setTimeout(() => {
        const filteredItems = graveyardDatabase.filter(
          (item) =>
            item.KHUNDI === params.khundi && // Filter based on the passed graveyard name
            item.Name.toLowerCase().includes(searchTermName.toLowerCase()) &&
            (searchTermGrave === "" || item.Graveyard === searchTermGrave)
        );
        setFilteredData(filteredItems);
        setLoading(false);
      }, 800);
    };

    fetchData();
  }, [params.khundi, searchTermName, searchTermGrave]);

  const handleSearchNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTermName(e.target.value);
  };

  const handleSearchGraveChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchTermGrave(e.target.value);
  };

  return (
    <main className="min-h-svh ">
      <h1 className="bg-emerald-100 text-emerald-800 text-3xl hover:bg-emerald-200 hover:text-emerald-900 uppercase font-bold italic text-center divide-x p-6  md:h-20">
        {params.khundi} Khundi
      </h1>

      <div className="mb-4 md:flex md:justify-around m-2 ">
        <input
          type="text"
          placeholder="Enter Full Name"
          value={searchTermName}
          onChange={handleSearchNameChange}
          className="p-1  border border-emerald-600 rounded-md mr-2 w-full text-2xl text-emerald-600 "
        />

        <select
          value={searchTermGrave}
          onChange={handleSearchGraveChange}
          className="mt-2 md:mt-0 p-1 hover:bg-emerald-100 border border-emerald-600 rounded-md mr-2 w-full md:w-auto text-2xl text-emerald-600 "
        >
          <option value="" selected>
            All Graveyard
          </option>
          {graveyardOptions.map((graveyard) => (
            <option key={graveyard} value={graveyard}>
              {graveyard}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <LoadingUI />
      ) : filteredData.length === 0 ? (
        <p className="text-center md:text-7xl font-extrabold text-emerald-600 uppercase h-svh">
          No matching records found.....
        </p>
      ) : (
        <Card filteredData={filteredData} />
      )}
      <Khundis />
    </main>
  );
};

export default KhundiPage;
