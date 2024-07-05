import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import img1 from "../../assets/sid.jpg";
import slider1 from "../../assets/slider-01.jpg";
import slider2 from "../../assets/slider-02.jpg";
import slider3 from "../../assets/slider-03.jpg";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div>
      <div></div>
      <div className="grid grid-cols-5 gap-8 min-h-screen">
        <div className="min-h-screen relative">
          <img src={img1} alt="" className="h-[570px]  overflow-hidden" />
          <button className="bg-[#f1b155] px-5 py-2 mt-8 rounded-md absolute bottom-24 text-white left-12">
            Shop Now
          </button>
        </div>
        <div className="col-span-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem className="relative">
                <img
                  src={slider1}
                  alt=""
                  className="w-full object-cover overflow-hidden"
                />
                <div className="absolute top-48 left-24">
                  <p className="text-lg text-[#f1b155] mb-8">
                    First 10 sale 20% Offer
                  </p>
                  <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                      Enjiong
                    </span>
                    <br />
                    Grocery.
                  </h1>
                  <button className="bg-[#f1b155] px-5 py-2 mt-8 text-white rounded-md">
                    Shop Now
                  </button>
                </div>
              </CarouselItem>
              <CarouselItem className="relative">
                <img
                  src={slider2}
                  alt=""
                  className="w-full object-cover overflow-hidden"
                />
                <div className="absolute top-48 left-24">
                  <p className="text-lg text-[#f1b155] mb-8">
                    First 10 sale 20% Offer
                  </p>
                  <h3 className="text-5xl font-semibold ">
                    Enjiong <br />
                    Grocery
                  </h3>
                  <button className="bg-[#f1b155] px-5 py-2 mt-8 text-white rounded-md">
                    Shop Now
                  </button>
                </div>
              </CarouselItem>
              <CarouselItem className="relative">
                <img
                  src={slider3}
                  alt=""
                  className="w-full object-cover overflow-hidden"
                />
                <div className="absolute top-48 left-24">
                  <p className="text-lg text-[#f0A843] mb-8">
                    First 10 sale 20% Offer
                  </p>
                  <h3 className="text-5xl font-semibold ">
                    Enjiong <br />
                    Grocery
                  </h3>
                  <button className="bg-[#f0A843] px-5 py-2 mt-8 text-white rounded-md">
                    Shop Now
                  </button>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="mx-20 bg-[#f0A843] text-white" />
            <CarouselNext className="mx-20 bg-[#f0A843] text-white" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
