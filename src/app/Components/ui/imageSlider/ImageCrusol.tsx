const images = [
  "certified-1",
  // "certified-3",
  "map",
  "grave-1",
  "grave-2",
  "grave-4",
  "grave-6",
  "president",
  "members",
];
import React from "react";
import ImageSlider from "./ImageSlider";

function ImageCrusol() {
  return (
    <div className=" bg-transparent   p-6 -z-50 ">
      <div className="container mx-auto ">
        <ImageSlider images={images} />
      </div>
    </div>
  );
}

export default ImageCrusol;
