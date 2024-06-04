import { Metadata } from "next";
import Categories from "./Components/ui/Categories";
import ImageSlider from "./Components/ui/ImageSlider";
import Services from "./Components/ui/Services";
export const images = [
  "certified-1",
  "certified-3",
  "map",
  "grave-1",
  "grave-2",
  "grave-4",
  "grave-6",
  "president",
  "members",
];

export const metadata: Metadata = {
  title: "OMJ graveyard search app",
  description:
    "this app is a OMJ graveyard searching app for Okhai memon jamat all graveyard data searching app for name wise, khundi wise and graveyard wise ",
};

export default function Home() {
  return (
    <section>
      <Categories />
      <div className=" bg-transparent   p-6 -z-20 ">
        <div className="container mx-auto ">
          <ImageSlider images={images} />
        </div>
      </div>
      <Services />
    </section>
  );
}
