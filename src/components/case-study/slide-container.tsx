"use client";

import { useState } from "react";

// Third-party imports
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

interface Slide {
  url: string;
}

interface SlideContainerProps {
  slides: Slide[];
}

export const SlideContainer = ({ slides }: SlideContainerProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  // Format slides for yet-another-react-lightbox
  const images = slides.map(slideImage => ({ src: slideImage.url }));

  return (
    <div className="slide-container">
      <Slide easing="ease">
        {slides.map((slideImage, index) => (
          <div
            key={index}
            style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            className="cursor-pointer"
            onClick={() => openLightbox(index)}
          ></div>
        ))}
      </Slide>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={images}
        index={currentIndex}
        plugins={[Zoom]}
      />
    </div>
  );
};
