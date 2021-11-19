import React from "react";
import productData from "../productsInfo.json";
import ImageGallery from "react-image-gallery";

function GalerySlider() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div className="galerySlider">
      <h2>Pamuk Seker</h2>
      <ImageGallery items={images} autoPlay={true} showPlayButton={false} />
    </div>
  );
}

export default GalerySlider;
