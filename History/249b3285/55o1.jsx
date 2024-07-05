import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../src/assets/img1.jpg";
import img2 from "../src/assets/img2.jpg";
import img3 from "../src/assets/img3.jpg";
import img4 from "../src/assets/img4.jpg";

const Hero = () => {
  return (
    <div className=" max-h-[100vh] !important relative">
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
          <img src={img1} alt="" className="object-cover overflow-hidden" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="object-cover overflow-hidden" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="object-cover overflow-hidden" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="object-cover overflow-hidden" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
