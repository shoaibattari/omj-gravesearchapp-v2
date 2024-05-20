// components/Services.tsx
import Image from "next/image";
import React from "react";

interface Service {
  title: string;
  img: string;
}

const services: Service[] = [
  { title: "BUS SERVICE", img: "/bus-service.png" },
    { title: "SOCIAL WELFARE", img: "/social-welfare.png" },
    { title: "SPORTS", img: "/sports.png" },
    { title: "HAJJ TRAINING", img: "/hajj-training.png" },
    { title: "PUBLICATION", img: "/publication.png" },
    { title: "EMPLOYMENT BUREAU", img: "/emplyment-bureau.png" },
    { title: "COFFIN PROVIDE", img: "/coffin-provide.png" },
    { title: "GRAVEYARD", img: "/graveyard.png" },
];

const Services: React.FC = () => {
  return (
    <div className=" py-12 my-6 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-center uppercase md:text-5xl  text-emerald-600 rounded-full py-3   font-bold">
        <span className="text-gray-700">  Our </span>Services
        </h2>
        <div className="grid gap-2  grid-cols-2 md:grid-cols-4 ">
          {services.map((service, index) => (
            <div
              key={index}
              className={`border-b border-gray-100 p-6 text-center sm:border-0   text-emerald-800 uppercase font-bold italic hover:scale-105 `}
            >
              <div className="grid items-center justify-center cursor-pointer h-full">
              <Image
                src={service.img}
                width={110}
                height={70}
                alt={service.title}
                className=" rounded-full"
              />
            </div>
                <h3 className="text-lg text-gray-700 leading-6  font-extrabold">
                  {service.title}
                </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
