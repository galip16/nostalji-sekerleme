import React from "react";
import productData from "../productsInfo.json";
import ImageGallery from "react-image-gallery";

function GalerySlider(selectedProduct) {
  console.log(productData[selectedProduct.selectedProduct]);

  const images = [
    {
      original: productData[selectedProduct.selectedProduct].photos[0],
      thumbnail: productData[selectedProduct.selectedProduct].photos[0],
    },
    {
      original: productData[selectedProduct.selectedProduct].photos[1],
      thumbnail: productData[selectedProduct.selectedProduct].photos[1],
    },
    {
      original: productData[selectedProduct.selectedProduct].photos[2],
      thumbnail: productData[selectedProduct.selectedProduct].photos[2],
    },
    {
      original: productData[selectedProduct.selectedProduct].photos[3],
      thumbnail: productData[selectedProduct.selectedProduct].photos[3],
    },
  ];

  return (
    <div className="galerySlider">
      <h2> {productData[selectedProduct.selectedProduct].name} </h2>
      <ImageGallery
        items={images}
        autoPlay={true}
        showPlayButton={false}
        slideDuration={600}
      />
    </div>
  );
}

export default GalerySlider;
