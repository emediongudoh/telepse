declare module "react-slideshow-image" {
  import * as React from "react";

  export interface SlideProps {
    duration?: number;
    transitionDuration?: number;
    infinite?: boolean;
    indicators?: boolean | (() => React.ReactNode);
    arrows?: boolean;
    autoplay?: boolean;
    onChange?: (oldIndex: number, newIndex: number) => void;
    pauseOnHover?: boolean;
    slidesToShow?: number;
    slidesToScroll?: number;
    children?: React.ReactNode;
    easing?: string;
    cssClass?: string;
  }

  export const Slide: React.FC<SlideProps>;
  export const Zoom: React.FC<SlideProps>;
  export const Fade: React.FC<SlideProps>;
}
