"use client";

import Image from "next/image";

// Third-party imports
import { Star } from "lucide-react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Local imports
import { testimonials } from "@/constants";
import { SmallTitle } from "../small-title";

const TOTAL_STARS = 5;

export const TestimonialSlider = () => {
  return (
    <section className="section items-center justify-center">
      <SmallTitle title="Testimonials" />

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        centeredSlides
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="wrapper w-full"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-slide mx-auto flex max-w-lg flex-col items-center gap-8">
              <div className="flex gap-4">
                {[...Array(TOTAL_STARS)].map((_, i) =>
                  i < item.numStars ? (
                    <Star
                      key={i}
                      className="fill-[#F5B341]"
                    />
                  ) : (
                    <Star
                      key={i}
                      className="fill-[#E6F0DD]"
                    />
                  )
                )}
              </div>

              <p className="text-center text-lg sm:text-xl">
                {item.testimonial}
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="size-14 rounded-full border-2 border-[#E6F0DD] object-cover"
                />

                <div>
                  <h5 className="text-lg font-medium sm:text-xl">
                    {item.name}
                  </h5>
                  <p className="sm:text-lg">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
