"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import LoadingUI from "../../Components/ui/LoadingUi";
import { graveyardDatabase } from "../../database/graveDatabase";
import GraveyardItem from "../../database/typeGraveyard";
import Card from "../../Components/ui/Card";
import khundiNamesArray from "../../database/Khundis";
import Graveyards from "../../Components/ui/Graveyards";

interface Props {
  params: { graveyard: string };
}

const GraveyardPage: React.FC<Props> = ({ params }) => {
  const [searchTermName, setSearchTermName] = useState<string>("");
  const [searchTermKhundi, setSearchTermKhundi] = useState<string>("KATH");
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredData, setFilteredData] = useState<GraveyardItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setTimeout(() => {
        const filteredItems = graveyardDatabase.filter(
          (item: GraveyardItem) =>
            item.Graveyard === params.graveyard &&
            item.Name.toLowerCase().includes(searchTermName.toLowerCase()) &&
            (searchTermKhundi === "" || item.KHUNDI === searchTermKhundi)
        );
        setFilteredData(filteredItems);
        setLoading(false);
      }, 800);
    };

    fetchData();
  }, [params.graveyard, searchTermName, searchTermKhundi]);

  const handleSearchNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTermName(e.target.value);
  };

  const handleSearchKhundiChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchTermKhundi(e.target.value);
  };

  return (
    <main className="min-h-svh ">
      {/* <h1 className="bg-emerald-400 uppercase text-gray-200 text-2xl md:text-5xl font-extrabold text-center divide-x hidden md:h-20">
        {params.grave} Graveyard List
      </h1> */}

      <div className="mb-4 md:flex md:justify-center m-2">
        <input
          type="text"
          placeholder="Enter Full Name"
          value={searchTermName}
          onChange={handleSearchNameChange}
          className="p-1  border border-emerald-600 rounded-md mr-2 w-full text-2xl text-emerald-600 "
        />
        <select
          value={searchTermKhundi}
          onChange={handleSearchKhundiChange}
          className="focus:bg-emerald-100 hover:bg-emerald-100 cursor-pointer  mt-2 md:mt-0 p-1 border border-emerald-600 rounded-md mr-2 w-full md:w-auto text-2xl text-emerald-600 "
        >
          <option value="">All Khundi</option>
          {khundiNamesArray.map((khundi) => (
            <option key={khundi} value={khundi}>
              {khundi}
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
        <div className="md:grid md:grid-col-3 ">
          <Card filteredData={filteredData} />
        </div>
      )}
      <Graveyards />
    </main>
  );
};

export default GraveyardPage;
