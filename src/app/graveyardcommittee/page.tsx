// ./components/Graveyard.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import icon from "../../../public/whatsaap.jpeg";
import { Metadata } from "next";
import ImageCrusol from "../Components/ui/imageSlider/ImageCrusol";
interface CommitteeMember {
  name: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}


export const metadata: Metadata = {
  title: "Graveyard Commitee members",
  description:
    "Okhai Memon Jamat Graverad Commitee With members details",
};

const currentCommitteeMembers: CommitteeMember[] = [
  { name: "Mr. Muhammad Affan Hashim Darbar", title: "Senior Vice Chairman" },
  { name: "Mr. Jameel Dawood Karar", title: "Vice Chairman" },
  { name: "Mr. M. Saleem Ibrahim Aswani", title: "Secretary" },
  { name: "Mr. Abdul Rauf Suleman Toberiya", title: "Co-ordinator Saadi Town" },
  { name: "Mr. Tayyab Dawood Suriya" },
  { name: "Mr. Shehzad Ismail Ganatra" },
  { name: "Mr. Muhammad Faisal Anwer Popatpotra" },
  { name: "Mr. Abdul Basit Abdul Ghani Barai" },
  { name: "Mr. Sumair Panjwani" },
  { name: "Mr. Rameez Qasim Gaziani" },
  { name: "Mr. Siddiq Farooq Vayani" },
  { name: "Mr. Muhammad Bilal Darbar" },
  { name: "Mr. Sohail Haroon Suriya" },
  { name: "Mr. Ahmed Gaziani" },
  { name: "Mr. Imran Ganatra" },
  { name: "Mr. Nazim Karar" },
];
const graveyardcommittee: React.FC = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl text-center uppercase md:text-5xl text-emerald-600  py-3 font-bold">
        <span className="text-gray-700">Graveyard</span> Committee
      </h2>
      <div className="">
        <div className="bg-emerald-700 rounded-lg shadow-md p-3 flex items-center justify-center">
          <Image
            src="/graveyardchairman.jpeg"
            alt="barai"
            width={200}
            height={100}
            className="w-28 h-28  rounded-full mb-1"
          />
          <div className="mx-3">
            <h2 className="text-1xl md:text-2xl text-gray-100 font-bold mb-2">
              Mr. Waqas Muhammad Younus Jiwani
            </h2>
            <h3 className="text-1xl md:text-xl text-gray-300  font-semibold mb-2">
              Chairman
            </h3>
            <div>
              <Link
                href={"https://wa.me/+923452220760"}
                target="blank"
                className="  font-semibold text-lg text-emerald-700  "
              >
                <div className="bg-white w-28 hover:bg-gray-100  flex justify-start rounded-lg cursor-pointer ">
                  <div>
                    <Image src={icon} width={22} height={20} alt="icon" />
                  </div>
                  <div className="text-sm">WHATSAAP </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <section>
        <h2 className="text-2xl text-center uppercase md:text-5xl text-emerald-600  py-3 font-bold">
          <span className="text-gray-700">Current Committee </span>Members
        </h2>
        <div className="mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {currentCommitteeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-emerald-600 rounded-lg shadow-md p-2 md:p-6"
            >
              <h3 className="text-1xl md:h-14 md:text-2xl text-gray-100 font-bold mb-2">
                {member.name}
              </h3>
              {member.title && (
                <h4 className="text-1xl md:text-xl text-gray-300  font-semibold mb-2">
                  {member.title}
                </h4>
              )}
            </div>
          ))}
        </div>
      </section>
      <ImageCrusol />

    </div>
  );
};

export default graveyardcommittee;
