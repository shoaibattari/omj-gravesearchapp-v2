import { Metadata } from "next";
import Categories from "./Components/ui/Categories";
import Graveyards from "./Components/ui/Graveyards";
import ImageSlider from "./Components/ui/ImageSlider";
import Khundis from "./Components/ui/Khundis";
import Services from "./Components/ui/Services";
const images = ["certified-1", "map", "grave1", "grave-3", "grave-2"];

export const metadata: Metadata = {
  title: "OMJ graveyard search app",
  description:
    "this app is a OMJ graveyard searching app for Okhai memon jamat all graveyard data searching app for name wise, khundi wise and graveyard wise ",
};



export default function Home() {
  return (
    <section>
      <Categories />
      {/* <Graveyards /> */}
      {/* <Khundis /> */}
      <div className=" bg-transparent   p-6 -z-20 ">
        <div className="container mx-auto ">
          <ImageSlider images={images} />
        </div>
      </div>
          <Services />
    </section>
  );
}
