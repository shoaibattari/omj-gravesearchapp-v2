import Graveyards from "./Components/ui/Graveyards";
import Khundis from "./Components/ui/Khundis";
import Services from "./Components/ui/Services";

export default function Home() {
  return (
    <div className=" bg-transparent   p-6 -z-20 ">
      <h1 className="text-2xl md:text-5xl font-extrabold italic text-emerald-500 text-center uppercase p-2">
        OMJ GRAVEYARD DATA SEARCHING APP 2024
      </h1>

      <section>
        <Graveyards />
        <Khundis />
        <Services />
      </section>
    </div>
  );
}
