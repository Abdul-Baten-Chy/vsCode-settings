import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import img1 from "../../assets/sid.png";
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
        <div className="min-h-screen">
          <img src={img1} alt="" className="h-[570px]  overflow-hidden" />
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
              <CarouselItem>
                <img
                  src={slider1}
                  alt=""
                  className="w-full object-cover overflow-hidden"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={slider2}
                  alt=""
                  className="w-full object-cover overflow-hidden"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={slider3}
                  alt=""
                  className="w-full object-cover overflow-hidden"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
