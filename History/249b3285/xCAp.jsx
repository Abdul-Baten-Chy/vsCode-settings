import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../src/assets/header img_1.webp";

const Hero = () => {
  return (
    <div className="w-full relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h2 className="absolute top-[30%] left-[8%] text-white text-7xl bg-black bg-opacity-60 px-14 py-20 ">
            From Excess to{" "}
            <span className="font-bold text-[#F59E1A]">Empathy</span>,<br /> One
            <span className="font-bold text-[#F59E1A] "> Meal</span> at a Time
          </h2>
          <img src={img1} alt="" className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/H29cN41/rooms-suites-landing-banner2-new.jpg"
            alt=""
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/XZ2dFvt/home-banner1.jpg"
            alt=""
            className="object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
