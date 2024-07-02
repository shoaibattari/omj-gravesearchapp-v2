import Categories from "./Components/ui/Categories";
import ImageCrusol from "./Components/ui/imageSlider/ImageCrusol";
import Services from "./Components/ui/Services";

export default function Home() {
  return (
    <section>
      <Categories />
      <ImageCrusol />
      <Services />
    </section>
  );
}