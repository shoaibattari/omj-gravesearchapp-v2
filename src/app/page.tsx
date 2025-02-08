import Image from "next/image";
import Categories from "./Components/ui/Categories";
import ImageCrusol from "./Components/ui/imageSlider/ImageCrusol";
import Services from "./Components/ui/Services";

export default function Home() {
  return (
    <section>
      <Categories />
      <Image
        src={"/slides/busSchedule.jpeg"}
        alt="busSchedule"
        width={500}
        height={500}
        sizes="100vw"
        className="mx-auto pt-4"
      />
      <ImageCrusol />
      <Services />
    </section>
  );
}
