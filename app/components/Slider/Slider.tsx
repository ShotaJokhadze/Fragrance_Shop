"use client";

import React from "react";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { ShopButton } from "../Buttons/Buttons";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (

          <Swiper
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}   
            modules={[Pagination, Autoplay ]}
          >
            {data.map(({ id, image, title, description  }) => {
  return (
    <SwiperSlide key={id}>
      <div className="slider-container h-full w-full flex justify-center items-center"
      >
        <div className="slides w-4/5 h-full flex justify-left items-center gap-10 max-w-[1200px]">
        <div className="image h-2/3 w-1/2 relative">
          <Image
            src={image}
            alt="Slide Image"
            fill
            style={{ objectFit: 'contain' }} 
            priority
          />
        </div>
        <div className="slide-desc w-1/3 flex flex-col justify-between gap-6">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="max-w-">{description}</p>
          <ShopButton />
        </div>
        </div>
       
      </div>
      
      
    </SwiperSlide>
  );
})}
          </Swiper>
  );
};

export default DemoSlider;