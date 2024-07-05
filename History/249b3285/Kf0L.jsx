import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Hero = () => {
  return (
    <div className=" max-h-[100vh]  relative">
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
        className="mySwiper max-h-[100vh]"
      >
        <SwiperSlide>
          <h2 className="absolute top-[25%] left-[8%] text-white text-7xl bg-black bg-opacity-60 px-14 py-20 ">
            From Excess to{" "}
            <span className="font-bold text-[#36D6A8]">Empathy</span>,<br /> One
            <span className="font-bold text-[#36D6A8] "> Meal</span> at a Time
          </h2>
          <img src={img1} alt="" className="object-cover overflow-hidden" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="absolute top-[25%] left-[8%] text-white text-7xl bg-black bg-opacity-60 px-14 py-20 ">
            From Excess to{" "}
            <span className="font-bold text-[#36D6A8]">Empathy</span>,<br /> One
            <span className="font-bold text-[#36D6A8] "> Meal</span> at a Time
          </h2>
          <img src={img2} alt="" className="object-cover overflow-hidden" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="absolute top-[25%] left-[8%] text-white text-7xl bg-black bg-opacity-60 px-14 py-20 ">
            From Excess to{" "}
            <span className="font-bold text-[#36D6A8]">Empathy</span>,<br /> One
            <span className="font-bold text-[#36D6A8] "> Meal</span> at a Time
          </h2>
          <img src={img3} alt="" className="object-cover overflow-hidden" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="absolute top-[25%] left-[8%] text-white text-7xl bg-black bg-opacity-60 px-14 py-20 ">
            From Excess to{" "}
            <span className="font-bold text-[#36D6A8]">Empathy</span>,<br /> One
            <span className="font-bold text-[#36D6A8] "> Meal</span> at a Time
          </h2>
          <img src={img4} alt="" className="object-cover overflow-hidden" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
