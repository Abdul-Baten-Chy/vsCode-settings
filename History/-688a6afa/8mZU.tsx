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
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-20">Shop by category</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="mt-10"
      >
        <CarouselContent className="px-4">
          <CarouselItem className="md:basis-1/2 lg:basis-1/4 border-2 mx-4 w-[150px] ">
            <img
              src={fish}
              alt=""
              className="w-full object-cover overflow-hidden"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4 border-2 mx-4">
            <img
              src={veg}
              alt=""
              className="w-full object-cover overflow-hidden"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4 border-2 mx-4">
            <img
              src={sea}
              alt=""
              className="w-full object-cover overflow-hidden"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4 border-2 mx-4">
            <img
              src={juice}
              alt=""
              className="w-full object-cover overflow-hidden"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4 border-2 mx-4">
            <img
              src={fruit}
              alt=""
              className="w-full object-cover overflow-hidden"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4 border-2 mx-4">
            <img
              src={masala}
              alt=""
              className="w-full object-cover overflow-hidden"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Category;
