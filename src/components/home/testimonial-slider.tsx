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
import { TESTIMONIALS } from "@/constants";
import { Title } from "../title";
import { Paragraph } from "../paragraph";

const TOTAL_STARS = 5;

export const TestimonialSlider = () => {
  return (
    <section className="section items-center justify-center">
      <Title align="center">Testimonials</Title>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        centeredSlides
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="w-full"
      >
        {TESTIMONIALS.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-slide section items-center justify-center p-0">
              <div className="flex gap-4">
                {[...Array(TOTAL_STARS)].map((_, i) =>
                  i < item.numStars ? (
                    <Star
                      key={i}
                      className="fill-secondary-yellow"
                    />
                  ) : (
                    <Star
                      key={i}
                      className="fill-secondary-gray"
                    />
                  )
                )}
              </div>

              <Paragraph
                align="center"
                size="lg"
              >
                {item.testimonial}
              </Paragraph>

              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="border-secondary-gray size-14 rounded-full border-2 object-cover"
                />

                <div>
                  <Title size="xs">{item.name}</Title>
                  <Paragraph>{item.role}</Paragraph>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
