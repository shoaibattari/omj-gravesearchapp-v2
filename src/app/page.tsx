import Image from "next/image";
import Categories from "./Components/ui/Categories";
import ImageCrusol from "./Components/ui/imageSlider/ImageCrusol";
import Services from "./Components/ui/Services";

export default function Home() {
  return (
    <section>
      <Categories />
      <video
        width="1200"
        height="1200"
        autoPlay
        muted
        loop
        controls
        className="w-full h-auto py-2"
      >
        <source src="/slides/Omj-Grave-Info.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>

      <Image
        src={"/slides/busSchedule.jpeg"}
        alt="busSchedule"
        width={500}
        height={500}
        sizes="100vw"
        className="mx-auto pt-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-4">
        <Image
          src={"/slides/map.jpeg"}
          alt="busSchedule"
          width={500}
          height={500}
          sizes="100vw"
          className="h-96 w-full"
        />
        <Image
          src={"/slides/Hub2-Map.jpeg"}
          alt="busSchedule"
          width={500}
          height={500}
          sizes="100vw"
          className="h-96 w-full shrink "
        />
      </div>
      <ImageCrusol />
      <Services />
    </section>
  );
}
