import Graveyards from "./Components/ui/Graveyards";
import ImageSlider from "./Components/ui/ImageSlider";
import Khundis from "./Components/ui/Khundis";
import Services from "./Components/ui/Services";
const images = ["map", "grave1", "grave-3", "grave-2"];

export default function Home() {
  return (
    <section>
      <Graveyards />
      <Khundis />
      <div className=" bg-transparent   p-6 -z-20 ">
        <div className="container mx-auto ">
          <ImageSlider images={images} />
        </div>
      </div>
    </section>
  );
}
