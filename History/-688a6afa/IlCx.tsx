import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import fish from "../../assets/fish.webp";
import fruit from "../../assets/fruits.png";
import juice from "../../assets/juice.png";
import masala from "../../assets/masala.png";
import sea from "../../assets/sea.png";
import veg from "../../assets/veg.webp";

const Category = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-20">Shop by category</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="mt-10"
      >
        <CarouselContent className="flex gap-4">
          <CarouselItem className="md:basis-1/3 lg:basis-1/5 border-2 pl-4 flex flex-col items-center justify-center ">
            <img
              src={fish}
              alt=""
              className="object-cover overflow-hidden  bg-black "
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 lg:basis-1/5 border-2 pl-4 flex flex-col items-center justify-center">
            <img src={veg} alt="" className=" object-cover overflow-hidden" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 lg:basis-1/5 border-2 pl-4 flex flex-col items-center justify-center">
            <img src={sea} alt="" className=" object-cover overflow-hidden" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 lg:basis-1/5 border-2 pl-4 flex flex-col items-center justify-center">
            <img src={juice} alt="" className=" object-cover overflow-hidden" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 lg:basis-1/5 border-2 pl-4 flex flex-col items-center justify-center">
            <img src={fruit} alt="" className="object-cover overflow-hidden" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 lg:basis-1/5 border-2 pl-4 flex flex-col items-center justify-center">
            <img src={masala} alt="" className="object-cover overflow-hidden" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Category;
