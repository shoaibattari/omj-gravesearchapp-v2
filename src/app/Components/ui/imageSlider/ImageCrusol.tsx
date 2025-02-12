const images = [
  "certified-1",
  "map",
  "Hub2-Map",
  "grave-1",
  "grave-2",
  "grave-4",
  "grave-6",
  "Hub3-Gate",
  "certified-3",
];
import React from "react";
import ImageSlider from "./ImageSlider";

function ImageCrusol() {
  return (
    <div className="  p-2 -z-50 ">
      <div className="container mx-auto ">
        <ImageSlider images={images} />
      </div>
    </div>
  );
}

export default ImageCrusol;
