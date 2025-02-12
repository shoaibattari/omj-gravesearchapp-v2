// components/CommunityMembers.tsx
import icon from "@/app/../../public/whatsaap.jpeg";
import React from "react";
import {
  cabinetMembers,
  electedBoardMembers,
  cooptedBoardMembers,
} from "../database/communityMembers";
import Image from "next/image";
import Link from "next/link";

const CommunityMembers: React.FC = () => {
  return (
    <div className=" my-6 ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl text-center uppercase md:text-5xl text-primary  py-3 font-bold">
          <span className="text-gray-700">Our</span> Community Members
        </h2>
        <div className="mt-0">
          <h2 className="text-2xl text-center uppercase md:text-4xl text-primary rounded-full py-3 font-bold underline">
            <span className="text-gray-700">Office</span> Bearers
          </h2>
          <div className=" grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 ">
            {cabinetMembers.map((member, index) => (
              <div
                key={index}
                className="bg-primary rounded-3xl border-b border-gray-100 p-6 text-center sm:border-0 text-emerald-800 uppercase font-bold italic hover:scale-105"
              >
                <div className="grid items-center justify-center cursor-pointer  ">
                  <Image
                   src={`/cabinet/${member.image}.jpg`}
                    width={110}
                    height={70}
                    alt={member.name}
                    className=" rounded-full"
                  />
                </div>
                <h4 className="text-lg text-gray-100 leading-6 font-extrabold h-12">
                  {member.name}
                </h4>
                <p className="text-gray-200">{member.position}</p>
                <Link
                  href={member.whatsapp}
                  target="blank"
                  className="  font-semibold text-lg text-emerald-700  "
                >
                  <div className="bg-white hover:bg-gray-100 flex justify-center rounded-lg cursor-pointer ">
                    <div>
                      <Image src={icon} width={35} height={20} alt="icon" />
                    </div>
                    <div>WHATSAAP </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-6">
          <h2 className="text-2xl text-center uppercase md:text-4xl text-primary rounded-full py-3 font-bold underline">
            <span className="text-gray-700">Elected </span> Board Members
          </h2>
          <div className=" grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 ">
            {electedBoardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-primary rounded-3xl border-b border-gray-100 p-6 text-center sm:border-0 text-emerald-800 uppercase font-bold italic hover:scale-105"
              >
                <div className="grid items-center justify-center cursor-pointer h-36   ">
                  <Image
                    src={`/cabinet/${member.image}.jpg`}
                    width={110}
                    height={70}
                    alt={member.name}
                    className=" rounded-full "
                  />
                </div>
                <h4 className="text-lg text-gray-100 leading-6 font-extrabold h-12">
                  {member.name}
                </h4>
                <Link
                  href={member.whatsapp}
                  target="blank"
                  className="  font-semibold text-lg text-emerald-700  "
                >
                  <div className="bg-white hover:bg-gray-100 flex justify-center rounded-lg cursor-pointer ">
                    <div>
                      <Image src={icon} width={35} height={20} alt="icon" />
                    </div>
                    <div>WHATSAAP </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-6">
          <h2 className="text-2xl text-center uppercase md:text-4xl text-primary rounded-full py-3 font-bold underline">
            <span className="text-gray-700">Co-opted </span> Board Members
          </h2>
          <div className=" grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 ">
            {cooptedBoardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-primary rounded-3xl border-b border-gray-100 p-6 text-center sm:border-0 text-emerald-800 uppercase font-bold italic hover:scale-105"
              >
                <div className="grid items-center justify-center cursor-pointer h-36  ">
                  <Image
                    src={`/cabinet/${member.image}.jpg`}
                    width={110}
                    height={70}
                    alt={member.name}
                    className=" rounded-full"
                  />
                </div>
                <h4 className="text-lg text-gray-100 leading-6 font-extrabold h-12">
                  {member.name}
                </h4>
                <Link
                  href={member.whatsapp}
                  target="blank"
                  className="  font-semibold text-lg text-emerald-700  "
                >
                  <div className="bg-white hover:bg-gray-100 flex justify-center rounded-lg cursor-pointer ">
                    <div>
                      <Image src={icon} width={35} height={20} alt="icon" />
                    </div>
                    <div>WHATSAAP </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommunityMembers;
