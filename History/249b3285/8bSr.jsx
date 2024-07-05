import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

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
          <h2 className="absolute top-[25%] left-[8%] text-white text-7xl bg-black opacity-65 px-14 py-20 ">
            From Excess to <span className="font-bold">Empathy</span>,<br /> One
            <span className="font-bold "> Meal</span> at a Time
          </h2>
          <img
            src="https://i.ibb.co/cChz2k6/rooms-suites-landing-banner1.jpg"
            alt=""
            className="object-cover"
          />
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
