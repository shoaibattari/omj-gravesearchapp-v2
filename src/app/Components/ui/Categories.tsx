import Link from "next/link";
import NumberIncrementer from "./NumberIncrementer";

const Categories = () => {
  const linkClasses = [
    "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 hover:text-emerald-900 uppercase font-bold italic",
    "bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900 uppercase font-bold italic",
    "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 hover:text-yellow-900 uppercase font-bold italic",
    "bg-pink-100 text-pink-800 hover:bg-pink-200 hover:text-pink-900 uppercase font-bold italic",
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-2 md:p-10 bg-gradient-to-r from-emerald-700 to-green-300 text-white">
      <div className="w-full lg:w-1/2 space-y-4  lg:mb-0 text-center lg:text-left">
        <h1 className="text-2xl sm:text-5xl tracking-[6px] font-extrabold mb-4 uppercase">
          OMJ Graveyard Searching App
        </h1>
        <p className="text-base sm:text-lg">
          Find the resting place of your loved ones with ease and accuracy.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col space-y-4">
        <p className="md:text-2xl py-2 px-4 rounded-md shadow-lg font-extrabold uppercase  text-center">
          Searching Categories
        </p>
        <Link href="/categories/Graveyards">
          <div
            className={` text-lg py-2 px-4 rounded-md shadow-md transition duration-300 text-center ${linkClasses[0]}`}
          >
            Graveyards <NumberIncrementer stopNumber={4} />
          </div>
        </Link>
        <Link href="/categories/Khundis">
          <div
            className={`text-lg py-2 px-4 rounded-md shadow-md transition duration-300 text-center ${linkClasses[2]}`}
          >
            Khundis
            <NumberIncrementer stopNumber={42} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
